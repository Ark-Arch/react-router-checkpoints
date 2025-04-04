import React from 'react'

const Filter = ({handleMovieTitleFilter, handleMovieRatingFilter}) => {
    
    const handleTitleChange = (e) => {
        let title = e.target.value.toLowerCase()
        handleMovieTitleFilter(title)
    }
    const handleRatingChange = (e) => {
        let rating = e.target.value
        handleMovieRatingFilter(rating)
    }

    return (
        <div className='container my-4 '>
            <div className='row g-2 justify-content-center'>
                <div className='col-md-5'>
                    <input type="text" className='form-control' placeholder='Search by title...' id='titleSearch' onChange={handleTitleChange}/>
                </div>
                
                <div className='col-md-3'>
                    <select name="" id="ratingFilter" className='form-select' onChange={handleRatingChange}>
                        <option value="">Filter by rating</option>
                        <option value="9">9 & above</option>
                        <option value="8">8 & above</option>
                        <option value="7">7 & above</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter