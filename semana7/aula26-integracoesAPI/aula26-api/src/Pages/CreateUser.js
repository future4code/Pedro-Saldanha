import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {
    state = {
        name: "",
        email: ""
    }

    header = {
        headers:{
            Authorization: "pedro-saldanha-paiva"
        }
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    handleName = (event) => {
        this.setState({name: event.target.value})
    }

    newUser = () =>{
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, this.header)
        .then(() =>{
            alert('Usuário adicionado com sucesso!')
            this.setState({name:"", email:""})
        })
        .catch((err)=>{
            alert(err.response.data.message)
            this.setState({name:"", email:""})
        }) 
    }

    render() {

        return (
            <div>
                <h2>Criar usuário</h2>
                <input
                    placeholder={'Nome'}
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <input
                    placeholder={'Email'}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.newUser}>Criar</button>
            </div>
        );
    }
}