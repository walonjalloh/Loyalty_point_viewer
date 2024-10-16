import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, LogOut, User, Gift, PlusCircle, LogIn, UserPlus } from "lucide-react";
import AuthContext from "../contexts/authContext";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const auth = useContext(AuthContext);

  const isAuthenticated = auth?.isAuthenticated;
  const type = auth?.type;

  const toggleMenu = () => setIsOpened(!isOpened);

  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <Gift className="w-6 h-6 mr-2" />
            LOYALTY POINT VIEWER
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {!isAuthenticated ? (
            <div className="flex space-x-4">
              <Link to="/login" className="flex items-center text-blue-500 hover:underline">
                <LogIn className="w-5 h-5 mr-1" /> Sign In
              </Link>
              <Link to="/register" className="flex items-center text-blue-500 hover:underline">
                <UserPlus className="w-5 h-5 mr-1" /> Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex space-x-4">
              {type?.user && (
                <>
                  <Link to="/user_profile" className="flex items-center text-blue-500 hover:underline">
                    <User className="w-5 h-5 mr-1" /> Profile
                  </Link>
                  <Link to="/" className="flex items-center text-blue-500 hover:underline">
                    <LogOut className="w-5 h-5 mr-1" /> Logout
                  </Link>
                </>
              )}
              {type?.brand && (
                <>
                  <Link to="/create_reward" className="flex items-center text-blue-500 hover:underline">
                    <PlusCircle className="w-5 h-5 mr-1" /> Create Reward
                  </Link>
                  <Link to="/brand_profile" className="flex items-center text-blue-500 hover:underline">
                    <User className="w-5 h-5 mr-1" /> Profile
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600 cursor-pointer" onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpened && (
        <div className="bg-white shadow-md border-t py-4 md:hidden">
          <div className="flex flex-col items-center space-y-3">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="flex items-center text-blue-500 hover:underline">
                  <LogIn className="w-5 h-5 mr-2" /> Sign In
                </Link>
                <Link to="/register" className="flex items-center text-blue-500 hover:underline">
                  <UserPlus className="w-5 h-5 mr-2" /> Sign Up
                </Link>
              </>
            ) : (
              <>
                {type?.user && (
                  <>
                    <Link to="/user_profile" className="flex items-center text-blue-500 hover:underline">
                      <User className="w-5 h-5 mr-2" /> Profile
                    </Link>
                    <Link to="/" className="flex items-center text-blue-500 hover:underline">
                      <LogOut className="w-5 h-5 mr-2" /> Logout
                    </Link>
                  </>
                )}
                {type?.brand && (
                  <>
                    <Link to="/create_reward" className="flex items-center text-blue-500 hover:underline">
                      <PlusCircle className="w-5 h-5 mr-2" /> Create Reward
                    </Link>
                    <Link to="/brand_profile" className="flex items-center text-blue-500 hover:underline">
                      <User className="w-5 h-5 mr-2" /> Profile
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
