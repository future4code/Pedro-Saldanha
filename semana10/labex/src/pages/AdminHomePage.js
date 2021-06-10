
import React from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goToCreateTrip, goToHome } from '../routes/coordinator';



function AdminHome() {
  const history = useHistory()

  useProtectedPage();

  const onclickLogout = () => {
    localStorage.removeItem("token")
    goToHome(history)
  }

  return (
    <div>
      <div>
        <p>Painel Administrativo</p>
        <div>
          <button onClick={() => goToCreateTrip(history)}>Criar Viagem</button>
          <button onClick={() => goToHome(history)}>Voltar</button>
          <button onClick={onclickLogout}>Logout</button>
        </div>
      </div>

    </div>
  );
}

export default AdminHome;