import React from 'react';
import { IoTrashBinOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { meTailwindStyles } from '../../Assests/styleTailwind';


export default function SneakersDataTable({data}) {
  
  return <>
        <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">

                <thead className="bg-gray-200 h-[50px]">
                    <tr>
                        <th scope="col" className={`${meTailwindStyles.tableHeaderText}`} > Product Image </th>
                        <th scope="col" className={`${meTailwindStyles.tableHeaderText}`} > Product Name </th>
                        <th scope="col" className={`${meTailwindStyles.tableHeaderText}`} > Product Price </th>
                        <th scope="col" className={`${meTailwindStyles.tableHeaderText}`} > Product Actions</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {
                      data?.map((item , index)=>(
                        <tr className=''>
                            <Link to={`/sneakers-details/${item?.id}`} key={index} className='flex justify-center'>
                              <td className={`${meTailwindStyles.tableTD} w-[100px] h-[70px] flex justify-center items-center`}> 
                                  <img src={item?.imageUrls[0]} className="rounded-lg border max-w-[100%]" alt="" />
                              </td>
                            </Link>
                            <td className={`${meTailwindStyles.tableTD}`} > {item.productName} </td>
                            <td className={`${meTailwindStyles.tableTD}`} > {item.price} $</td>
                            <td className={`${meTailwindStyles.tableTD}`} > 
                              <div className='flex justify-center items-center'> <IoTrashBinOutline size={30}/> </div>  
                            </td>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  </>
};
