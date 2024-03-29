import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './../Components/SideBar';
import { ToastContainer } from 'react-toastify';

export default function Layout() {

  return <>
          <ToastContainer />
          <div className="flex h-[100vh] w-[100%] overflow-x-hidden">
              <div className="border md:w-[300px] sm:min-w-[100px] min-w-[60px]"> 
                <SideBar />
              </div>

              <div className="border w-[100%] overflow-x-scroll">  
                <Outlet>  </Outlet>
              </div>
          </div>    
  </>
}
