import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goToCreateTrip, goToHome } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls';
import { header } from '../constants/headers'


function AdminHome() {
  const history = useHistory()
  const [trip, setTrip] = useState({})

  useProtectedPage();

  const getTripDetail = (id) => {
    axios.get(`${BASE_URL}/trip/${id}`, header)
      .then((res) => {
        setTrip(res.data.trip)
      })
      .catch((err) => {
        console.log(err.response.data)
      })

  }

  useEffect(() => {
    getTripDetail("67nilY8HZyWMYlVeJxsC")
  }, [])

  const onclickLogout = () => {
    localStorage.removeItem("token")
    goToHome(history)
  }

  return (
    <div>
      <p>Painel Administrativo</p>
      <p>{trip.planet}</p>
      <div>
        <button onClick={() => goToCreateTrip(history)}>Criar Viagem</button>
        <button onClick={() => goToHome(history)}>Voltar</button>
        <button onClick={onclickLogout}>Logout</button>
      </div>
    </div>
  );
}

export default AdminHome;