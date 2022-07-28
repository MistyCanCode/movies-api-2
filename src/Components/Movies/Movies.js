import axios from 'axios';
import React, { useState } from 'react';
import Header from '../Header/Header';
import './Movies.css'
import { config } from '../../config.js'

const Movies = () => {
    //states
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const key = config.THEKEY;

    //Consume the API
    const searchMovie = async (e) => {
        e.preventDefault();

        const options = {
            method: 'GET',
            url: 'https://moviesdb5.p.rapidapi.com/om',
            params: {s: `${query}`},
            headers: {
              'X-RapidAPI-Key': `${key}`,
              'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
            }
          };


        axios.request(options).then(function (response) {
            const data = response.data.Search
            console.log(data);
            setMovies(data)

        }).catch(function (error) {
            console.error(error);
        });
        
    }
    console.log("movies ", movies);


    return (
        <div className="searching">
            {/*Header component*/}
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
        </div>
    )
}

export default Movies;