import React from "react"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { goToPants, goToShirts, goToShoes } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { FilterContainer, List, ListItem } from "./styled"

const FilterBar = (props) => {


    const history = useHistory()
    const categories = useRequestData([], `${BASE_URL}/list.json`)
    const categoriesList = categories.items && categories.items.map((category) => {
        return (
            (category.name === "Camisetas" && <ListItem key={category.name} onClick={() => goToShirts(history)}>{category.name}</ListItem>) ||
            (category.name === "Calças" && <ListItem key={category.name} onClick={() => goToPants(history)}>{category.name}</ListItem>) ||
            (category.name === "Sapatos" && <ListItem key={category.name} onClick={() => goToShoes(history)}>{category.name}</ListItem>) ||
            <ListItem key={category.name} onClick={() => goToShoes(history)}>{category.name}</ListItem>)
    })

    const productInfo = props.productInfo.filters && props.productInfo.filters.map((product) => {
        return ((product.color && product.color) || (product.gender && product.gender))
    })

    return (
        <FilterContainer >
            <h3>Filtre Por</h3>
            <h4>Categorias</h4>
            <List>
                {categoriesList}
            </List>
            <h4>{productInfo}</h4>

        </FilterContainer>
    )
}

export default FilterBar