import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Links from './components/Links'

const App = () => {

  return (
    <div className='app'>
      <NavBar />
      <Links />
      <Footer />
    </div>
  )
}

export default App