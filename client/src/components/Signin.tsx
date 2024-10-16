import useAuth from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { FaUser, FaBuilding } from "react-icons/fa"; // Icons added

function Signin() {
  const auth = useAuth();

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-600">Sign In</h2>

        
        <div className="flex justify-between mb-6">
          <button
            type="button"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              auth?.type.brand
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={auth?.handleBrand}
          >
            <FaBuilding /> Brand
          </button>

          <button
            type="button"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              auth?.type.user
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={auth?.handleUser}
          >
            <FaUser /> User
          </button>
        </div>

        
        {auth?.type.user && (
          <form onSubmit={auth?.handleUserLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={auth.username}
                onChange={(e) => auth?.setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={auth.password}
                onChange={(e) => auth?.setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Sign In
            </button>
          </form>
        )}

        
        {auth?.type.brand && (
          <form onSubmit={auth.handleBrandLogin} className="space-y-4">
            <div>
              <label htmlFor="brandname" className="block text-sm font-medium mb-1">
                Brand Name
              </label>
              <input
                type="text"
                id="brandname"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={auth.brandname}
                onChange={(e) => auth.setBrandName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="brandpassword" className="block text-sm font-medium mb-1">
                Brand Password
              </label>
              <input
                type="password"
                id="brandpassword"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={auth.brandpassword}
                onChange={(e) => auth.setBrandPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Sign In
            </button>
          </form>
        )}

        <div className="text-center mt-4">
          <Link to="/register" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </div>

        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </div>
    </section>
  );
}

export default Signin;
