import styled from "styled-components";


export const PopupCardContainer = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display:flex;
    width:100%;
    height: 100vh;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const DetailsContainer = styled.div`
    background-color: white;
    display:flex;
    width: 50vw;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 16px;
    flex-wrap: wrap;
    margin-top: 32px;
    margin-bottom: 32px;
`

export const PopupTexts = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 32vw;
    font-family: 'Cormorant Garamond', serif;

`