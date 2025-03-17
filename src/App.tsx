import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* https://www.npmjs.com/package/react-simple-typewriter for next feature*/}
                <div className='App-header-div-slogan'>
                    <div className='App-header-title'>
                        <Typewriter typeSpeed={200} words={['tab']} cursorStyle="_" cursor />
                    </div>
                    <div className='App-header-slogan-text'>
                        <Typewriter typeSpeed={200} words={['Tu solucion', 'somos nosotros']} />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
