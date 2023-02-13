import React from 'react';
import {BsStars} from 'react-icons/bs'
import Vector from '../Assets/Vector 3.png'
import User from '../Assets/Young-Man-PNG-Free-Image.png'
import User2 from '../Assets/231-2318629_asian-business-woman-png-png-removebg-preview.png'
const Maincontent = () => {
    return (
        <div className='main_content container'>
            <div className='main_content_info'>
                <div className='shape-star'><BsStars/></div>
                <div className='sub-title'>START TO SUCCESS</div>
                <div className='title'>Access To <span className='text-prim'>5000+</span> Courses <br/>from <span className='text-prim'>300</span>  Instructors &<br/> Institutions</div>
                <div className='description'>Various versions have evolved over the years, sometimes by accident,</div>
                <img className='line-vector' src={Vector}/>
                <input className='search-input' type='text' placeholder='What do want to learn?'/>
            </div>
            <div className='main_conent__media'>
                <div className='navbar-card_first'>
                   <div className='brid-bg'>Web development</div>
                   <div className='bg-shape'></div>
                    <img className='user-img' src={User2}/>
                   
                </div>
                <div className='navbar-card_second'>
                <div className='brid-bg'>Android development</div> 
                <div className='bg-shape'></div>
                <img className='user-img' src={User}/>
                </div>
                <div className='shape-line'></div>
            </div>
        </div>
    );
};
export default Maincontent;