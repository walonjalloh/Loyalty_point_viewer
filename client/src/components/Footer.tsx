import { FaHeart } from 'react-icons/fa';

function Footer() {
  const date: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg font-semibold">
          &copy; {date} All Rights Reserved.
        </p>

        <div className="flex items-center gap-1">
          <p>Made with</p>
          <FaHeart className="text-red-500 animate-pulse" />
          <p className='font-extrabold'>Walon-Jalloh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
