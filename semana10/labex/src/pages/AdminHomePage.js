import React from 'react';
import { useHistory } from 'react-router';
import { goBack, goToCreateTrip } from '../routes/coordinator';


function AdminHome() {
  const history = useHistory()
  return (
    <div>
      <p>AdminHome</p>
      <div>
        <button onClick={() => goToCreateTrip(history)}>Criar Viagem</button>
        <button onClick={() => goBack(history)}>Voltar</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default AdminHome;