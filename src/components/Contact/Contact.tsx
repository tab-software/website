import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="Contact-mainContainer">
            <h1 className="Contact-title noMargin">Contacto</h1>
            <h3 className="noMargin">
                📈 Tu crecimiento es nuestra meta
            </h3>
            <h3 className="noMargin">
                🚀¿Estás listo para avanzar?
            </h3>
            <a className="noMargin Contact-link" href="mailto:soluciones@tab.ar">soluciones@tab.ar</a>
        </div>
    );
};

export default Contact;