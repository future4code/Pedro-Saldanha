import React from 'react';
import { useHistory } from 'react-router';
import { goBack, goToAdminHome } from '../routes/coordinator';


function Login() {
  const history = useHistory()
  return (
    <div>
      <p>Login</p>
      <div>
        <button onClick={() => goBack(history)}>Voltar</button>
        <button onClick={() => goToAdminHome(history)}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;