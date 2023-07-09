import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiLightbulbNight } from '@mdi/js';
import './Navbar.css'
export default function Navbar() {
    let location = useLocation();
    useEffect(() => { }, [location]);

    return (
        <div id='navbar' className='fixed w-full'>
            <nav className='grid grid-flow-col m'>
                <div className='flex items-center justify-center'>
                    <Link id='nav-title' className='audio-fs tracking-wider leading-9 text-3xl select-none cursor-pointer' to={'/'}><span className='text-[#008080] audio-fs'>COFFEE</span> CONVERTERS</Link>

                </div>
                <div className='flex items-center h-full justify-end nav-links font-semibold m mos-fs'>
                    <Link to={'/'} className={`${location.pathname === '/' ? "active" : ""} nav-links`}>HOME</Link>
                    <Link to={'/merchandise'} className={`${location.pathname === '/merchandise' ? "active" : ""} nav-links`}>MERCHANDISE</Link>
                    <Link to={'/community'} className={`${location.pathname === '/community' ? "active" : ""} nav-links`}>COMMUNITY</Link>
                    <Link to={'/about'} className={`${location.pathname === '/about' ? "active" : ""} nav-links`}>ABOUT</Link>
                </div>
                <div className='flex items-center justify-center m'>
                    <div className="entry space-x-8 text-2xl">
                        <button><i class="fa-regular fa-circle-user"></i></button>
                        <button><i class="fa-solid fa-eye"></i></button>
                    </div>
                    <button className='close'>Close Menu</button>
                </div>
            </nav>
        </div>
    )
}
