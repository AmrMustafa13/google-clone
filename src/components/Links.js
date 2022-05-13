import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Results from './Results'

export const routes = [
    {
        url: '/search',
        text: 'All'
    },
    {
        url: '/videos',
        text: 'Videos'
    },
    {
        url: '/images',
        text: 'Images'
    },
    {
        url: '/news',
        text: 'News'
    }
]

const Links = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/search' />} />
            {routes.map((route, idx) => <Route path={route.url} element={<Results />} key={idx} />)}
        </Routes>
    )
}

export default Links