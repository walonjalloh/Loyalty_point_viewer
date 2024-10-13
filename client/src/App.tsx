import BrandDashboard from "./components/BrandDashboard"
import CreateReward from "./components/CreateReward"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Signin from "./components/Signin"
import UserDashboard from "./components/UserDashboard"
import ViewReward from "./components/ViewReward"

function App(){
  return(
    <div className="w-full h-full">
      <Navbar/>
      {/* <Signin/> */}
      {/* <CreateReward/> */}
      <Hero/>
      <ViewReward/>
      <Footer/>
      <UserDashboard/>
      <BrandDashboard/>
    </div>
  )
}
export default App