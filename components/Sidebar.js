// components/Sidebar.js
import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Close button */}
      <button
        className="absolute top-2 right-2 text-white hover:text-gray-300"
        onClick={onClose}
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
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ul className="mt-16">
        <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Home</a></li>
        <li className="py-2 px-4 hover:bg-gray-700"><a href="#">About</a></li>
        <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Services</a></li>
        <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
