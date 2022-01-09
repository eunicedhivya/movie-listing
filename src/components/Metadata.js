import Icon from '@mui/material/Icon';

function Metadata({ rating, year }) {
    return (
        <div className="metadata">
            <ul>
                <li className="rating">Rating: <Icon>star</Icon>{rating}</li>
                <li className="year">Year: {year}</li>
            </ul>
        </div>
    )
}

export default Metadata;