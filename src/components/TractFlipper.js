import React from 'react';
import ReactCardFlipper from 'react-card-flipper';

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

export default function TractFlipper() {
  return (
    <div className="lg:pr-32 xl:pr-48">
      <ReactCardFlipper
        behavior="click"
        levitate={true}
        width={800}
        height={400}
        className="container mx-auto"
      >
        <div className="bg-black px-10 h-full border-solig border-8 border-yellow-500 flex flex-col justify-center align center">
          <h3 className="font-semibold text-6xl text-center text-yellow-500">What If</h3>

          {/* <ol type="1" className="list-decimal text-white">
            {commandments.map((command, index) => {
              return (
                <li key={index} className="py-1 ">
                  {command}
                </li>
              );
            })}
          </ol> */}
          <h3 className="font-semibold text-yellow text-2xl text-center text-white">
            Click here to find out.
          </h3>
        </div>
        <div className="bg-black h-full p-5">
          <p className="text-white text-xl">
            The dictionary says "good" is to be " morally" excellent. Let's check the standard- the
            Ten Commandments, to see how far we fall short: Is God first in you life? Do you love
            Him with "heart, mind, soul and strength? Have you made a god to suit yourself? Have you
            used His name in vain? Have you kept the Sabbath holy? Have you always honored your
            parents? Have you hated anyone, and therefore committed murder in your heart? Have you
            looked with lust and therefore committed adultery in your heart? Have you lied (
            Including "fibs), stolen (the value is irrelevant), or coveted other people's
            possessions? If you are honest you know you will be guilty on the Day of Judgment. God
            however, doesn't want to send you to Hell.
          </p>
        </div>
      </ReactCardFlipper>
    </div>
  );
}
