import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CatPicGif from './components/CatPicGif'

const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
`
const baseUrl = 'https://cataas.com/cat'

export default class App extends React.Component {
  state = {
    catPic: {}
  }

  getCatPic = () => [
    axios.get(`${baseUrl}/c`)
      .then((res) => {

        this.setState({ catPic: res})
        console.log(this.state.catPic)
      })
      .catch((err) => {
        console.log(err)
      })
  ]

  render() {

    return (
      <MainContainer>
        <h2>A cat a day (or as many as you want)</h2>
        <div>
          <button onClick={this.getCatPic}>Get a cat pic</button>
          <button>Get a cat gif</button>
        </div>
        <img src={this.state.catPic}></img>
        <CatPicGif />
      </MainContainer>
    );
  }
}

