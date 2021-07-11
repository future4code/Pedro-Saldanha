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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non tempus est. In sed fermentum arcu, sed maximus quam. Morbi aliquet lacus nunc, mattis auctor urna hendrerit non. Quisque commodo nisl urna, vel mattis elit venenatis a. Duis cursus sollicitudin vulputate.
                    </p>
                </PopupTexts>
            </DetailsContainer>
        </PopupCardContainer>
    ) : (
        ""
    )
        ;
}

export default PopupCard;
