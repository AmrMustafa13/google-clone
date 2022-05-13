import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResultsContext } from '../context/results-context'
import Spinner from './Spinner'

const Results = () => {

    const { results, isLoading, getResults, searchTerm } = useResultsContext()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/videos')
            getResults(`/search/q=${searchTerm} videos`)
        else
            getResults(`${location.pathname}/q=${searchTerm}&num=40`)
    }, [searchTerm, location.pathname])

    if (isLoading) return <Spinner />

    switch (location.pathname) {
        case '/search':
            return (
                <div className='search-res'>
                    {results?.results?.map(({ title, link }, idx) => {
                        return (
                            <div className='search-result-box' key={idx}>
                                <a href={link} className='res-title'>{title}</a>
                                <a href={link} className='res-link'>{link.length > 30 ? link.substring(0, 30) : link}</a>
                            </div>
                        )
                    })}
                </div>
            )
        case '/news':
            console.log(results)
            return (
                <div className='search-res'>
                    {/* {results?.entries?.map(({ id, links, source, title }) => {
                        return (
                            <div className='search-result-box' key={id}>
                                <a href={links?.[0].href}>
                                    <p className='res-title'>{title}</p>
                                </a>
                                <a className='res-link' href={source?.href}>{source?.href}</a>
                            </div>
                        )
                    })} */}
                    news
                </div>
            )
        case '/images':
            return (
                <div className='search-res'>
                    {results?.image_results?.map(({ image, link: { href, title } }, idx) => {
                        return (
                            <div className='search-result-box' key={idx}>
                                <a href={href}>
                                    <img src={image?.src} alt={title} title={href} />
                                    <p>{title.substring(0, title.indexOf('...'))}</p>
                                    <p>{title.substring(title.indexOf('...') + 3, title.length)}</p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            )
        case '/videos':
            return 'VIDEOS'
        default:
            return 'ERROR'
    }
}

export default Results