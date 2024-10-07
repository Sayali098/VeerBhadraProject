import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import ServiceDropDown from "./ServiceDropDown";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown when a service is clicked
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="w-full px-8 ">
      <div className="flex  justify-evenly items-center py-6 font-serif text-slate-800 text-lg">
        <div>
          <p>Veerbhadra</p>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-row items-center gap-1 hover:text-orange-400 transition-all duration-150">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span className="text-orange-500 font-bold">
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
          <div className="flex flex-row items-center gap-1 hover:text-orange-400 transition-all duration-150">
            <span>
              <Link to="/about">About Us</Link>
            </span>
            <span className="text-orange-500 font-bold">
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>

         
            <div className="flex relative group flex-row items-center  cursor-pointer hover:text-orange-400 transition-all duration-150">
              <span>Services</span>
              <MdOutlineKeyboardArrowDown className="ml-1 text-orange-500 font-bold" />
           

            {/* Dropdown menu */}
            <div className="absolute top-5  bottom-0     w-64  hidden group-hover:block  ">
              <ServiceDropDown />
            </div>
            </div>
          

          {/* Clickable Services Button */}
          {/* <div className="relative">
            <button
              onClick={toggleDropdown} // Toggle the dropdown on click
              className="text-black text-lg  hover:text-orange-400 transition-all duration-150 focus:outline-none flex items-center"
            >
              Services
              <MdOutlineKeyboardArrowDown className='ml-1 text-orange-500 font-bold' />
            </button>

            
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white  hover:border-t-2 border-blue-600 w-64 shadow-lg rounded-md">
                <ServiceDropDown closeDropdown={closeDropdown} />
              </div>
            )}
          </div> */}

          <div className="flex flex-row items-center gap-1 hover:text-orange-400 transition-all duration-150">
            <span>
              <Link to="/projects">Projects</Link>
            </span>
            <span className="text-orange-500 font-bold">
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
          <div className="flex flex-row  items-center gap-1 hover:text-orange-400 transition-all duration-150">
            <span>
              <Link to="/contact">Contact</Link>
            </span>
            <span className="text-orange-500 font-bold">
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
        <div >
          <button className="border border-black py-1 px-3 rounded-md hover:bg-blue-500 hover:border-none hover:text-white" > <Link to='/getquote'>Get Quote</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
