import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Counter from './Counter'
import Metadata from './Metadata'
import { useState } from 'react';

function Card({ name, rating, year, plot, img }) {

    const [isDescriptionOn, setDescription] = useState(false)

    return (
        <div className='card'>
            <img src={img} />
            <div className='details'>
                <h2>
                    {name}

                    <IconButton className="descToggle" aria-label="expand" onClick={(e) => {
                        if (isDescriptionOn === true) {
                            setDescription(false)
                        } else {
                            setDescription(true)
                        }
                    }}>
                        {isDescriptionOn ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </h2>

                <Metadata rating={rating} year={year} />

                {isDescriptionOn ? <p className='plot'>{plot}</p> : ""}



                <Counter />
            </div>
        </div>
    )
}





export default Card;
