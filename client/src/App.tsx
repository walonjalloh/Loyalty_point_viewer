import CreateReward from "./components/CreateReward"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Signin from "./components/Signin"

function App(){
  return(
    <div className="w-full h-full">
      <Navbar/>
      {/* <Signin/> */}
      {/* <CreateReward/> */}
      <Hero/>
    </div>
  )
}
export default App