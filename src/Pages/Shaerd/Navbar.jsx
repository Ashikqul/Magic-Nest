'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagicNest from './MagicNest/MagicNest';
import { FaBars, FaTimes, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // auto close on click (for mobile)
  };

  useEffect(() => {
    import('@fortawesome/fontawesome-free/css/all.min.css');
  }, []);

  return (
    <>
      {/* Hamburger menu button - only visible on small screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar (visible on lg+ or via toggle) */}
      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined') && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-64 min-h-screen bg-gradient-to-b from-[#0D0B1C] to-[#0D0B1C] text-white fixed top-0 left-0 z-40 p-6 shadow-2xl flex flex-col justify-between
              ${isOpen ? 'block' : 'hidden'} lg:flex`}
          >
            {/* Top Logo */}
            <MagicNest />

            {/* Menu Items */}
            <ul className="space-y-4 mt-10 text-sm tracking-widest font-semibold">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer hover:text-fuchsia-400 transition relative"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="relative">{item.name.toUpperCase()}</span>
                </motion.li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-5 text-2xl mt-10">
              {[{
                href: "https://www.facebook.com/rizvi.obroy/",
                icon: <FaFacebook />,
                hover: "hover:text-blue-600",
              }, {
                href: "https://www.instagram.com/ashiqulrizvi/",
                icon: <FaInstagram />,
                hover: "hover:text-pink-500",
              }, {
                href: "https://www.linkedin.com/in/sheikh-ashiqul-islam-rizvi/",
                icon: <FaLinkedin />,
                hover: "hover:text-[#0A66C2]",
              }, {
                href: "https://github.com/ashikqulislamrizvi",
                icon: <FaGithub />,
                hover: "hover:text-gray-400",
              }].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.hover} transition`}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
