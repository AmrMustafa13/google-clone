import React, { createContext, useContext, useState } from 'react'

const ResultsContext = createContext()

const baseUrl = `https://google-search3.p.rapidapi.com/api/v1`

export const ResultsContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('barcalona')
    const [results, setResults] = useState([])

    const getResults = async (type) => {
        setIsLoading(true)
        const res = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '7b133925b2mshca61cd723c305a8p18e5acjsne7533e173731'
            }
        })
        const data = await res.json()
        setResults(data)
        setIsLoading(false)
    }

    return (
        <ResultsContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultsContext.Provider>
    )
}

export const useResultsContext = () => useContext(ResultsContext)