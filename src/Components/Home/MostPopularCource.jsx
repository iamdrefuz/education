import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { cources } from '../data_components/Cources';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../Style/_style.scss'

// import required modules
import { Pagination, Navigation } from "swiper";
import CourceCards from "./CourceCards";

export default function MostPopularCouce() {
  const [swiperRef, setSwiperRef] = useState(null);



  return (
    <>
      <Swiper 
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        
        pagination={{
          clickable: true ,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
   
       <div className="swiper container">
        {cources.map((item)=>{
            return(
                <SwiperSlide key={item.id}><CourceCards category={item.category} image={item.image} money={item.money} mentor={item.mentor} raiting={item.raiting} price={item.price} link={item.link} tajriba={item.tajriba}/></SwiperSlide>
            )
        })}

       {/* <SwiperSlide><CourceCards/></SwiperSlide>
       <SwiperSlide><CourceCards/></SwiperSlide>
       <SwiperSlide><CourceCards/></SwiperSlide>
       <SwiperSlide><CourceCards/></SwiperSlide>         */}
        <br/>
       </div>
       

      </Swiper>
      <div className="hel"></div>
      
    </>
  );
}
