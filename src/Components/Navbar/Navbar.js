import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    let location = useLocation();
    useEffect(() => {}, [location]);

    return (
        <div id='navbar'>
            <nav className='grid grid-flow-col'>
                <div className='flex items-center justify-center'>
                    <Link className='audio-fs tracking-wider leading-9 text-3xl select-none cursor-pointer text-white' to={'/'}>COFFEE <br/>CONVERTERS</Link>
                </div>
                <div className='flex space-x-10 items-center h-full justify-end'>
                    <Link to={'/'} className={`${location.pathname === '/' ? "active" : ""}`}>HOME</Link>
                    <Link to={'/merchandise'} className={`${location.pathname === '/merchandise' ? "active" : ""}`}>MERCHANDISE</Link>
                    <Link to={'/community'} className={`${location.pathname === '/community' ? "active" : ""}`}>COMMUNITY</Link>
                    <Link to={'/about'} className={`${location.pathname === '/about' ? "active" : ""}`}>ABOUT</Link>
                </div>
                <div></div>
            </nav>
        </div>
    )
}
