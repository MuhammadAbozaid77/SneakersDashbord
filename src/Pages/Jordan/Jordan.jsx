import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateModal from './Modal/CreateModal';
import JordanFolders from './Modal/JordanFolders';
import { useEffect } from 'react';
import { getJordan_Data, getJordan_Images, get_final_Jordan_Data } from './JordanRedux/JordanServices';

export default function Jordan() {
  const dispatch = useDispatch();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const items = useSelector(state => state.Jordan_In_Redux);

useEffect(() => {
    dispatch(getJordan_Data());
}, [dispatch]);

useEffect(() => {
    dispatch(getJordan_Images());
}, [dispatch]);

useEffect(() => {
    dispatch(get_final_Jordan_Data());
}, [dispatch ,items.JordanData , items.JordanFolderImages]);

 
  return <>

    <div className="px-3 border-b flex justify-between items-center h-[80px] w-[100%]">
      
        <span className="md:text-[25px] text-[16px] text-slate-700 font-bold">
            Jordan
        </span>

        <button className="py-2 px-3 border rounded-md bg-slate-900 hover:bg-slate-700 duration-300 text-white
                           lg:text-[20px] sm:text-[16px] text-[12px]"
            onClick={()=>setShowCreateModal(true)}
        >
            Add New Group
        </button>
    </div>

    <div className="p-2">
        <JordanFolders  data={items.FinalJordanData} />
    </div>
    

    { showCreateModal && (
        <CreateModal 
            onClose={()=>setShowCreateModal(false)}
        />
    ) }
  
  
  </>
};
