import styled from "styled-components";

export const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    padding:12px;
    margin-top:40px;

    @media (max-width: 699px){
        padding:12px;
        margin-top:0;
    }
`

export const TextContainer = styled.div`
    text-align:start;
    width:32vw;
    margin-left:40px;
    color:#99AABB;

    h1, h3{
        color:#FFFFFF;
    }

    h4{
        text-align:justify;
    }
    @media (max-width: 699px){
        text-align:start;
        width:80%;
        margin-left:0px;
    }
`

export const Card = styled.div`
    width:350px;
    height:520px;
    margin-bottom:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

`

export const MovieImg = styled.div`
    width:100%;
    height:100%;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;
`

export const BackArrow = styled.div`
    width: 3vmin;
	height: 3vmin;
	background: transparent;
	border-top: 1vmin solid white;
	border-right: 1vmin solid white;
	box-shadow: 0 0 0 lightgray;
	transition: all 200ms ease;
	
	
	left: 0;
	transform: translate3d(0,-50%,0) rotate(-135deg);

    margin:24px;

	
	&:hover {
		border-color: #99AABB;
		box-shadow: 0.5vmin -0.5vmin 0 white;
        cursor: pointer;
	}

    @media (max-width: 699px){
        margin:8px;
    }
`