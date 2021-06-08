import React from 'react';
import { useHistory } from 'react-router';
import { goBack } from '../routes/coordinator';


function TripDetails() {
  const history = useHistory()
  return (
    <div>
      <p>TripDetails</p>
      <div>
        <button onClick={() => goBack(history)}>Voltar</button>
      </div>
    </div>
  );
}

export default TripDetails;