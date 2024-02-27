import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from '../component/home'
import Music from '../component/music'
import Pnf from '../component/pnf'

function Container() {
  return (
    <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/music/:id`} element={<Music/>}/>
        <Route path={`/*`} element={<Pnf/>}/>



    </Routes>
  )
}

export default Container
