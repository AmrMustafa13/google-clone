import React from 'react'
import { routes as navigators } from './Links'
import { NavLink } from 'react-router-dom'

const Navigators = () => {
    return (
        <div className='navigators'>
            {navigators.map((navigator, idx) => <NavLink to={navigator.url} key={idx}>{navigator.text}</NavLink>)}
        </div>
    )
}

export default Navigators