import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ActivityCard = styled.div`

`

export default class SuggestedActivity extends React.Component {
    render() {
        return (
            <ActivityCard>
                <h2>Are you bored?</h2>
                <button onClick={this.props.getRandomActivity}>Click here</button>
                <hr />
                <p>Activity: {this.props.activity.activity}</p>
                <p>Type: {this.props.activity.type}</p>
                <p>Participants: {this.props.activity.participants} </p>
                <p>Cost (0-1): {this.props.activity.price} </p>
                <p>Accessibility (0-1. most to less): {this.props.activity.accessibility}</p>
            </ActivityCard>
        );
    }
}