import React from 'react';
import User_cardImg from '../Assets/Rectangle 9.png'
import UserRaiting from '../Assets/Frame 22.png'
import {BsArrowUpRight} from 'react-icons/bs'
const CourceCards = (props) => {
    return (
        <div className='card'>
           <div className='card-img-sett'>
              <img className='user-image'  src={User_cardImg}/>
           </div>
            <div className='card-desc'>{props.mentor} <span className='text-prim'>{props.category}</span> kursi mentori. {props.tajriba}lik tajriba</div>
            <div className='card-raiting'><img src={UserRaiting}/></div>
            <div className='hr'></div>
            <div className='card-actions'>
                        <div className='cource-price'><span className='money text-prim'>{props.money}</span>{props.price}</div>
                <a href={props.link} className='cource-link'><BsArrowUpRight/></a>
            </div>
        </div>
    );
};

export default CourceCards;