// import { useState } from 'react'

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Excerpt from "./components/Excerpt/Excerpt";
import Figures from "./components/Figures/Figures";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Nav from "./components/Nav/Nav";
import Solution from "./components/Solution/Solution";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Excerpt />
        <Mission />
        <Solution />
        <Figures />
        <About />
        <Nav />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
