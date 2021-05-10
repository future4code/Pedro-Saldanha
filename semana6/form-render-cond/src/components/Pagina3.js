import styled from "styled-components";
import FormRecebido from "./FormRecebido";

const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`

function Pagina3() {
    return (
        <FormContainer>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

            <p>5. Por que você não terminou um curso de graduação?</p>
            <input />



            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option value="Nenhum">Nenhum</option>
                <option value="Curso técnico">Curso Técnico</option>
                <option value="Curso de inglês">Curso de inglês</option>
            </select>

            <br />
            <button>Próxima Etapa</button>

        </FormContainer>
    );
}

export default Pagina3;