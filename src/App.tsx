import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
    return (
        <div className="App">
            <Hero />
            <Navbar />
            <AboutUs />
        </div>
    );
}
export default App;
