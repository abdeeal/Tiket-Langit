import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home />} />
      
    </Routes>
  )
}

export default App
