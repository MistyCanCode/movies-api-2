import React from 'react';

const Card = ({ movies }) => {

    // const list = movies.map(movie => ({
    //     title: movie.Title,
    //     poster: movie.Poster,
    //     year: movie.Year,
    //     time: movie.Runtime,
    //     rating: movie.Rated,
    //     actors: movie.Actors,
    //     plot: movie.Plot
    // }))
    
    return (
        
        <div className="cardlist__movies">
            {Object.values(movies).filter(movie => movie.Poster).map((movie, index) => (
                <div className="card" key={index}>
                    <img className="movie__image"
                        src={movie.Poster}
                        alt="poster"
                    />
                    <div className="flex__card">
                        <p className="heading">{movie.Title}</p>
                        <p className='paragraph'>{movie.Year}</p>
                        {/* <p className="paragraph">{movie.Year}, {movie.Runtime}, {movie.Rated}</p>
                        <p className="paragraph">{movie.Actors}</p>
                        <p className="paragraph">{movie.Plot}</p> */}
                        <br />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;