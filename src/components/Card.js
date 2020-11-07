import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-8 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '10px 10px 5px rgb(0,0,0,.5)',
      height: '650px'
    }}
  >
    {children}
  </div>
);

export default Card;
