import React from 'react'
import Search from './Search'
import ThemeControl from './ThemeControl'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <Link to='/'><img src='./images/logo.png' alt='google-logo' /></Link>
            </div>
            <Search />
            <ThemeControl />
        </nav>
    )
}

export default NavBar