import styled from "styled-components";

const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`

function Pagina2() {
    return (
        <FormContainer>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>

            <p>5. Qual curso?</p>
            <input />

            <p>6. Qual a unidade de ensino?</p>
            <input />

        </FormContainer>
    );
}

export default Pagina2;