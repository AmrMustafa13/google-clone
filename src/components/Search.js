import React from 'react'
import { useState, useEffect } from 'react'

const Search = () => {

    const [searchText, setSearchText] = useState('')

    const baseUrl = `https://google-search3.p.rapidapi.com/api/v1`

    const handleSearchInput = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <div className='search'>
            <input type='text' value={searchText} onChange={handleSearchInput} />
        </div>
    )
}

export default Search