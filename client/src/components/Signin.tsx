import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

interface UserSignIn {
  username: string;
  password: string;
}

interface BrandSignin {
  brandname: string;
  brandpassword: string;
}

function Signin() {
  const [type, setType] = useState({ user: false, brand: false });
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [brandname, setBrandName] = useState<string>('');
  const [brandpassword, setBrandPassword] = useState<string>('');

  const handleUser = (): void => {
    setType({ user: true, brand: false });
  };

  const handleBrand = (): void => {
    setType({ user: false, brand: true });
  };

  const handleSubmitUser = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();
      const newUser: UserSignIn = {
        username,
        password,
      };
      const url = 'http://localhost:3000/api/user/signin';
      await axios.post(url, newUser);
      toast('User login successful');
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(`Error occurred: ${error}`);
      toast('User login failed');
      setUsername('');
      setPassword('');
    }
  };

  const handleSubmitBrand = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();
      const newBrand: BrandSignin = {
        brandname,
        brandpassword,
      };
      const url = 'http://localhost:3000/api/brand/signin';
      await axios.post(url, newBrand);
      toast('Brand login successful');
      setBrandName('');
      setBrandPassword('');
    } catch (error) {
      console.log(`Error occurred: ${error}`);
      toast('Brand login failed');
      setBrandName('');
      setBrandPassword('');
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <div className="flex justify-between mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              type.brand ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={handleBrand}
          >
            Brand
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              type.user ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={handleUser}
          >
            User
          </button>
        </div>

        {type.user && (
          <form onSubmit={handleSubmitUser}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>
        )}

        {type.brand && (
          <form onSubmit={handleSubmitBrand}>
            <div className="mb-4">
              <label htmlFor="brandname" className="block text-sm font-medium mb-2">
                Brand Name
              </label>
              <input
                type="text"
                id="brandname"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
                value={brandname}
                onChange={(e) => setBrandName(e.target.value)}
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
                value={brandpassword}
                onChange={(e) => setBrandPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>
        )}

        <div className="text-center mt-4">
          <Link to="/register" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </div>
        <ToastContainer/>
      </div>
    </section>
  );
}

export default Signin;