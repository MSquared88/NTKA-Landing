import React from 'react';
import ReactCardFlipper from 'react-card-flipper';

import rainbow from './images/rainbow.jpg';
import smiley from './images/smiley-bg2.svg';

import Smiley from '../svg/Smiley';

const commandments = [
  'You shall have no other gods before Me.',
  'You shall not make for yourself any graven image.',
  'You shall not take the name of the Lord your God in vain..',
  'Remember the Sabbath Day, to keep it holy',
  'Honor your father and your mother.',
  'You shall not murder.',
  'You shall not commit adultery.',
  'You shall not steal.',
  'You shall not lie.',
  'You shall not covet.'
];

export default function TractFlipper({ width }) {
  return (
    <div>
      <ReactCardFlipper
        behavior="click"
        levitate={true}
        width={width}
        height={500}
        className="container mx-auto cursor-pointer"
      >
        <div
          className="px-10 h-full flex flex-col justify-center items-center w-full border border-black"
          style={{ backgroundImage: `url(${rainbow})`, backgroundSize: 'cover' }}
        >
          <h3 className="font-bold text-5xl lg:text-6xl text-center text-black ">
            Smile God Loves You
          </h3>
          <div className="flex items-center justify-center">
            <img src={smiley} className="w-40 h-40 lg:w-64 lg:h-64 " />
          </div>
          {/* <div
            className="w-300 h-300"
            style={{ backgroundImage: `url(${smiley})`, backgroundSize: 'cover' }}
          ></div> */}

          {/* <ol type="1" className="list-decimal text-white">
            {commandments.map((command, index) => {
              return (
                <li key={index} className="py-1 ">
                  {command}
                </li>
              );
            })}
          </ol> */}
        </div>
        <div className="bg-black text-white h-full px-10 -full overflow-auto flex flex-col justify-center items-center ">
          <p className=" text-xl  ">
            For God so loved the world, that he gave his only begotten Son, that whosoever believeth
            in him should not perish, but have everlasting life. For God sent not his Son into the
            world to condemn the world; but that the world through him might be saved.
          </p>
        </div>
      </ReactCardFlipper>
    </div>
  );
}
