import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='max-w-11/12 mx-auto'>
      <Navbar></Navbar>
      <h1>Vite + React</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App
