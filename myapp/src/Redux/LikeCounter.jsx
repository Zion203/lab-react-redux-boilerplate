import React, { useState } from 'react';
import reducer from "./Reducer";
import { increment, decrement } from './Action';
import { createStore } from "redux";

const store = createStore(reducer);
function LikeCounter() {
    const [count, setCount] = useState(0);
    

    store.subscribe(() => {
        setCount(store.getState().count);
    });

    const handleIncrement = () => {
        store.dispatch(increment());
    };

    const handleDecrement = () => {
        store.dispatch(decrement());
    };

    return (
        <>
          
                <h2>{count}</h2>
                <button onClick={handleIncrement}>Like</button>
                <button onClick={handleDecrement}>UnLike</button>
           
        </>
    );
}

export default LikeCounter;