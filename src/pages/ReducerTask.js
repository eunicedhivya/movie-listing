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
            return {...state, count: state.count + 1}
        case "decrement":
            return {...state, count: state.count - 1}
        case "reset":
            return initailState;
        case "change-color":
            return { ...state, color: action.payload };
        default:
            return state;
    }

}

const initailState = { count: 0, color:""}

function Counter(){
    const [state, dispatch] = useReducer(reducer, initailState)
    console.log(state);
    return (
        <div className='reducer-task'>
            <div className='inputbox'>
                <input
                style={{backgroundColor:state.color}}
                value={state.color}
                onChange={(e) => {
                    console.log(e.target.value);
                    dispatch({ type: "change-color", payload:e.target.value })
                }} />
            </div>
            <p style={{color:state.color}}>{state.count}</p>
            <button onClick={()=>dispatch({ type: "increment" })}>+</button>
            <button onClick={()=>dispatch({ type: "reset" })}>Reset</button>
            <button onClick={()=>dispatch({ type: "decrement" })}>-</button>
        </div>
    )
}


export default ReducerTask;