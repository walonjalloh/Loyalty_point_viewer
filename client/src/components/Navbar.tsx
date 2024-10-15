import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [type, setType] = useState({
    user: false,
    brand: true,
  });

  const handleIsOpended = (): void => {
    setIsOpened(!isOpened);
  };

  const handleLogout = () => {
    // Clear authentication token and update state
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setType({ user: false, brand: false });
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to='/'><h1 className="text-xl font-bold">LOYALTY POINT VIEWER</h1></Link>
        </div>
        <div className="md:flex items-center hidden">
          {!isAuthenticated && (
            <div className="flex space-x-4">
              <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
              <Link to="/register" className="text-blue-500 hover:underline">Sign Up</Link>
            </div>
          )}
          {isAuthenticated && (
            <div className="flex space-x-4">
              {type.user && (
                <div className="flex space-x-2">
                  <Link to="/userprofile" className="text-blue-500 hover:underline">Profile</Link>
                  <Link to="/" onClick={handleLogout} className="text-blue-500 hover:underline">Logout</Link>
                </div>
              )}
              {type.brand && (
                <div className="flex space-x-2">
                  <Link to="/createreward" className="text-blue-500 hover:underline">Create Reward</Link>
                  <Link to="/brandprofile" className="text-blue-500 hover:underline">Profile</Link>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="md:hidden">
          <Menu onClick={handleIsOpended} className="text-gray-500 hover:text-gray-700" />
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpened && (
        <div className="bg-white border-b shadow-sm p-4 md:hidden flex flex-col items-center justify-center">
          {!isAuthenticated && (
            <div className="space-y-2 flex flex-col items-center justify-center">
              <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
              <Link to="/register" className="text-blue-500 hover:underline">Sign Up</Link>
            </div>
          )}
          {isAuthenticated && (
            <div className="space-y-2">
              {type.user && (
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Link to="/userprofile" className="text-blue-500 hover:underline">Profile</Link>
                  <Link to="/" onClick={handleLogout} className="text-blue-500 hover:underline">Logout</Link>
                </div>
              )}
              {type.brand && (
                <div className="flex flex-col items-center justify-center gap-2">
                  <Link to="/createreward" className="text-blue-500 hover:underline">Create Reward</Link>
                  <Link to="/brandprofile" className="text-blue-500 hover:underline">Profile</Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;