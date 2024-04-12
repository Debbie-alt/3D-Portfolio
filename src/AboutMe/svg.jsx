import React from 'react';

const WavyDiv = () => {
  const divStyle = {
    width: '300px',
    height: '150px',
    backgroundColor: 'red', // Gray color
    clipPath: 'url(#wave)',
  };

  return (
    <div style={divStyle}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <defs>
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path d="M 0 100 Q 50 20 100 100 Q 150 180 200 100 Q 250 20 300 100 Q 350 180 400 100 Q 450 20 500 100 V 150 H 0 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default WavyDiv;
