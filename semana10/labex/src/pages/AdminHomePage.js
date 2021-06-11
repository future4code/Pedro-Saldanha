
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { header } from '../constants/headers';
import { BASE_URL } from '../constants/urls';
import { useProtectedPage } from '../hooks/useProtectedPage';
import useRequestData from '../hooks/useRequestData';
import { goToCreateTrip, goToHome, goToTripDetails } from '../routes/coordinator';



function AdminHome() {
  const history = useHistory()
  const [trips, getData] = useRequestData(`${BASE_URL}/trips`, {})

  useProtectedPage();

  const onclickLogout = () => {
    localStorage.removeItem("token")
    goToHome(history)
  }

  const deleteTrip = (id) => {
    axios.delete(`${BASE_URL}/trips/${id}`, header)
      .then(() => {
        alert("Viagem deletada")
        getData(`${BASE_URL}/trips`)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
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

      {trips.trips && trips.trips.map((trip) => {
        return <div key={trip.id}>
          <h3 onClick={() => goToTripDetails(history, trip.id)}>{trip.name} - {trip.planet}</h3>
          <button onClick={() => deleteTrip(trip.id)}>x</button>

        </div>
      })}

    </div>
  );
}

export default AdminHome;