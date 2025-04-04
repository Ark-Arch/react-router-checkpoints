import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({title, description, posterURL, rating, wiki, trailerID}) => {

    return (
            <div className="card" style={{width: "18rem"}}>
                <Link to={`/trailer_page/${trailerID}`}
                      state={{
                        movieTitle: title,
                        movieDescription: description
                      }}
                >
                    <img src={posterURL} className="card-img-top" alt="Movie Poster" />
                </Link>            
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Rating:</strong> ★ {rating}</li>
                </ul>
                <div className="card-body">
                    <a href={wiki} className="card-link">More Info</a>
                </div>
            </div>

    )
}
export default MovieCard