import './Page_01.css';

function Page_01() {
    return (
        <div className="container">
            <div className="background-image">
                <img src="/pictures/unsplash_FPSrDsq5i20.svg" className="centered-image" alt="Unsplash" />
            </div>
            <div className="nav">
                <div className="nav-left">
                    <img src="/pictures/Mask group.svg" alt="Logo" className="logo"/>
                    <h1>ISTE</h1>
                </div>
                <div className="nav-links">
                    <a href="https://www.facebook.com/istenitc/" target="_blank" rel="noopener noreferrer">
                        <img src="/pictures/facebook 1.svg" alt="Facebook"/>
                    </a>
                    <a href="https://x.com/iste_nitc" target="_blank" rel="noopener noreferrer">
                        <img src="/pictures/social-media 1.svg" alt="Social Media"/>
                    </a>
                    <a href="https://www.youtube.com/@istenitcchapter4641" target="_blank" rel="noopener noreferrer">
                        <img src="/pictures/youtube 1.svg" alt="YouTube"/>
                    </a>
                    <a href="https://www.linkedin.com/company/iste-nitc/" target="_blank" rel="noopener noreferrer">
                        <img src="/pictures/linkedin 1.svg" alt="LinkedIn"/>
                    </a>
                    <a href="https://www.instagram.com/iste_nitc/" target="_blank" rel="noopener noreferrer">
                        <img src="/pictures/instagram 1.svg" alt="Instagram"/>
                    </a>
                </div>
                <button className="nav-button">
                    <img src="/pictures/Group 55.svg" alt="Button"/>
                </button>
                <img src="/pictures/pixelcut-export (17) 2.svg" alt='Group' className='astronaut'/>
            </div>
            <img src="/pictures/unsplash_FPSrDsq5i20.svg" className="centered-image foreground-image" alt="Unsplash" />
            
        </div>
    
    );
}

export default Page_01;