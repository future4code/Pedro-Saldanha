import React from "react";
import { Card, ProfilePic, TextContainer } from "./Styled";


function UserCard(props) {

    return (
        <Card>

            <ProfilePic style={{ backgroundImage: `url(${props.profile.profile.photo})` }}>
                <TextContainer>
                    <h2>{props.profile.profile.name} - {props.profile.profile.age} </h2>
                    <p>{props.profile.profile.bio}</p>
                </TextContainer>
            </ProfilePic>



        </Card>
    );
}

export default UserCard;
