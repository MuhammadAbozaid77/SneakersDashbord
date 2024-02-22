import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function JordanDetails() {
  const items = useSelector(state => state.Jordan_In_Redux);
  const params = useParams();

  const tableData = items?.FinalJordanData?.filter((item)=>{
    return item.id === params.jordan_id
  });
  
  return <>

  <div className="py-5 px-5 border-b flex justify-between items-center min-h-[100px] ">
      
      <span className="text-[30px]  text-slate-700 font-bold">
          {tableData[0]?.productName}
      </span>

  </div>

    <div className='flex lg:flex-row flex-col lg:gap-[100px] gap-[50px]  md:px-10 mt-5'>
        <div className='w-full md:w-auto lg:max-w-full max-w-[500px]  flex-[1.5] mx-auto lg:mx-0 p-10'>
            <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={60}
                showIndicators={false}
                className="productCarousel"
            >
                {
                  tableData[0].imageUrls?.map((item , index)=>(
                    <img key={index} src={item} alt={index} />  
                  ))
                }
                </Carousel>
        </div>
        <div className='flex-[1]  p-3'>
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2 leading-tight">
                  {tableData[0]?.productName}
              </div>

              {/* PRODUCT SUBTITLE */}
              <div className="text-lg font-semibold mb-5">
                  Descripition
              </div>

              {/* PRODUCT PRICE */}
              <div className="">
                  <div className="mr-2 text-[30px] font-semibold flex justify-between items-center">
                    <div> 
                        Price  :
                    </div> 
                    <div> 
                        {tableData[0]?.price}  $
                    </div> 
                  </div>
              </div>
        </div>
    </div>
  </>
};
