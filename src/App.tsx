import Home from './pages/Home'
import Alumnis from './pages/Alumnis'
import AlumniPage from './pages/AlumniPage'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='alumnis' element={<Alumnis />}  />
        <Route path='alumnis/:id' element={<AlumniPage />}  />
      </Routes>
  )
}

export default App
