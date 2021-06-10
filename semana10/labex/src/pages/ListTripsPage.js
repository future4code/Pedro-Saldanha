import React from 'react';
import { useHistory } from 'react-router';
import { goBack, goToApplicationForm } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'


function ListTrips() {
  const history = useHistory()
  const trips = useRequestData(`${BASE_URL}/trips`, {})


  return (
    <div>
      <p>Lista de Viagens</p>
      <div>
        {trips.trips && console.log(trips.trips)}
        <button onClick={() => goToApplicationForm(history)}>Inscrever-se</button>
        <button onClick={() => goBack(history)}>Voltar</button>
      </div>
    </div>
  );
}

export default ListTrips;