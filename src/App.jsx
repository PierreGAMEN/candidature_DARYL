// import { useState } from 'react'

import './App.css'
import About from './components/About/About'
import Excerpt from './components/Excerpt/Excerpt'
import Header from './components/Header/Header'
import Mission from './components/Mission/Mission'
import Nav from './components/Nav/Nav'
import Solution from './components/Solution/Solution'

function App() {


  return (
    <>
    <Header />
    <main>
      <Excerpt />
      <Mission />
      <Solution />
      <About />
      <Nav />
    </main>
 
    </>
  )
}

export default App
