import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/Saludo'
import Contador from './components/Contador'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola, soy Jesús y estoy aprendiendo Reactt</h1>
      <div>
        <h1>Mi primer proyecto con React y TypeScript</h1>
        <Saludo nombre='Jesus'/>
        <Contador />
        <Formulario />
      </div>
      
    </>
  )
}

export default App
