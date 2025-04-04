// library imports
import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom"

//assets
import movieList from './assets/movieList.js'

// components
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie.jsx'
import TrailerPage from './components/TrailerPage.jsx'

function App() {
  const [movies, setMovies] = useState(movieList)

  // callback for add movie
  const handleAddNewMovie = (newMovie) => {
    movieList.push(newMovie)
    let films = movieList
    console.log(films)
    setMovies([...films])
  }

  // callbacks for filter component
  const handleMovieTitleFilter = (title) => {
    let films = movieList.filter((movie) => movie.title.toLowerCase().startsWith(title))
    setMovies(films)
  }
  const handleMovieRatingFilter = (rating) => {
    let films = movieList.filter((movie) => movie.rating*1 >= rating)
    console.log(films)
    setMovies(films)
  }

  return (
    <>
      <div className='container mt-2' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <AddMovie handleAddNewMovie={handleAddNewMovie} />
      </div>

      <Filter handleMovieTitleFilter={handleMovieTitleFilter} handleMovieRatingFilter={handleMovieRatingFilter}/>
      <MovieList movies={movies} />

      <Routes>
        <Route path='/trailer_page/:movieID' element={<TrailerPage/>}/>
      </Routes>
    </>
  )
}

export default App