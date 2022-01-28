import React from 'react';
import {FaHome, FaUserFriends } from 'react-icons/fa';
import { AiFillCar, AiOutlineLogout } from "react-icons/ai";
import {  Link, NavLink } from "react-router-dom";
export const Dashbord = () => {
  return (
        <div className="fixed flex flex-col  left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
          <span className="hidden md:block">Manager</span>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        
          <ul className="flex flex-col py-4 space-y-1">
            <li>
              <NavLink  to="/manager" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <FaHome/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/responsable" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <FaUserFriends/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Responsables</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/chauffeur" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <FaUserFriends/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">chauffeurs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/vehicule" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <AiFillCar/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Vehicule</span>
              </NavLink>
            </li>
          </ul>
          <ul className='mb-1'>
          <li>
              <Link to="/loginManager" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                </span>
                <AiOutlineLogout/>
                <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};
