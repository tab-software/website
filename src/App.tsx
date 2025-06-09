import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
    return (
        <div className="App">
            <Hero />
            <Navbar />
            <AboutUs />
            <WhyChooseUs />
        </div>
    );
}
export default App;
