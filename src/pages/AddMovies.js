
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

function AddMovies({movieList, setMovieList}){
    const history = useHistory()

    const [newMovie, setNewMovie] = useState({
        "title": "",
        "year": "",
        "rating": "",
        "plot": "",
        "poster": "",
        "trailer": "",
    });

    const { title, year, rating, plot, poster, trailer } = newMovie;

    // const onInputChange = (e) => {
    //   setNewMovie({...newMovie, [e.target.name]: e.target.value})
    // }

    const url = "https://618fa735f6bf4500174849a5.mockapi.io/movies/"
    
    const formValidationSchema = Yup.object({
        title: Yup
          .string()
          .required('  Title is required'),
        rating: Yup
          .number()
          .min(1)
          .max(10)
          .required('  Rating is required'),
        year: Yup
          .string()
          .min(1)
          .max(4)
          .required('  Year is required'),
        plot: Yup
          .string()
          .min(20)
          .max(140)
          .required('  Plot is required'),
        poster: Yup
          .string()
          .min(4)
          .required('  Poster url is required'),
        trailer: Yup
          .string()
          .min(4)
          .required('  Trailer url is required')
    })
    const formik = useFormik({
        initialValues: {
            title: '',
            rating: '0',
            year: '',
            plot: '',
            poster: '',
            trailer: '',
        },
        validationSchema: formValidationSchema,
        onSubmit : (values) => {
            console.log("onSubmit", values);
            fetch(url, {method: "POST", headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            }, body: JSON.stringify(values)})
          .then(data => data.json())
          .then(data => {
              console.log('Success:', data);
              history.push("/movies");
          })
        }
    })
    return (
        <section className='form-section'>
          <h1>Add Movie</h1>
        <form onSubmit={formik.handleSubmit}>
            <TextField label="title" value={formik.values.title} variant="outlined" type="text" name="title" onChange={formik.handleChange} 
            onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.title)}/>            
            {formik.errors.title && formik.touched.title
             ? formik.errors.title
             : ""
            }<br /><br />

            <TextField label="rating" value={formik.values.rating} variant="outlined" type="text" name="rating" onChange={formik.handleChange} 
            onBlur={formik.handleBlur} error={formik.touched.rating && Boolean(formik.errors.rating)}/>            
            {formik.errors.rating && formik.touched.rating
             ? formik.errors.rating
             : ""
            }<br /><br />
            
            <TextField label="year" value={formik.values.year} variant="outlined" type="text" name="year" onChange={formik.handleChange} 
            onBlur={formik.handleBlur} error={formik.touched.year && Boolean(formik.errors.year)}/>            
            {formik.errors.year && formik.touched.year
             ? formik.errors.year
             : ""
            }<br /><br />
            
            <TextField label="plot" value={formik.values.plot} variant="outlined" type="text" name="plot" onChange={formik.handleChange} 
            onBlur={formik.handleBlur} error={formik.touched.plot && Boolean(formik.errors.plot)}/>            
            {formik.errors.plot && formik.touched.plot
             ? formik.errors.plot
             : ""
            }<br /><br />
            
            <TextField label="poster" value={formik.values.poster} variant="outlined" type="text" name="poster" onChange={formik.handleChange} 
            onBlur={formik.handleBlur} error={formik.touched.poster && Boolean(formik.errors.poster)}/>            
            {formik.errors.poster && formik.touched.poster
             ? formik.errors.poster
             : ""
            }<br /><br />
            
            <TextField label="trailer" value={formik.values.trailer} variant="outlined" type="text" name="trailer" onChange={formik.handleChange} 
            onBlur={formik.handleBlur} error={formik.touched.trailer && Boolean(formik.errors.trailer)}/>            
            {formik.errors.trailer && formik.touched.trailer
             ? formik.errors.trailer
             : ""
            }<br /><br />

            <Button variant="contained" type="submit">Add Movie</Button>
        </form>

      </section>
    )
}

export default AddMovies;