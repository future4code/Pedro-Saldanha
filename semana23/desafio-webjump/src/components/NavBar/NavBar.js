import React from "react"
import { goToHome, goToPants, goToShirts, goToShoes } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { Nav, NavItem, NavList } from "./styled"

const NavBar = (props) => {
    const history = useHistory()
    const categoriesList = props.categories.items && props.categories.items.map((category) => {
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

export default NavBar