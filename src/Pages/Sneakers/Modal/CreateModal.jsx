import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { meTailwindStyles } from '../../../Assests/styleTailwind';
import { getSneakers_Images  , getSneakers_Data , create_Sneakers_Images_folder ,  create_Sneakers_Data} from '../SneakersRedux/SneakersServices';
import {toast } from 'react-toastify';
import { successTostify } from '../../../Assests/tostifyOptions';


export default function CreateModal({onClose}) {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState("");
    const [productprice, setProductprice] = useState(0);
    const [productImages, setProductImages] = useState([]);

// add data and Images to Firebase
    const sendDataToFirebase = ()=>{
        dispatch(create_Sneakers_Data({productName ,productprice}));
        dispatch(create_Sneakers_Images_folder({productImages,productName}))
        .then(()=>onClose())
        .then(()=>successTostify())
        setTimeout(() => {
            dispatch(getSneakers_Data());
            dispatch(getSneakers_Images());
        }, 3000); 
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
