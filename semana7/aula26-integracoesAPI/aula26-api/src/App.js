import React from 'react';
import CreateUser from './Pages/CreateUser';
import UsersList from './Pages/UsersList';
import styled from 'styled-components'

const MainContainer = styled.div `
  display:flex;
  text-align:center;
  flex-direction: column;
`


export default class App extends React.Component {
  state = {
    currentPage: "CreateUser"
  }

  changePage = () => {
    if(this.state.currentPage === "CreateUser"){
      this.setState({currentPage: "UsersList"})
    } else {
      this.setState({currentPage: "CreateUser"})
    }
  }

  renderPage = () => {
    if(this.state.currentPage === "CreateUser"){
      return <CreateUser />
    } else if (this.state.currentPage === "UsersList"){
      return <UsersList />
    }
  }

  render() {

    return (
      <MainContainer>
        <div>
          <h1>Labenusers</h1>
          <button onClick={this.changePage}>Trocar de página</button>
        </div>

        {this.renderPage()}

      </MainContainer>
    );
  }
}

