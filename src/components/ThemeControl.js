import React from 'react'
import { useState } from 'react'

const ThemeControl = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const handleThemeChange = () => {
        setIsDarkTheme((prevState) => setIsDarkTheme(!prevState))
    }

    return (
        <div className='theme-control'>
            <button onClick={handleThemeChange}>{isDarkTheme ? 'Light' : 'Dark'}</button>
        </div>
    )
}

export default ThemeControl