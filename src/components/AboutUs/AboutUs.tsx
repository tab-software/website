import React from "react";
import "./AboutUs.css";

function AboutUs() {
    return (
        <div className='App-us-section'>
            <div className='App-us-section-illustrationContainer'>
                <img src={require("./logo.gif")} alt="Logo of tab_"></img>
            </div>
            <div className='App-us-section-descContainer'>
                <h1 className='App-us-section-title'>NOSOTROS</h1>
                <p className='App-us-section-desc'>
                    La solución tecnológica que tu negocio necesita. Diseñamos páginas web impactantes, potenciamos tu marca con diseño creativo y optimizamos tu rendimiento con el mejor hardware a medida. Nos enfocamos en maximizar tus ventas con soluciones reales, concretas y personalizadas.
                </p>
                <p className='App-us-section-desc'>
                    Tu crecimiento es nuestro objetivo.
                </p>
                <p  className='App-us-section-desc'>
                    ¿Estás listo para dar el salto?
                </p>
                <div className='App-us-section-contactUsButtonContainer'>
                    <div className='App-us-section-contactUsButton'>
                        <p className='noMargin'>👉 Contactanos hoy y </p>
                        <p className='noMargin'>transformá tu negocio.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;