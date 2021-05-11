import styled from "styled-components";


const FormContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: auto;
`

function Pagina1() {
    return (
        <FormContainer>
            <h3>ETAPA 1 - DADOS GERAIS</h3>

            <p>1. Qual é o seu nome?</p>
            <input />


            <p>2. Qual é a sua idade?</p>
            <input />


            <p>3. Qual é o seu email?</p>
            <input />


            <p>4. Qual é sua escolaridade?</p>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>

        </FormContainer>
    );
}

export default Pagina1;