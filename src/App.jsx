import { useLoaderData } from "react-router-dom"

function App() {
  
  const coffees = useLoaderData();

  return (
    <>
      <h1>Hot Hot coffee: {coffees.length}</h1>
    </>
  )
}

export default App
