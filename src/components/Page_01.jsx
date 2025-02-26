import React from 'react';

import './Page_01.css';

function Page_01() {
    return (
        <div className="container">
            <div className="nav">
                <div className="nav-left">
                    <img src="/pictures/Mask group.svg" alt="Logo" className="logo"/>
                    <h1>ISTE</h1>
                </div>
                <div className="nav-links">
                    <img src="/pictures/facebook 1.svg" alt="Facebook"/>
                    <img src="/pictures/social-media 1.svg" alt="Social Media"/>
                    <img src="/pictures/youtube 1.svg" alt="YouTube"/>
                    <img src="/pictures/linkedin 1.svg" alt="LinkedIn"/>
                    <img src="/pictures/instagram 1.svg" alt="Instagram"/>
                </div>
                <button className="nav-button">
                    <img src="/pictures/Group 55.svg" alt="Button"/>
                </button>
            </div>
            <img src="/pictures/unsplash_FPSrDsq5i20.svg" className="centered-image" alt="Unsplash" />
        </div>
    );
}

export default Page_01;