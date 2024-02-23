import React from 'react';
import { IoFileTrayOutline } from "react-icons/io5";


export default function NoData() {
  return <>
  
        <div className='w-[100%] flex justify-center items-center py-10 flex-col'>
                <IoFileTrayOutline size={100} className='text-gray-400 '/>
                <h1 className='text-gray-600 text-[30px]'>  No Data To Preview </h1>
        </div>
  
  </>
}
