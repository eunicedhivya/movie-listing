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
  const [color, setColor] = useState('pink');
  const styles = { backgroundColor: color };
  const [colorList, setColorList] = useState(['teal', 'blue', 'orange'])
  const [movieList, setMovieList] = useState([]);
  return (
    <div className="container">
      <h1>Colorbox</h1>
      <div className='inputSection'>
        <input
          style={styles}
          value={color}
          onChange={(e) => {
            console.log(e.target.value);
            setColor(e.target.value);
          }}
          placeholder='Enter a color' /> <br />
        <button onClick={
          () => {
            // setMovieList([...movieList,]);
            setColorList([...colorList, color]);
          }
        }>Add Color</button>
      </div>
      {
        colorList.map(function (item, id) {
          // console.log(item, id);
          return <ColorDiv key={id} clr={item} />
        })
      }
    </div>

  )
}

// function ColorBox({ clr }) {
//   const styles = {
//     backgroundColor: clr,
//     height: '25px',
//     width: '93%',
//     margin: '10px auto 0 auto'
//   }
//   return (
//     <div style={styles}></div>
//   )

// }

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