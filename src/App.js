import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout';
import Jordan from './Pages/Jordan/Jordan';
import Sneakers from './Pages/Sneakers/Sneakers';
import RunningShoes from './Pages/RunningShoes/RunningShoes';
import FootballShoes from './Pages/FootballShoes/FootballShoes';
import Login from './Pages/AuthGroup/Login/Login';
import Registiration from './Pages/AuthGroup/Registiration/Registiration';
import SneakersDetails from './Pages/Sneakers/SneakersDetails';
import JordanDetails from './Pages/Jordan/JordanDetails';

export default function App({children}) {

  const Routing = createBrowserRouter([
    { path : "login" , element : <Login /> },
    { path : "registiration" , element : <Registiration /> },
    {path : "/" , element : <Layout /> ,  children : [
      { path : "/home" , element : <Home/> },
      { path : "jordan" , element : <Jordan /> },
      { path : "jordan-details/:productId" , element : <JordanDetails /> },
      { path : "sneakers-details/:productId" , element : <SneakersDetails /> },
      { path : "sneakers" , element : <Sneakers /> },
      { path : "running-shoes" , element : <RunningShoes/> },
      { path : "football-shoes" , element : <FootballShoes/> },
    ] 
  },

  ]);
  
  return <RouterProvider router={Routing} >  
      {children}
  </RouterProvider>
};