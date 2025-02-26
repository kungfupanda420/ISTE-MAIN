import React, { useEffect, useState } from 'react';
import LoadingPage from './components/LoadingPage';
import Page_01 from './components/Page_01';
import './index.css';

function App() {
  const [showPage01, setShowPage01] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > window.innerHeight * 0.5) { // Adjusted the threshold
        setShowPage01(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      
      <div id="page_01" >
        <Page_01 />
      </div>
    </>
  );
}

export default App;
