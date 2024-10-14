import { Link } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";


function Signup() {

  const auth = useContext(AuthContext)
 
  return (
    <main className="flex flex-col items-center min-h-screen justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <div className="flex justify-between mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              auth?.type.brand ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={auth?.handleBrand}
          >
            Brand
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              auth?.type.user ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={auth?.handleUser}
          >
            User
          </button>
        </div>

        {auth?.type.user && (
          <form onSubmit={auth.handleUserSignUp}>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium mb-2">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
                value={auth.fullname}
                onChange={(e) => auth.setFullname(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
                value={auth.username}
                onChange={(e) => auth.setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
                value={auth.password}
                onChange={(e) => auth.setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                User Sign up
              </button>
            </div>
          </form>
        )}

        {auth?.type.brand && (
          <form onSubmit={auth.handleBrandSignUp}>
            <div className="mb-4">
              <label htmlFor="brandname" className="block text-sm font-medium mb-2">
                Brand Name
              </label>
              <input
                type="text"
                id="brandname"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
                value={auth.brandname}
                onChange={(e) => auth.setBrandName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
                value={auth.brandpassword}
                onChange={(e) => auth.setBrandPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Brand Sign up
              </button>
            </div>
          </form>
        )}

        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Already have an account? Sign in
          </Link>
        </div>
        <ToastContainer
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
        />
      </div>
    </main>
  );
}

export default Signup;