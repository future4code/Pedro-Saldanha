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
  const year = trip.date && trip.date.slice(0, 4)
  const month = trip.date && trip.date.slice(5, 7)
  const day = trip.date && trip.date.slice(8, 10)
  const orderedDate = `${day}/${month}/${year}`

  useProtectedPage();

  const getTripDetail = (id) => {
    axios.get(`${BASE_URL}/trip/${id}`, header)
      .then((res) => {
        setTrip(res.data.trip)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })

  }

  const onClickApprove = (tripId, candidateId, approvalDecision) => {
    const body = {
      approve: approvalDecision
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, header)
      .then(() => {
        if (approvalDecision === true) {
          alert("Candidato aprovado :)")
          getTripDetail(params.id)
        } else {
          alert("Candidato rejeitado :(")
          getTripDetail(params.id)
        }

      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  useEffect(() => {
    getTripDetail(params.id)
  }, [params.id])

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
        <p>{orderedDate}</p>
      </div>

      <div>
        <h3>Candidatos aprovados</h3>
        {trip.approved && trip.approved.map((candidate) => {
          return <div key={candidate.id}>
            <p>{candidate.name}</p>
          </div>
        })}
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
            <div>
              <button onClick={() => onClickApprove(trip.id, candidate.id, false)}>Rejeitar</button>
              <button onClick={() => onClickApprove(trip.id, candidate.id, true)}>Aprovar</button>
            </div>
          </div>
        })}
      </div>

    </div>
  );
}

export default TripDetails;