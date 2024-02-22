
import React from 'react';
import logo from "./../Assests/logo.jpg";
import { Link } from 'react-router-dom';
import { SiJordan } from "react-icons/si";
import { PiSneakerThin } from "react-icons/pi";
import { FaRunning } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";



export default function SideBar() {

  const sideBarNavigations = [
    {name : "Jordan" , url : "/jordan" , icon : <SiJordan />},
    {name : "Sneakers" , url : "/sneakers"  , icon : <PiSneakerThin />},
    {name : "Running Shoes" , url : "running-shoes"  , icon : <FaRunning />},
    {name : "Football Shoes" , url : "football-shoes"  , icon : <IoFootball />},
  ]

  return <>
      <div className="flex justify-center py-5 items-center border-b h-[80px]">
          <img src={logo} alt="logo" className="md:w-[90px] sm:w-[60px] w-[40px]" />  
      </div>    
        
      <ul>
          {sideBarNavigations.map((item , index)=>(
            <li key={index} className="border-b md:py-2 cursor-pointer">
                  <Link to={item.url}> 
                      <span className="lg:text-[20px] md:text-[16px] px-2 text-slate-700 md:block hidden"> 
                        {item.name}  
                      </span>
                      <span className='md:hidden py-3 flex justify-center items-center text-[25px] hover:bg-slate-900 hover:text-white'>
                          {item.icon} 
                      </span>
                  </Link>
            </li>
          ))}
      </ul>
  </>
}
