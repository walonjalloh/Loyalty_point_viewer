import BrandDashboard from "./components/BrandDashboard";
import CreateReward from "./components/CreateReward";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import UserDashboard from "./components/UserDashboard";
import ViewReward from "./components/ViewReward";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";


function App() {
  return (
    <div className="w-full h-full"> 
    <Navbar/>
      <Routes>
       
        <Route path="/" element={<Layout/>}>

        <Route path='login' element={<Signin/>} />
        <Route path='register' element={<Signup/>} />
        <Route index element={<Hero/>} />        
        <Route path='reward' element={<ViewReward/>} />


        <Route  element={<RequireAuth/>}>
          <Route path='create_reward' element={<CreateReward/>} />
          <Route path='brand_profile' element={<BrandDashboard/>} />
        </Route>


        <Route path='user_profile' element={<UserDashboard/>} />

        </Route>
        
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
