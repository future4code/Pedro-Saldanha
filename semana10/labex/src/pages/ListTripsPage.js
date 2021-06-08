import React from 'react';
import { useHistory } from 'react-router';
import { goBack, goToApplicationForm } from '../routes/coordinator';


function ListTrips() {
  const history = useHistory()
  return (
    <div>
      <p>ListTrips</p>
      <div>
        <button onClick={() => goToApplicationForm(history)}>Inscrever-se</button>
        <button onClick={() => goBack(history)}>Voltar</button>
      </div>
    </div>
  );
}

export default ListTrips;