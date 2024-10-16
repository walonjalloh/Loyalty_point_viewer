import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="z-10 text-center px-6 md:px-12 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in">
          Loyalty Points Viewer
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-100 animate-fade-in delay-300">
          Track your rewards and loyalty points with ease. Register your brand or explore your reward history with just a few clicks.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in delay-500">
          <Link to="/reward">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition transform hover:scale-105">
              View Reward
            </button>
          </Link>
          <Link to="/create_reward">
            <button className="bg-indigo-500 px-8 py-3 rounded-full font-semibold shadow-md text-white hover:bg-indigo-400 transition transform hover:scale-105">
              Create Reward
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
