import { newUser } from "../utils/user.tsx";
import { User } from "../utils/user.tsx";
import { useState } from "react";

function UserDashboard() {
  const [user, setUser] = useState<User[]>(newUser); // Assuming newUser returns a single user

  return (
    <section className=" p-6 w-full max-w-4xl mx-auto rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          User Profile
        </h1>
      </div>
      <main className="w-full flex flex-col gap-8 items-center justify-center">
        {user.map((user, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            {/* Personal Information Section */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                Personal Information
              </h2>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Name:</span> {user.name}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Username:</span> {user.username}
              </p>
            </div>

            {/* Reward Points Section */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                Reward Points
              </h2>
              <p className="text-3xl font-extrabold text-blue-600">
                {user.rewardpoints}
              </p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default UserDashboard;
