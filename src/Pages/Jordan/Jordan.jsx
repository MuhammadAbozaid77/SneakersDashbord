import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateModal from './Modal/CreateModal';
import { useEffect } from 'react';
import { getJordan_Data, getJordan_Images, get_final_Jordan_Data } from './JordanRedux/JordanServices';
import { meTailwindStyles } from '../../Assests/styleTailwind';
import JordanDataTable from './JordanDataTable';
import NoData from '../../Components/NoData';

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
}, [dispatch ,items?.JordanData , items?.JordanFolderImages]);

 
  return <>

    <div className="px-3 border-b flex justify-between items-center h-[80px] w-[100%]">
      
        <span className="md:text-[25px] text-[16px] text-slate-700 font-bold">
            Jordan
        </span>
        
        <button className={`${meTailwindStyles.createModalButton}`}   onClick={()=>setShowCreateModal(true)}  >
            Add New Group
        </button>
    </div>
    <div className="p-2"> 
        {
            items?.FinalJordanData?.length > 0 ? 
                <JordanDataTable  data={items?.FinalJordanData} />
            : 
            <NoData />
        }
    </div>

    { showCreateModal && (
        <CreateModal 
            onClose={()=>setShowCreateModal(false)}
        />
    ) }
  
  
  </>
};
