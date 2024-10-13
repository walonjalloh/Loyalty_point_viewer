import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative  h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Loyalty Points Viewer
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Track your rewards and loyalty points with ease. Register your brand or explore your reward history with just a few clicks.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200">
              View Reward
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-indigo-500 px-6 py-3 rounded-full font-medium hover:bg-indigo-400">
              Create Reward
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
