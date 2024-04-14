import React from 'react';

const WavyShape = () => {
  return (
      <svg className="wave-container">
      <path
        className="wave"
        d="M0,0 L0,100 C0,200 200,300 400,200 L800,100 C1000,0 1200,0 1200,0 V0 Z"
      />
    </svg>
  );
}

export default WavyShape;
