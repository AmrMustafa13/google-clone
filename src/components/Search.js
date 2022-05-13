import React from 'react'
import { useState, useEffect } from 'react'
import { useResultsContext } from '../context/results-context'
import { useDebounce } from 'use-debounce'

const Search = () => {

    const { searchTerm, setSearchTerm } = useResultsContext()
    const [searchText, setSearchText] = useState(searchTerm)
    const [debouncedText] = useDebounce(searchText, 500)

    useEffect(() => {
        if (debouncedText) setSearchTerm(debouncedText)
    }, [debouncedText, setSearchTerm])

    return (
        <div className='search'>
            <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
}

export default Search