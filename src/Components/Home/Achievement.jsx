import React from 'react'
import {IoSchoolOutline} from 'react-icons/io5'
import { achievements } from '../data_components/achievements'
import UserImage from '../Assets/icons8-team-FcLyt7lW5wg-unsplash-removebg-preview 1.png'
function Achievement() {
  return (
     <div className='container'>
        <div className=" title mt-5">Our <span className="text-prim">Best Instructor</span></div>
        <div className='desc'>Various versions have evolved over the years, sometimes by accident,</div>
        <div className='main-achievements'>
            <div className='achievements_info mt-5' >
            {
                    
            achievements.map((item)=>{
              return(
                <div className='achieavement_info_category' key={item.id}>
                  <>                   
                            <div className='icon'>{<IoSchoolOutline/>}</div>
                                <div className='info_box'>
                                    <div className='info-title'>{item.title}</div>
                                    <div className='info-desc desc'>{item.desc}</div>
                                </div>
                            </>
                     
                     </div>
                        )
                    })
                   }
            </div>
            <div className='achievements_media'>
                  <div className='main-box'>
                      <div className='ach-media_box'>
                        <img src={UserImage}/>
                      </div>
                      
                  </div>
            </div>
        </div>
     </div>
  )
}

export default Achievement