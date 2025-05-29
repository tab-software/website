import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='App-header-div-title-box'>
                    <div className='App-header-title'>
                        <Typewriter typeSpeed={200} deleteSpeed={200} words={['tab']} cursorStyle="_" cursor />
                    </div>
                    <div className='App-header-slogan-text'>
                        <Typewriter typeSpeed={100} words={['Tu solución', 'Somos nosotros']} loop />
                    </div>
                </div>
            </header>

            <div className='navbar'>
                <h1>tab_</h1>
                <div className='navbarSectionsDiv'>
                    <div className='navbarSectionsDivLink navbarSectionsDivLinkSelected'>
                        <p className='navbarSectionsDivLinkp'>nosotros</p>
                    </div>
                    <div className='navbarSectionsDivLink'>
                        <p className='navbarSectionsDivLinkp'>soluciones</p>
                    </div>
                    <div className='navbarSectionsDivLink'>
                        <p className='navbarSectionsDivLinkp'>contacto</p>
                    </div>
                </div>
            </div>

            <div className='App-us-section'>
                <h1>nosotros.</h1>
                <section></section>
                <h1>nuestro equipo</h1>
            </div>
        </div>
    );
}
export default App;
