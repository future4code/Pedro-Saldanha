import styled from "styled-components";


export const PageContainer = styled.div`
    width:80%;
    margin:auto;
    min-height:100vh;


    @media (min-width: 500px) and (max-width: 1100px) {
    width:90%;
    }

    @media (min-width: 0px) and (max-width: 500px) {
    width:100%;
  }

`

export const PageContentContainer = styled.div`
    display:flex;

    @media (min-width: 0px) and (max-width: 500px) {
    flex-wrap:wrap;
    justify-content:center;
  }
`

export const CardsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: 80%;
    box-sizing: border-box;

`
