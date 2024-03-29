import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import {create_Jordan_Data , create_Jordan_Images_folder, getJordan_Data, getJordan_Images} from "./../JordanRedux/JordanServices";
import { meTailwindStyles } from '../../../Assests/styleTailwind';
import { successTostify } from '../../../Assests/tostifyOptions';

export default function CreateModal({onClose}) {
    const dispatch = useDispatch();

    const [productName, setProductName] = useState("");
    const [productprice, setProductprice] = useState(0);
    const [productImages, setProductImages] = useState([]);

// add data and Images to Firebase
    const sendDataToFirebase = ()=>{
        dispatch(create_Jordan_Data({productName ,productprice}));
        dispatch(create_Jordan_Images_folder({productImages,productName}))
        .then(()=>onClose())
        .then(()=>successTostify())
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

            <div className='md:w-[350px] w-[100%] px-5 py-14 h-fit border shadow bg-white rounded-lg'
                 onClick={(e)=>e.stopPropagation()}
            >
{/* ---------------------------------------------------------------------------------------------------------------*/}
                  <div className="mb-5">
                      <label className="block text-md text-gray-700  dark:text-white"> 
                          Product Name
                      </label>
                      <input  className={`${meTailwindStyles.modalInput}`}  id="productname" type="text" 
                              onChange={(e)=>setProductName(e.target.value)}
                      />
                  </div>
{/* ---------------------------------------------------------------------------------------------------------------*/}
                  <div className="mb-5">
                      <label className="block text-md text-gray-700  dark:text-white">       
                          Product Price
                      </label>
                      <input
                            className={`${meTailwindStyles.modalInput}`} id="productprice" type="number" 
                            onChange={(e)=>setProductprice(e.target.value)}
                      />
                  </div>
{/* ---------------------------------------------------------------------------------------------------------------*/}
                  <div className="mb-5">
                      <label className="block text-md text-gray-700  dark:text-white">
                        Product Images
                      </label>
                      <input 
                            className={`${meTailwindStyles.modalInput}`} id="productimages" type="file"  multiple={true}
                            onChange={(e)=>setProductImages(e.target.files)}
                        />
                  </div>
{/* ---------------------------------------------------------------------------------------------------------------*/}
                  <div className='flex justify-start items-center gap-2'>
                      <button className={`${meTailwindStyles.saveButton}`}
                            onClick={()=>sendDataToFirebase()}
                      >
                          Save
                      </button>

                      <button className={`${meTailwindStyles.closeButton}`}
                              onClick={onClose}
                      >
                          Close
                      </button>
                  </div>
            </div>
      </div>
  </>
};
