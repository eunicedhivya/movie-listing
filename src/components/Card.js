import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Counter from './Counter'
import CrudBtns from './CrudBtns'
import Metadata from './Metadata'
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Card({ name, rating, year, plot, img, id, movies, setMovieList, getMovies }) {

    const history = useHistory();
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

                <div className='crud-ops'>
                    <Counter />
                    <CrudBtns id={id} movies={movies} setMovieList={setMovieList} getMovies={getMovies} />
                </div>
                <Button className='see-details' variant="contained" onClick={(e) => {
                        history.push("/movies/"+id)
                    }}>See Details&nbsp;<InfoIcon /></Button>
            </div>
        </div>
    )
}





export default Card;
