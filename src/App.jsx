import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Application from './Application'
import TrailerPage from './components/TrailerPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Application/>}/>
        <Route path='/trailer_page/:movieID' element={<TrailerPage/>}/>
      </Routes>
    </>
  )
}

export default App