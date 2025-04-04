import React from 'react'
import MovieCard from './MovieCard.jsx'


const MovieList = ({movies}) => {
    console.log(movies)
    return (
        <div className='container mt-4'>
            <div className='row justify-content-center'>
                {
                    movies.map((movie, index) => {
                        return (
                            <div className='col-md-2 col-lg-auto mb-4' key={index}>
                                <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating} wiki={movie.wiki}
                                        trailerID={movie.trailerID}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieList

