import React from 'react'
import { studentCard } from '../data_components/students';
import "swiper/css";
import "swiper/css/pagination";

import '../../Style/_studentFeedback.scss'

// import required modules
import { Pagination } from "swiper";

function StudentFeedback() {
    const StudentCard =(props)=>{
        return(
            <div className='student-card' key={props.id}>
            <div className='student-header'>
                <div className='student-info'>
                    <div className='student-img'><img src={props.img}/></div>
                     <div className='student-name'>
                        <div className='name title'>{props.name}</div>
                        <div className='bio desc'>{props.bio}</div>
                     </div>
                    </div>
                    
                </div>
                <div className='student-body'>
                {props.comment}
                </div>
            </div>
        )
    }
  return (
    <div className='container students'>
        <div className='header'>
             <div className=" title mt-5">Our <span className="text-prim">Best Instructor</span></div>
             <div className='desc'>Various versions have evolved over the years, sometimes by accident,</div>
        </div>
        <div className='student-cards'>
             {studentCard.slice(length-3, length-1).map((item)=>{
              return(
                <StudentCard id={item.id} img={item.img} name={item.name} bio={item.bio} comment={item.comment}/>
              )
             })}
        </div>
    </div>
  )
}

export default StudentFeedback