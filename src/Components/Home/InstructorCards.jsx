import React from 'react';
import User_cardImg from '../Assets/Rectangle 9.png'
import UserRaiting from '../Assets/Frame 22.png'
import {BsArrowUpRight} from 'react-icons/bs'
const InstructorCards = (props) => {
    return (
        <div className='card2'>
           <div className='card-img-sett2'>
              <img className='user-image2'  src={props.img}/>
           </div>
            <div className='card-name'>{props.name}</div>
            <div className='card-job'>{props.job}</div>

            
        </div>
    );
};

export default InstructorCards;