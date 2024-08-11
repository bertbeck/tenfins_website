import React, { useState, useEffect } from 'react';
import '../styles/progressBar.css'

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < props.percent) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span>{props.text}</span>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
