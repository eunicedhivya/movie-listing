import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from './components/Card';
// import Icon from '@mui/material/Icon';
// import IconButton from '@mui/material/IconButton';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Badge from '@mui/material/Badge';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';


function App() {
  let movies = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      year: "2001",
      rating: 5,
      plot:
        'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
      posterUrl:
        "https://assets-prd.ignimgs.com/2021/12/15/harry-potter-20th-anniversary-return-to-hogwarts-1639611054318.jpg"
    },
    {
      id: 2,
      title: "The Cotton Club",
      year: "1984",
      rating: 3,
      plot:
        "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      posterUrl:
        "https://movieposters2.com/images/669657-b.jpg"
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      year: "1994",
      rating: 5,
      plot:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://www.themoviedb.org/t/p/original/hBcY0fE9pfXzvVaY4GKarweriG2.jpg"
    },
    {
      id: 4,
      title: "Crocodile Dundee",
      year: "1986",
      rating: 3,
      plot:
        "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
    {
      id: 5,
      title: "Valkyrie",
      year: "2008",
      rating: 4,
      plot:
        "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
      posterUrl:
        "https://movieposters2.com/images/659675-b.jpg"
    }
  ];
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [moviePlot, setMoviePlot] = useState("");
  const [movieimg, setMovieimg] = useState("");

  const [movieList, setMovieList] = useState(movies);



  return (
    <div className="App">
      <h1>Movie Listing</h1>
      <section className='form-section'>
        <div className='forms'>
          <TextField label="Name" variant="outlined" type="text" placeholder='Name' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
          <TextField label="Rating" variant="outlined" type="text" placeholder='Rating' value={movieRating} onChange={(e) => setMovieRating(e.target.value)} />
          <TextField label="Year" variant="outlined" type="text" placeholder='Year' value={movieYear} onChange={(e) => setMovieYear(e.target.value)} />
        </div>
        <div className='forms'>
          <TextField label="Plot" variant="outlined" type="text" placeholder='Plot' value={moviePlot} onChange={(e) => setMoviePlot(e.target.value)} />
          <TextField label="Poster" variant="outlined" type="text" placeholder='Poster' value={movieimg} onChange={(e) => setMovieimg(e.target.value)} />
        </div>
        <br />
        <Button variant="contained" onClick={(e) => {
          let newMovie = {
            id: movieList.length + 1,
            title: movieTitle,
            year: movieYear,
            rating: movieRating,
            plot: moviePlot,
            posterUrl: movieimg
          }
          setMovieList([...movieList, newMovie])
          console.log(movieList);
        }}>Add Movie</Button>
      </section>
      <div className='cardlist'>

        {movieList.map(function (movie) {
          return (
            <Card
              key={movie.id}
              name={movie.title}
              rating={movie.rating}
              year={movie.year}
              plot={movie.plot}
              img={movie.posterUrl}
            />
          );
        })}

      </div>
    </div>
  );
}

// function Card({ name, rating, year, plot, img }) {
//   const [isDescriptionOn, setDescription] = useState(false)

//   return (
//     <div className='card'>
//       <img src={img} />
//       <div className='details'>
//         <h2>{name}</h2>
//         <div className="metadata">
//           <ul>
//             <li className="rating">Rating: <Icon>star</Icon>{rating}</li>
//             <li className="year">Year: {year}</li>
//           </ul>
//         </div>
//         <div className="metadata">
//           <ul>
//             <li><Badge badgeContent={4} color="primary">
//               <ThumbUpIcon className="icons" />
//             </Badge></li>
//             <li><Badge badgeContent={4} color="primary">
//               <ThumbDownIcon className="icons" />
//             </Badge></li>
//           </ul>
//         </div>
//         <IconButton className="descToggle" aria-label="expand" onClick={(e) => {
//           if (isDescriptionOn === true) {
//             setDescription(false)
//           } else {
//             setDescription(true)
//           }
//         }}>
//           {isDescriptionOn ? <ExpandLessIcon /> : <ExpandMoreIcon />} Toggle
//         </IconButton>
//         {/* <Button variant="text" onClick={(e) => {
//           if (isDescriptionOn === true) {
//             setDescription(false)
//           } else {
//             setDescription(true)
//           }
//         }}><span>{isDescriptionOn ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span> Toggle Description</Button> */}
//         {/* <p className='plot' style={{ display: isDescriptionOn ? 'block' : 'none' }}>
//           {plot}
//         </p> */}

//         {isDescriptionOn ? <p className='plot'>{plot}</p> : ""}
//       </div>
//     </div>
//   )
// }


export default App;
