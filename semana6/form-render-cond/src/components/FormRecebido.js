import styled from "styled-components";

const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`


function FormRecebido() {
    return (
        <FormContainer>
            <h3>O FORMULÁRIO ACABOU</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </FormContainer>
    );
}

export default FormRecebido;