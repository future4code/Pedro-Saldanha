import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../constants/urls';
import { goBack, goToAdminHome } from '../routes/coordinator';
import useInput from '../hooks/useInput'


function Login() {
  const history = useHistory()
  const [email, handleEmail] = useInput("")
  const [password, handlePassword] = useInput("")

  const login = () => {
    const body = { email, password }

    axios.post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToAdminHome(history)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })

    console.log(body)
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
        <input placeholder='Email' value={email} onChange={handleEmail} />
        <input placeholder='Senha' value={password} onChange={handlePassword} />
      </div>
      <div>
        <button onClick={() => goBack(history)}>Voltar</button>
        <button onClick={() => login()} >Entrar</button>
      </div>
    </div>
  );
}

export default Login;