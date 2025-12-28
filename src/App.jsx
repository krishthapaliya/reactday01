import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Featured from "./component/Featured"

function App(){
  return(
    <div className="mx-20">
      <Navbar/>
      <Hero/>
      <Featured/>
    </div>
  )
}

export default App