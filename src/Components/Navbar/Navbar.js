import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    let location = useLocation();
    useEffect(() => {}, [location]);

    return (
        <div id='navbar'>
            <nav className='m'>
                <div className='flex space-x-10 items-center h-full justify-end'>
                    <Link to={'/'} className={`${location.pathname === '/' ? "active" : ""}`}>HOME</Link>
                    <Link to={'/merchandise'} className={`${location.pathname === '/merchandise' ? "active" : ""}`}>MERCHANDISE</Link>
                    <Link to={'/community'} className={`${location.pathname === '/community' ? "active" : ""}`}>COMMUNITY</Link>
                    <Link to={'/about'} className={`${location.pathname === '/about' ? "active" : ""}`}>ABOUT</Link>
                </div>
                <div>

                </div>
            </nav>
        </div>
    )
}
