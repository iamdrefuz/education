import React from 'react';
import { nav_links } from './data_components/navbar';
import {SlLock}from 'react-icons/sl'
const Navbar = () => {
    return (
        <nav className='navbar container'>
            <a href='/'>Logo</a>
            <ul className='navbar_menu'>
                {nav_links.map((item)=>{return <li className='navbar_list' key={item.id}><a className='navbar_link' href={item.link}>{item.title}</a></li>})}
            </ul>
            <div className='actions'>
                <div className='btn_secondary'><a href='/login'><SlLock className='lock_nav'/> Login</a></div>
                <div className='btn_primary'><a href='/sign_up'>SignUp free</a></div>
            </div>
        </nav>
    );
};

export default Navbar;