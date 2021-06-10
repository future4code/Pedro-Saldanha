import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goBack } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls';
import { header } from '../constants/headers'
import axios from 'axios';



function TripDetails() {
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

  return (
    <div>
      <p>TripDetails</p>
      <p>{trip.planet}</p>
      <div>
        <button onClick={() => goBack(history)}>Voltar</button>
      </div>
    </div>
  );
}

export default TripDetails;