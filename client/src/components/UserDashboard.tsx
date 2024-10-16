import { useContext } from "react";
import AuthContext from "../contexts/authContext";

function UserDashboard() {
  const auth = useContext(AuthContext);
  const user = auth?.userAuth;

  return (
    <section className="p-8 w-full max-w-5xl mx-auto min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">
          User Profile
        </h1>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <main className="w-full flex flex-col gap-8">
        {user && user.length > 0 ? (
          user.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center md:items-start transition hover:shadow-2xl"
            >
              {/* Personal Information */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
                  Personal Information
                </h2>
                <p className="text-lg text-gray-800">
                  <span className="font-medium text-gray-600">Name:</span> {user.fullname}
                </p>
                <p className="text-lg text-gray-800">
                  <span className="font-medium text-gray-600">Username:</span> {user.username}
                </p>
                <p className="text-lg text-gray-800">
                  <span className="font-medium text-gray-600">Age:</span> {user.age}
                </p>
                <p className="text-lg text-gray-800">
                  <span className="font-medium text-gray-600">Address:</span> {user.address}
                </p>
              </div>

              {/* Reward Points */}
              <div className="w-full md:w-1/2 flex flex-col gap-4 items-center justify-center">
                <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
                  Reward Points
                </h2>
                <p className="text-4xl font-extrabold text-blue-600">
                  {user.points}
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                  Redeem Points
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl font-semibold text-red-500 text-center mt-16">
            Please log in to view your profile.
          </p>
        )}
      </main>
    </section>
  );
}

export default UserDashboard;
