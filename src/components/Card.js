import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-12 shadow-inner rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '10px 10px 5px rgb(0,0,0,.5)'
    }}
  >
    {children}
  </div>
);

export default Card;
