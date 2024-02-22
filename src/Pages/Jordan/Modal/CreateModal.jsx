import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import {create_Jordan_Data , create_Jordan_Images_folder, getJordan_Data, getJordan_Images} from "./../JordanRedux/JordanServices";

export default function CreateModal({onClose}) {
    const dispatch = useDispatch();

    const [productName, setProductName] = useState("");
    const [productprice, setProductprice] = useState(0);
    const [productImages, setProductImages] = useState([]);

// add data and Images to Firebase
    const sendDataToFirebase = ()=>{
        dispatch(create_Jordan_Data({productName ,productprice}));
        dispatch(create_Jordan_Images_folder({productImages,productName})).then(()=>onClose());
        
        // 2000 milliseconds = 2 seconds
        setTimeout(() => {
            dispatch(getJordan_Data());
            dispatch(getJordan_Images());
        }, 2000); 
    }

  return <>
      <div className='absolute inset-0 bg-slate-800/70 h-[100vh] flex justify-center items-center'
        onClick={()=>onClose()}
      >

            <div className='md:w-[450px] w-[100%] px-5 py-10 h-fit border shadow bg-white rounded-lg'
                 onClick={(e)=>e.stopPropagation()}
            >
{/* ---------------------------------------------------------------------------------------------------------------*/}
                  <div className="mb-5">
                      <label className="block text-gray-500 text-[16px] font-bold" htmlFor="productname">
                          Product Name
                      </label>
                      <input className="shadow appearance-none border rounded w-full p-3 text-gray-700 
                                        leading-tight focus:outline-none focus:shadow-outline" 
                            id="productname" type="text" placeholder="Product Name"
                            onChange={(e)=>setProductName(e.target.value)}
                      />
                  </div>
{/* ---------------------------------------------------------------------------------------------------------------*/}
                  <div className="mb-5">
                      <label className="block text-gray-500 text-[16px] font-bold" htmlFor="productprice">
                          Product Price
                      </label>
                      <input className="shadow appearance-none border rounded w-full p-3 text-gray-700 
                                        leading-tight focus:outline-none focus:shadow-outline" 
                            id="productprice" type="number" placeholder="Product Price"
                            onChange={(e)=>setProductprice(e.target.value)}
                      />
                  </div>
{/* ---------------------------------------------------------------------------------------------------------------*/}
                  <div className="mb-5">
                      <label className="block text-gray-500 text-[16px] font-bold" htmlFor="productprice">
                        Product Images
                      </label>
                      <input className="shadow appearance-none border rounded w-full p-3 text-gray-700 
                                        leading-tight focus:outline-none focus:shadow-outline" 
                            id="productimages" type="file" placeholder="Product Images" multiple={true}
                            onChange={(e)=>setProductImages(e.target.files)}
                            />
                  </div>
{/* ---------------------------------------------------------------------------------------------------------------*/}
                  <div className='flex justify-start items-center gap-2'>
                      <button className="py-2 px-5 text-[20px] rounded-md shadow appearance-none leading-tight 
                                         bg-blue-700 hover:bg-blue-900 duration-300 text-white"
                            onClick={()=>sendDataToFirebase()}
                      >
                          Save
                      </button>

                      <button className="py-2 px-5 text-[20px] rounded-md shadow appearance-none leading-tight 
                                         bg-red-700 hover:bg-red-900 duration-300 text-white"
                            onClick={onClose}
                      >
                          Close
                      </button>
                  </div>
            </div>
      </div>
  </>
};
