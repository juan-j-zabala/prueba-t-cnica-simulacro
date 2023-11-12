import { useState } from 'react'
import libros from '../data/libros'
import reactLogo from './assets/react.svg'
import Lbdisponibles from './libros-disponibles/Lbdisponibles'
import LitLectura from './lista-lecturas/LitLectura'
import viteLogo from '/vite.svg'

function App() {
  const [showlistbooks, setShowlistbooks] = useState(null)

  return (
    <div className='bg-slate-800 h-screen p-0 text-2xl md:flex flex-col md:flex-row items-center gap-2   '>
      <Lbdisponibles showlistbooks={showlistbooks} setShowlistbooks={setShowlistbooks} />
      <LitLectura showlistbooks={showlistbooks} setShowlistbooks={setShowlistbooks} /> 
    </div>
  )
}

export default App
