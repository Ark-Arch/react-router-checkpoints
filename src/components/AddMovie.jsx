import React from 'react'
import {useRef} from 'react'

const AddMovie = ({handleAddNewMovie}) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const posterRef = useRef()
    const ratingRef = useRef()
    const wikiRef = useRef()

    const handleAddingNew = () => {
        let title = titleRef.current.value
        let description = descriptionRef.current.value
        let posterURL = posterRef.current.value
        let rating = ratingRef.current.value
        let wiki = wikiRef.current.value

        handleAddNewMovie({title, description, posterURL, rating, wiki})
    }

    return (
        <>
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addMovieModal">
            Add Movie
            </button>

            <div className="modal fade" id="addMovieModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabel">Add a New Movie</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control mb-2" placeholder="Movie Title" id="movieTitle" ref={titleRef}/>
                            <input type="text" className="form-control mb-2" placeholder="Description" id="movieDescription" ref={descriptionRef}/>
                            <input type="text" className="form-control mb-2" placeholder="Poster URL" id="moviePoster" ref={posterRef}/>
                            <input type="number" className="form-control mb-2" placeholder="Rating" id="movieRating" min="1" max="10" ref={ratingRef}/>
                            <input type="text" className="form-control-mb-2" placeholder="Wiki page" id="movieWiki" ref={wikiRef}/>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddingNew}>Save Movie</button>
                        </div>

                    </div>
                </div>
            </div>
        </>        
    )
}

export default AddMovie