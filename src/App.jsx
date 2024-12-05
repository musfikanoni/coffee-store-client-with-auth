import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./CoffeeCard";

function App() {
  
  const coffees = useLoaderData();

  return (
    <>
      <h1>Hot Hot coffee: {coffees.length}</h1>
      <div className="w-10/12 mx-auto">
        <div className="gap-4 grid md:grid-cols-2">
        {
          coffees.map(coffee => <CoffeeCard 
          key={coffee._id} coffee={coffee}
          ></CoffeeCard>)
        }
        </div>
      </div>
    </>
  )
}

export default App
