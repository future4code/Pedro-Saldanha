import React, { useEffect, useState } from "react";
import { BACK_CARD_URL, BASE_URL } from "../../constants/url";
import { getCards } from "../../services/cards";
import { CardsContainer } from "./styled";


function Cards() {
    const [cards, setCards] = useState({})
    const [flipped, setFlipped] = useState(true)

    useEffect(() => {
        getCards(cards, setCards)

    }, [])

    let copyArray = cards.length > 0 && [...cards]

    const shuffleCards = (array) => {
        setFlipped(false)
        let newPosition
        let temp
        for (let i = array.length - 1; i > 0; i--) {
            newPosition = Math.floor(Math.random() * i);
            temp = array[i]
            array[i] = array[newPosition]
            array[newPosition] = temp
            console.log(array)
        }
        setCards(array)

    }



    const cardsMap = cards.length > 0 && cards.map((card) => {
        return (flipped ?
            <img src={`${BASE_URL}/${card.image}`} alt={card.name} key={card.name} />
            :
            <img src={`${BACK_CARD_URL}`} alt={card.name} key={card.name} onClick={()=>setFlipped(true)}/>)
    })

    return (
        <div>
            <button onClick={() => shuffleCards(copyArray)}>Shuffle</button>
            <CardsContainer>
                {cardsMap}
            </CardsContainer>
        </div>
    );
}

export default Cards;
