import React from 'react'; // Make sure to import React
import img from '../images/1.jpeg';

export const MyImage: React.FC<{}> = () => {
  return (
    <>
      <img style={{ borderRadius: '50%' }} width="300" src={img} alt="My Image" />
    </>
  );
};
