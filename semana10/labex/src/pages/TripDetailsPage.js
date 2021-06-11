import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goBack } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls';
import { header } from '../constants/headers'
import axios from 'axios';
import { useParams } from 'react-router-dom';



function TripDetails() {
  const history = useHistory()
  const [trip, setTrip] = useState({})
  const params = useParams()

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
    getTripDetail(params.id)
  }, [])

  return (
    <div>
      <div>
        <h1>{trip.name}</h1>
        <button onClick={() => goBack(history)}>Voltar</button>
      </div>

      <div>
        <h3>{trip.name}</h3>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
      </div>

      <div>
        <h3>Candidatos aprovados</h3>
      </div>

      <div>
        <h3>Candidatos Pendentes</h3>
        {trip.candidates && trip.candidates.map((candidate) => {
          return <div key={candidate.id}>
            <h3>{candidate.name}</h3>
            <p>{candidate.profession}</p>
            <p>{candidate.age}</p>
            <p>{candidate.country}</p>
            <p>{candidate.applicationText}</p>
          </div>
        })}
      </div>

    </div>
  );
}

export default TripDetails;