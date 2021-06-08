import React from 'react';
import { useHistory } from 'react-router';
import { goBack } from '../routes/coordinator';


function ApplicationForm() {
  const history = useHistory()
  return (
    <div>
      <p>ApplicationForm</p>
      <div>
        <button onClick={() => goBack(history)}>Voltar</button>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default ApplicationForm;