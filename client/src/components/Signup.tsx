import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaUser, FaBuilding } from "react-icons/fa"; // Icons added
import useAuth from "../hooks/useAuth";
function Signup() {
  const auth = useAuth();

  return (
    <main className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-gray-800">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-600">Signup</h2>

        
        <div className="flex justify-between mb-6">
          <button
            type="button"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              auth?.type.brand ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={auth?.handleBrand}
          >
            <FaBuilding /> Brand
          </button>

          <button
            type="button"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              auth?.type.user ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={auth?.handleUser}
          >
            <FaUser /> User
          </button>
        </div>

      
        {auth?.type.user && (
          <form onSubmit={auth.handleUserSignUp} className="space-y-4">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                id="fullname"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                required
                value={auth.fullname}
                onChange={(e) => auth.setFullname(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                id="address"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                required
                value={auth.address}
                onChange={(e) => auth.setAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
              <input
                type="number"
                id="age"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                required
                value={auth.age}
                onChange={(e) => auth.setAge(Number(e.target.value))}
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                required
                value={auth.username}
                onChange={(e) => auth.setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                required
                value={auth.password}
                onChange={(e) => auth.setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              User Signup
            </button>
          </form>
        )}

    
        {auth?.type.brand && (
          <form onSubmit={auth.handleBrandSignUp} className="space-y-4">
            <div>
              <label htmlFor="brandname" className="block text-sm font-medium mb-1">Brand Name</label>
              <input
                type="text"
                id="brandname"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                required
                value={auth.brandname}
                onChange={(e) => auth.setBrandName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="brandpassword" className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="brandpassword"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                required
                value={auth.brandpassword}
                onChange={(e) => auth.setBrandPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Brand Signup
            </button>
          </form>
        )}

        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Already have an account? Sign In
          </Link>
        </div>

        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </div>
    </main>
  );
}

export default Signup;
