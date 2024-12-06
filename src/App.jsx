import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <>
      <h1>Hot Hot coffee: {coffees.length}</h1>
      <div className="w-10/12 mx-auto">
        <div className="gap-4 grid md:grid-cols-2">
        {
          coffees.map(coffee => <CoffeeCard 
          key={coffee._id} coffee={coffee} 
          coffees = {coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
        }
        </div>
      </div>
    </>
  )
}

export default App
