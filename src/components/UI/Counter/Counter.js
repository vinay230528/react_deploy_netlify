import React, { useState } from "react";
import Aux from "../../../hoc/Auxillary";

const Counter = (props) => {
    const { add, remove, countId, quantity } = props;
    const [count, setCount] = useState(1);

    const addCount = () => {
        if (count >= 5) {
            setCount(5);
        } else {
            setCount(prevVal => prevVal + 1);
        }
    }

    const removeCount = () => {
        if (count < 0) {
            setCount(1);
            return;
        }
        setCount(prevVal => prevVal - 1);
    }

    quantity(count);
    // console.log('quntity: ', quantity);
    return (
        <Aux>
            <button
                onClick={removeCount}
                id={remove}
                disabled={(count <= 1) ? true : false}> - </button>
            <span id={countId}>{count} </span>
            <button
                onClick={addCount}
                id={add}
                disabled={(count >= 5) ? true : false}> + </button>
        </Aux>
    )
}

export default Counter;