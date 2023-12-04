import React from 'react';
import HorizontalSlider from './HorizontalSlider';
import SlidingBoxes from './SlidingBoxes';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', height: '50vh' }}>
      <div style={{ width: '75%' }}> {/* Ajustado del 80% al 75% */}
        <HorizontalSlider />
      </div>
      <div style={{ width: '25%', position: 'relative', overflow: 'hidden', margin: '10px' }}>
        <SlidingBoxes />
      </div>
    </div>
  );
};

export default Home;
