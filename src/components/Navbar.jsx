import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Gallery", "Contact"];

  return (
    <nav className="bg-indigo-400 px-6 py-3 rounded-xl">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          className="h-12 w-12 rounded-full object-fit-contain"
          src="https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA="
          alt="Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              <span className="group-hover:text-indigo-100 transition-colors">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-white font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer border-b border-indigo-300 pb-2"
              onClick={() => setOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
