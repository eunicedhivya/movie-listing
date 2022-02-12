import Icon from '@mui/material/Icon';
import { useState, useReducer } from 'react';
function Colorbox() {
    return (
        <div>
            <AddBox />
        </div>
    )
}

function reducer(colors, action){
    switch (action.type){
        case "add-todo":
            return [...colors, newColor(action.payload.color)]
        case "change-color":
            return newColor(action.payload.color)
    }
}

function newColor(color){
    return { id:Date.now(), color:color}
}



function AddBox() {
    const [colors, dispatch] = useReducer(reducer, [])
    console.log(colors);
    
    const [color, setColor] = useState('');
  return (
    <div className="container">
      <h1>Colorbox</h1>
      <input
          style={{backgroundColor: color}}
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }} />

        <button onClick={
          (e) => {
            dispatch({ type: "add-todo", payload: {color: color}});
            // setColor('');
            setColor(color);
          }
        }>Add Color</button>
        <div className='colorList'>
            {
            colors.map(function(item, id){
                console.log(item.color, id);
                return <ColorDiv key={item.id} clr={item.color} />
            })
        }
        </div>
    </div>

  )
}

function ColorDiv({ clr }) {
  const styles = {
    backgroundColor: clr,
    height: '25px',
    width: '150px',
    margin: '10px auto 0 auto'
  }
  return (
    <div style={styles}></div>
  )

}


export default Colorbox;