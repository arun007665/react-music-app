import React from 'react'
import { BrowserRouter } from 'react-router-dom'  
import Menu from './pages/menu'
import Container from './pages/container'
import Search from './component/Search'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu/>
      <Container/>
      </BrowserRouter>
      
    </div>
  )
}

export default App