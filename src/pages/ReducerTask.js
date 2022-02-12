import Icon from '@mui/material/Icon';
import { useState, useReducer } from 'react';
function ReducerTask() {
    return (
        <div>
            <h1>Reducer Task</h1>
            <Counter />
        </div>
    )
}

const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type){
        case "increment":
            return { count: state.count + 1, color: state.color}
        case "decrement":
            return { count: state.count - 1, color: state.color}
        case "reset":
            return { count: 0, color: ''}
        case "change-color":
            return { count: state.count, color: action.payload }
        default:
            return state;
    }

}

const initailState = { count: 0, color:""}

function Counter(){
    const [state, dispatch] = useReducer(reducer, initailState)
    console.log(state);
    return (
        <div>
            <input
                style={{backgroundColor:state.color}}
                value={state.color}
                onChange={(e) => {
                    console.log(e.target.value);
                    dispatch({ type: "change-color", payload:e.target.value })
                }} /> <br /><br />
            <p>{state.count}</p>
            <button onClick={()=>dispatch({ type: "increment" })}>+</button>
            <button onClick={()=>dispatch({ type: "reset" })}>Reset</button>
            <button onClick={()=>dispatch({ type: "decrement" })}>-</button>
        </div>
    )
}


export default ReducerTask;