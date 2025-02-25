import React, { useEffect, useState } from 'react';
import './LoadingPage.css';

function LoadingPage() {
    const text = "ISTE Students Chapter";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (isTyping) {
            if (index < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(prev => prev + text[index]); // Add one letter at a time
                    setIndex(index + 1);
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                setTimeout(() => {
                    setIsTyping(false); // Start erasing after a delay
                }, 2000);
            }
        } else {
            if (index > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1)); // Remove one letter at a time
                    setIndex(index - 1);
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                setIsTyping(true); // Start typing again
            }
        }
    }, [index, isTyping, text]);

    return (
        <div className="container">
            <img src="/pictures/unsplash_FPSrDsq5i20.svg" className="background-image" alt="Background" />
            <div className="center-content">
                <div className="image-group">
                    <img src="/pictures/Group 5.svg" className="center-image" alt="Group 5" />
                    <span className="typewriter-text">{displayText}</span>
                    <img src="/pictures/Group 6.svg" className="center-image" alt="Group 6" />
                </div>
                <p className="scroll-text">scroll down</p>
                <img src="/pictures/Group 9.svg" className="scroll-icon" alt="Group 9" />
            </div>
        </div>
    );
}

export default LoadingPage;
