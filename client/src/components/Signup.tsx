import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

interface BrandSignup {
  brandname: string;
  brandpassword: string;
}

interface UserSignup {
  fullname: string;
  username: string;
  password: string;
}

function Signup() {
  const [type, setType] = useState({
    user: false,
    brand: false,
  });
  const [fullname, setFullname] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [brandname, setBrandName] = useState<string>('');
  const [brandpassword, setBrandPassword] = useState<string>('');

  const handleUser = (): void => {
    setType({
      user: true,
      brand: false,
    });
  };

  const handleBrand = (): void => {
    setType({
      user: false,
      brand: true,
    });
  };

  const handleSubmitBrand = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/brand/signup';
    try {
      const data: BrandSignup = {
        brandname,
        brandpassword,
      };

      await axios.post(url, data);
      console.log('Brand signup successful');
      setBrandPassword('');
      setBrandName('');
      toast('Brand SignUp Sucessfull')
    } catch (error) {
      console.error('Error signing up brand:', error);
      setBrandName('');
      setBrandPassword('');
      toast('Brand SignUp failed')
    }
  };

  const handleSubmitUser = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/user/signup';
    try {
      const data: UserSignup = {
        fullname,
        username,
        password,
      };

      await axios.post(url, data);
      console.log('User signup successful');
      setPassword('');
      setFullname('');
      setUsername('');
      toast('User SignUp sucessfull')
    } catch (error) {
      console.error('Error signing up user:', error);
      setFullname('');
      setPassword('');
      setUsername('');
      toast('User Signup failed')
    }
  };

  return (
    <main className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <div className="flex justify-between mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              type.brand ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={handleBrand}
          >
            Brand
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              type.user ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={handleUser}
          >
            User
          </button>
        </div>

        {type.user && (
          <form onSubmit={handleSubmitUser}>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium mb-2">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
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
                User Sign up
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
        <ToastContainer/>
      </div>
    </main>
  );
}

export default Signup;