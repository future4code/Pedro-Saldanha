import React from "react"
import FilterBar from "../../components/FilterBar/FilterBar"
import Footer from "../../components/Footer/Footer"
import ProductCard from "../../components/ProductCard/ProductCard"
import { CardsContainer, PageContainer, PageContentContainer } from "../../constants/styled"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"

const ShoesPage = () => {
    const shoes = useRequestData({}, `${BASE_URL}/3.json`)
    const shoesCard = shoes.items && shoes.items.map((shoe) => {
        return <ProductCard
            key={shoe.name}
            productName={shoe.name}
            productPrice={shoe.price}
            productImage={shoe.image}
        />
    })

    return (
        <PageContainer>
            <PageContentContainer>
                <FilterBar
                    productInfo={shoes && shoes}
                />
                <CardsContainer>
                    {shoesCard}
                </CardsContainer>
            </PageContentContainer>
            <Footer />
        </PageContainer>
    )
}

export default ShoesPage