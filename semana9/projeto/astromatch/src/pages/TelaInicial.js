import React from "react";
import {Container, Spinner} from "./Styled";
import Botoes from "../components/Botoes/Botoes";
import UserCard from "../components/UserCard/UserCard";


function TelaInicial(props) {

    return (
        <Container>
            {props.profile.profile ? (
                <>
                    <UserCard 
                        profile={props.profile} 
                        getProfile={props.getProfile}
                    />
                    <Botoes
                        profile={props.profile} 
                        getProfile={props.getProfile}
                    />
                </>
            ) : (
                <Spinner />
            )}

        </Container>
    );
}

export default TelaInicial;
