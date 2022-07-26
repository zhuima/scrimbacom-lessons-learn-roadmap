import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import './App.css'

function App() {

  return (
    <div className="Container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
