import React from "react"
import { Button, Img, NameText, PriceText, Card } from "./styled";


const ProductCard = (props) => {

    const {
        productName,
        productPrice,
        productImage
    } = props

    const priceAdjusted = (productPrice).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <Card>
            <Img src={productImage} alt={productName} />
            <NameText>{productName}</NameText>
            <PriceText>{priceAdjusted}</PriceText>
            <Button>Comprar</Button>
        </Card>

    )
}

export default ProductCard