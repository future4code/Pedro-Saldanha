import axios from 'axios';
import React, { } from 'react';
import { useHistory } from 'react-router';
import { header } from '../constants/headers';
import { BASE_URL } from '../constants/urls';
import useForm from '../hooks/useForm';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goBack } from '../routes/coordinator';



function CreateTrip() {
  const history = useHistory()
  const { form, onChange, cleanFields } = useForm(
    {
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: ""
    })

  useProtectedPage();

  const onSubmitCreateTrip = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/trips`, form, header)
      .then(() => {
        alert("Viagem criada com sucesso!")
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    cleanFields()
  }

  return (
    <div>
      <p>CreateTrip</p>
      <form onSubmit={onSubmitCreateTrip}>
        <input
          placeholder="Nome"
          name="name"
          type="text"
          value={form.name}
          onChange={onChange}
          required
          pattern={"^.{5,}"}
          title={"O nome da viagem deve ter no mínimo 5 letras"}
        />
        <select
          placeholder="Planeta"
          name="planet"
          value={form.planet}
          onChange={onChange}
          required
        >
          <option defaultValue="selected">Selecionar planeta</option>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
        </select>
        <input
          placeholder="Data"
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />
        <input
          placeholder="Descrição"
          name="description"
          type="text"
          value={form.description}
          onChange={onChange}
          required
          pattern={"^.{30,}"}
          title={"A descrição da viagem deve ter no mínimo 30 caracteres"}
        />
        <input
          placeholder="Duração em dias"
          type="number"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          required
          min={50}
        />
        <button>Criar</button>
      </form>
      <div>
        <button onClick={() => goBack(history)}>Voltar</button>
      </div>
    </div>
  );
}

export default CreateTrip;