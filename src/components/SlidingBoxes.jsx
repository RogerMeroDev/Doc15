import React from 'react';
import { useTransition, animated } from 'react-spring';
import './SlidingBoxes.css';

const SlidingBoxes = () => {
  const boxes = [
    { id: 1, color: 'black', colorBack:'#bdbdbd' },    
    { id: 2, color: 'black',colorBack:'#bdbdbd' },
    { id: 3, color: 'black',colorBack:'#bdbdbd' }
  ];

  const [index, setIndex] = React.useState(0);

  // React Spring transition for infinite loop
  const transitions = useTransition(boxes[index], {
    key: item => item.id,
    from: { transform: 'translate3d(0,100%,0)' },
    enter: { transform: 'translate3d(0,0%,0)' },
    leave: { transform: 'translate3d(0,-100%,0)' },
    config: { duration: 3000 },
    onRest: () => setIndex((state) => (state + 1) % boxes.length),
  });

  return (
    <div className="sliding-boxes-container">
      {transitions((style, item) => (
        <animated.div
          className="box"
          style={{
            ...style,
            borderColor: item.color,
            background:item.colorBack,
            
          }}
        >
          <span className="box-text">{`Texto ${item.id}`}</span>
        </animated.div>
      ))}
    </div>
  );
};

export default SlidingBoxes;
