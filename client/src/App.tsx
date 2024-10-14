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

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Signin />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Signup />} />
      </Routes>
      <Routes>
        {" "}
        <Route path="/user_profile" element={<UserDashboard />} />
      </Routes>
      <Routes>
        {" "}
        <Route path="/create_reward" element={<CreateReward />} />
      </Routes>
      <Routes>
        {" "}
        <Route path="/reward" element={<ViewReward />} />
      </Routes>
      <Routes>
        {" "}
        <Route path="/brand_profile" element={<BrandDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
