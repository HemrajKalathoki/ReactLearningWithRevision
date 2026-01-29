import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between max-w-full bg-indigo-400 px-8 py-2">
        <img
          className="h-12 w-12 rounded-full object-fit-contain"
          src="https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA="
          alt="Logo"
        />
        <ul className="flex items-center gap-8 text-white font-medium">
        {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
          <li
            key={item}
            className="relative cursor-pointer group transition-all duration-300"
          >
            {/* Text */}
            <span className="group-hover:text-indigo-100 transition-colors duration-300">
              {item}
            </span>

            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
      </nav>
    </>
  );
}

export default Navbar;
