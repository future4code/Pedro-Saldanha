import React from "react";


function ShuffleButton() {

    const shuffleCards = (array) => {
        let newPosition
        let temp
        for (let i = array.length - 1; i > 0; i--) {
            newPosition = Math.floor(Math.random() * i) + 1;
            temp = array[i]
            array[i] = array[newPosition]
            array[newPosition] = temp
        }
        return array
    }

    return (
        <div>
            <button>Shuffle</button>
        </div>
    );
}

export default ShuffleButton;
