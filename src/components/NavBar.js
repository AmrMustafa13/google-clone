import React from 'react'
import Search from './Search'
import ThemeControl from './ThemeControl'
import { Link } from 'react-router-dom'
import Navigators from './Navigators'
import Logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <nav>
            <div className='nav-bar'>
                <div className='logo'>
                    <Link to='/'><img src={Logo} alt='logo' /></Link>
                </div>
                <Search />
                <ThemeControl />
            </div>
            <Navigators />
        </nav>
    )
}

export default NavBar