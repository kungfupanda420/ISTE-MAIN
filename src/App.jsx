import React, { useEffect, useState } from 'react';
import LoadingPage from './components/LoadingPage';
import Page01 from './components/Page_01';
import './index.css';

function App() {
  const [showPage01, setShowPage01] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > window.innerHeight * 0.5) { // Lowered the threshold
        setShowPage01(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="loading_page" className={`page ${showPage01 ? 'hidden' : ''}`}>
        <LoadingPage />
      </div>
      <div id="page_01" className={`page ${showPage01 ? 'visible' : 'hidden'}`}>
        <Page01 />
      </div>
    </>
  );
}

export default App;
