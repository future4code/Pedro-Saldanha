import React, { } from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goBack } from '../routes/coordinator';



function CreateTrip() {
  const history = useHistory()

  useProtectedPage();

  return (
    <div>
      <p>CreateTrip</p>
      <div>
        <button onClick={() => goBack(history)}>Voltar</button>
        <button>Criar</button>
      </div>
    </div>
  );
}

export default CreateTrip;