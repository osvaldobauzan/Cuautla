import './App.css'
import Home from './pages/Home/Home'
import templo from './assets/templo.jpg'
import { Route, Routes } from 'react-router-dom'
import Tecnologia from './pages/Tecnologia'
import Seguridad from './pages/Seguridad'
import Estacionamiento from './pages/Estacionamiento'
import Recorridos from './pages/Recorridos'
import Traduccion from './pages/Traduccion'
import Facilidades from './pages/Facilidades'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home img={templo} words='Hola Cuautla' wordSpan='Cuautla' className='mb-8 text-5xl font-extrabold leading-none tracking-normal text-gray-900 md:tracking-tight' />} />

        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/seguridad" element={<Seguridad />} />
        <Route path="/estacionamiento" element={<Estacionamiento />} />
        <Route path="/recorridos" element={<Recorridos />} />
        <Route path="/traduccion" element={<Traduccion />} /> 
        <Route path="/facilidades" element={<Facilidades />} />

    </Routes>
  )
}

export default App
