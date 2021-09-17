import React from "react"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import NavBar from "../NavBar/NavBar"
import { LogoHeader, SearchBar, SearchButton, HeaderContainer, Form } from "./styled"

const Header = () => {
    const categories = useRequestData([], `${BASE_URL}/list.json`)

    return (
        <HeaderContainer >
            <LogoHeader>

                <img src={"media/weblogo.png"} alt="logo"/>
                <Form>
                    <SearchBar />
                    <SearchButton>Buscar</SearchButton>
                </Form>
            </LogoHeader>
            <NavBar
                categories={categories}
            />
        </HeaderContainer>
    )
}

export default Header