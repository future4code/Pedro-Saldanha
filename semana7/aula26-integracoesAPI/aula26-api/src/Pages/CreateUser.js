import React from 'react';

export default class CreateUser extends React.Component {


  render() {

    return (
      <div>
        <h2>Criar usuário</h2>
        <input placeholder={'Nome'} />
        <input placeholder={'Email'} />
        <button>Criar</button>
      </div>
    );
  }
}