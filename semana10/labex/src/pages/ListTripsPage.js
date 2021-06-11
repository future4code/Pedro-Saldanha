import React from 'react';
import { useHistory } from 'react-router';
import { goBack, goToApplicationForm } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'


function ListTrips() {
  const history = useHistory()
  const [trips] = useRequestData(`${BASE_URL}/trips`, {})


  return (
    <div>
      <div>
        <h1>Lista de Viagens</h1>
        <div>
          <button onClick={() => goToApplicationForm(history)}>Inscrever-se</button>
          <button onClick={() => goBack(history)}>Voltar</button>
        </div>
      </div>

      {trips.trips && trips.trips.map((trip) => {
        return <div key={trip.id}>
          <h3>{trip.name}</h3>
          <p>{trip.description}</p>
          <p>{trip.planet}</p>
          <p>{trip.durationInDays}</p>
          <p>{trip.date}</p>
        </div>
      })}


    </div>
  );
}

export default ListTrips;