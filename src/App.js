import React from 'react'
import { render } from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MMD from './mmd/MMD'
import Skull from './skull/Skull'
import Viking from './Viking/Viking'
import People from './people/People'

const App = (props) => {
    
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/mmd' element={<MMD />}/>
          <Route path='/skull' element={<Skull />}/>
          <Route path='/viking' element={<Viking />}/>
          <Route path='/people' element={<People />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
