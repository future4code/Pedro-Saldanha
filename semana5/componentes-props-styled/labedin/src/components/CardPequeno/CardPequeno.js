import React from 'react';
import styled from 'styled-components'

const SmallCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    
    img {
        width: 25px;
        margin-right: 10px;
        border-radius: 50%;
    }
    h4 {
        margin-right: 8px;
    }
`

function CardPequeno(props){
    return (
        <SmallCardContainer>
            <img src={ props.imagem } />
            <h4>{props.info}</h4>
            <p>{props.descricao}</p>
        </SmallCardContainer>
    )
}

export default CardPequeno;