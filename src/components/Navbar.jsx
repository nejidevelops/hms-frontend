import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">
          <a href="#hero">HMS</a> {/* Replace with your logo */}
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-800 hover:text-blue-500">
            Features
          </a>
          <a href="#testimonials" className="text-gray-800 hover:text-blue-500">
            Testimonials
          </a>
          <a href="#how-it-works" className="text-gray-800 hover:text-blue-500">
            How It Works
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </a>
        </div>
        <div className="hidden md:flex">
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="px-6 pb-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-800 hover:text-blue-500">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-blue-500"
            >
              Testimonials
            </a>
            <a
              href="#how-it-works"
              className="text-gray-800 hover:text-blue-500"
            >
              How It Works
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
            <Link
            to="/signup"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Login
          </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
