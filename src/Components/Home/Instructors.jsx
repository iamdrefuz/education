import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import InstructorCards from "./InstructorCards";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { instructors } from "../data_components/Instructor";

export default function Instructors() {
  return (
    <>
    <div className=" title mt-5">Our <span className="text-prim">Best Instructor</span></div>
    <div className="desc">Various versions have evolved over the years, sometimes by accident,</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
      {
        instructors.map((item)=>{
            return(
                <SwiperSlide key={item.id}><InstructorCards img={item.img} name={item.name} job={item.job} /></SwiperSlide>
            )
        })
      }
      </Swiper>
    </>
  );
}


// 