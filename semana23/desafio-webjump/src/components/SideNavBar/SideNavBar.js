import React from "react"
import { goToHome, goToPants, goToShirts, goToShoes } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { Nav, NavItem, NavList } from "./styled"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"

const SideNavBar = () => {
    const history = useHistory()
    const categories = useRequestData([], `${BASE_URL}/list.json`)
    const categoriesList = categories.items && categories.items.map((category) => {
        return (
            (category.name === "Camisetas" && <NavItem key={category.name} onClick={() => goToShirts(history)}>{category.name}</NavItem>) ||
            (category.name === "Calças" && <NavItem key={category.name} onClick={() => goToPants(history)}>{category.name}</NavItem>) ||
            (category.name === "Sapatos" && <NavItem key={category.name} onClick={() => goToShoes(history)}>{category.name}</NavItem>) ||
            <NavItem key={category.name} onClick={() => goToShoes(history)}>{category.name}</NavItem>)
    })

    return (
        <Nav >
            <NavList>
                <NavItem onClick={() => goToHome(history)}>Página Inicial</NavItem>
                {categoriesList}
                <NavItem>Contato</NavItem>
            </NavList>
        </Nav>
    )
}

export default SideNavBar