import React from "react"
import FilterBar from "../../components/FilterBar/FilterBar"
import Footer from "../../components/Footer/Footer"
import ProductCard from "../../components/ProductCard/ProductCard"
import { CardsContainer, PageContainer, PageContentContainer } from "../../constants/styled"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"

const PantsPage = () => {
    const pants = useRequestData({}, `${BASE_URL}/2.json`)
    const pantsCard = pants.items && pants.items.map((pant) => {
        return <ProductCard
            key={pant.name}
            productName={pant.name}
            productPrice={pant.price}
            productImage={pant.image}
        />
    })

    return (
        <PageContainer>
            <PageContentContainer>
                <FilterBar
                    productInfo={pants && pants}
                />
                <CardsContainer>
                    {pantsCard}
                </CardsContainer>
            </PageContentContainer>
            <Footer />
        </PageContainer>

    )
}

export default PantsPage