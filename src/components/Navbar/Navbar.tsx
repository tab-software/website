import React from "react";
import './Navbar.css';

function Navbar() {
    return (
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
    )
};

export default Navbar;