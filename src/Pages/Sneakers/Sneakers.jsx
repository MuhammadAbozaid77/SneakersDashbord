import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { meTailwindStyles } from '../../Assests/styleTailwind';
import CreateModal from './Modal/CreateModal';
import { getSneakers_Data, getSneakers_Images, get_final_Sneakers_Data } from './SneakersRedux/SneakersServices';
import SneakersDataTable from './SneakersDataTable';
import NoData from '../../Components/NoData';


export default function Sneakers() {
  const dispatch = useDispatch();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const items = useSelector(state => state.Sneakers_In_Redux);

useEffect(() => {
    dispatch(getSneakers_Data());
}, [dispatch]);

useEffect(() => {
    dispatch(getSneakers_Images());
}, [dispatch]);

useEffect(() => {
    dispatch(get_final_Sneakers_Data());
}, [dispatch ,items?.SneakersData , items?.SneakersFolderImages]);

 
  return <>

    <div className="px-3 border-b flex justify-between items-center h-[80px] w-[100%]">
      
        <span className="md:text-[25px] text-[16px] text-slate-700 font-bold">
            Sneakers
        </span>
        
        <button className={`${meTailwindStyles.createModalButton}`}   onClick={()=>setShowCreateModal(true)}  >
            Add New Group
        </button>
    </div>

    <div className="p-2">
        {
            items?.FinalSneakersData?.length > 0 ? 
                <SneakersDataTable  data={items?.FinalSneakersData} />
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

