import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData()

  const [coffees, setCoffees] = useState(loadedCoffees)




  return (
    <div className='max-w-11/12 mx-auto'>
      <Navbar></Navbar>

      <h1>Available coffee : {coffees.length} </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {
          coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))
        }
      </div>


      <Outlet></Outlet>
    </div>
  )
}

export default App
