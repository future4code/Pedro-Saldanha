import React from 'react';
import axios from 'axios';

export default class UsersList extends React.Component {
  state = {
    users: []
  }

  header = {
    headers: {
      Authorization: "pedro-saldanha-paiva"
    }
  }

  componentDidMount = () => {
    this.getUsers()
  }

  getUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', this.header)
      .then((response) => {
        console.log(response.data)
        this.setState({ users: response.data })
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  deleteUser = (id) => {
    if (window.confirm('Deseja deletar o usuário?')) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, this.header)
        .then(() => {
          this.getUsers()
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  }

  render() {
    const mapUsers = this.state.users.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
        </div>
      )
    })
    return (
      <div>
        <h2>Lista de usuários</h2>
        {mapUsers}
      </div>
    );
  }
}