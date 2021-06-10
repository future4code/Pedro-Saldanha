import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../constants/urls';
import { goToAdminHome, goToHome } from '../routes/coordinator';
import useForm from '../hooks/useForm'


function Login() {
  const history = useHistory()

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })


  const login = (event) => {
    event.preventDefault()

    axios.post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        cleanFields()
        goToAdminHome(history)
      })
      .catch((err) => {
        alert(err.response.data.message)
        cleanFields()
      })
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <div>
          <input
            name="email"
            type="email"
            placeholder='Email'
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder='Senha'
            value={form.password}
            onChange={onChange}
            required
          />
        </div>
        <div>

          <button>Entrar</button>
        </div>
      </form>
      <button onClick={() => goToHome(history)}>Voltar</button>
    </div>
  );
}

export default Login;