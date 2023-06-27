import React from 'react'
import { render } from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MMD from './mmd/MMD'
import Skull from './skull/Skull'
import Viking from './Viking/Viking'
// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
const App = (props) => {
    
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/mmd' element={<MMD />}/>
          <Route path='/skull' element={<Skull />}/>
          <Route path='/viking' element={<Viking />}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;
