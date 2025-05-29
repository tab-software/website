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
                <h1 className='navbarTitle'>tab_</h1>
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
                <h1 className='textOnCenter'>nosotros.</h1>
                <section className='App-us-section-container'>
                    <div className='App-us-section-element-div'>
                        <h1 className='textOnCenter App-us-section-element-h1'>nuestra vision</h1>
                        <p className='textOnCenter App-us-section-element-p'>crear soluciones tecnologicas innovadoras y accesibles.</p>
                    </div>
                    <div className='App-us-section-element-div'>
                        <h1 className='textOnCenter App-us-section-element-h1'>nuestros valores</h1>
                        <p className='textOnCenter App-us-section-element-p'>innovacion, compromiso y transparencia</p>
                    </div>
                </section>
                
                <h1 className='textOnCenter'>nuestro equipo</h1>
                <section className='App-us-section-container'>
                    <div className='App-us-section-element-div'>
                        <h1 className='textOnCenter App-us-section-element-h1'>manuel teves</h1>
                        <p className='textOnCenter App-us-section-element-p'>Desarrollador.</p>
                    </div>
                    <div className='App-us-section-element-div'>
                        <h1 className='textOnCenter App-us-section-element-h1'>lautaro arenillas</h1>
                        <p className='textOnCenter App-us-section-element-p'>diseñador</p>
                    </div>
                    <div className='App-us-section-element-div'>
                        <h1 className='textOnCenter App-us-section-element-h1'>julian balbi</h1>
                        <p className='textOnCenter App-us-section-element-p'>project manager</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default App;
