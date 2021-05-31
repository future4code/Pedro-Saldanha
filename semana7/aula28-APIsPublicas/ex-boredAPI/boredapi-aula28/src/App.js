import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SuggestedActivity from './components/SuggestedActivity';

const MainContainer = styled.div`
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    display:flex;
    /* text-align:center; */
    flex-direction: column;
`


export default class App extends React.Component {
  state = {
    activity: {}
  }
  getRandomActivity = () => {
    axios.get('http://www.boredapi.com/api/activity/')
      .then((res) => {
        this.setState({ activity: res.data })
      })
      .catch((err) => {
        console.log(err.data)
      })
  }

  render() {

    return (
      <MainContainer className="App">
        <SuggestedActivity 
          getRandomActivity={this.getRandomActivity}
          activity={this.state.activity}
        />
      </MainContainer>
    );

  }
}

