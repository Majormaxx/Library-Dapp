import { useState } from 'react';
import { FaWallet } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between w-full">
      <div className="text-2xl font-bold text-gray-800">Major's Collection</div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Navigation links */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 items-center md:items-center w-full md:w-auto mt-4 md:mt-0`}
      >
        <a
          href="#donate"
          className="text-gray-800 hover:text-blue-600 font-medium"
        >
          Donate a Book
        </a>
        <a
          href="#lend"
          className="text-gray-800 hover:text-blue-600 font-medium"
        >
          Lend a Book
        </a>
        <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
          <FaWallet className="text-lg" />
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
