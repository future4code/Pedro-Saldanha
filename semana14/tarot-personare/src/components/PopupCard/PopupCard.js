import React from "react";
import { BASE_URL } from "../../constants/url";
import { DetailsContainer, PopupCardContainer, PopupTexts } from "./styled";


function PopupCard({ trigger, setTrigger, card }) {


    return trigger ? (
        <PopupCardContainer onClick={() => setTrigger(false)}>
            <DetailsContainer>
                <img src={`${BASE_URL}/${card.image}`} alt={card.name} />
                <PopupTexts>
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                </PopupTexts>
            </DetailsContainer>
        </PopupCardContainer>
    ) : (
        ""
    )
        ;
}

export default PopupCard;
