import React from "react"
import FilterBar from "../../components/FilterBar/FilterBar"
import Footer from "../../components/Footer/Footer"
import ProductCard from "../../components/ProductCard/ProductCard"
import { CardsContainer, PageContainer, PageContentContainer } from "../../constants/styled"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"

const ShirtsPage = () => {
    const shirts = useRequestData({}, `${BASE_URL}/1.json`)
    const shirtsCard = shirts.items && shirts.items.map((shirt) => {
        return <ProductCard
            key={shirt.name}
            productName={shirt.name}
            productPrice={shirt.price}
            productImage={shirt.image}
        />
    })

    return (
        <PageContainer>
            <PageContentContainer>
                <FilterBar
                    productInfo={shirts && shirts}
                />
                <CardsContainer>
                    {shirtsCard}
                </CardsContainer>
            </PageContentContainer>
            <Footer />
        </PageContainer>
    )
}

export default ShirtsPage