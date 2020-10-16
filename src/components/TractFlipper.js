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
    <div>
      <ReactCardFlipper
        behavior="click"
        levitate={true}
        width={800}
        height={400}
        className="container mx-auto cursor-pointer "
      >
        <div className="bg-black px-10 h-full border-solid border-8 border-brightYellow flex flex-col justify-center items-center w-3/5 lg:w-full">
          <h3 className="font-semibold text-6xl text-center text-brightYellow">What If?</h3>

          {/* <ol type="1" className="list-decimal text-white">
            {commandments.map((command, index) => {
              return (
                <li key={index} className="py-1 ">
                  {command}
                </li>
              );
            })}
          </ol> */}
          <h3 className="font-semibold text-yellow text-2xl text-center text-white">Click.</h3>
        </div>
        <div className="bg-black h-full px-10 w-3/5 lg:w-full overflow-auto flex flex-col justify-center items-center ">
          <p className="text-white text-xl  ">
            Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way
            of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law. On his
            law he meditates day and night. He will be like a tree planted by the streams of water,
            that brings forth its fruit in its season, whose leaf also does not wither. Whatever he
            does shall prosper. The wicked are not so, but are like the chaff which the wind drives
            away. Therefore the wicked shall not stand in the judgment, nor sinners in the
            congregation of the righteous. For Yahweh knows the way of the righteous, but the way of
            the wicked shall perish.Why do the nations rage, and the peoples plot a vain thing? The
            kings of the earth take a stand, and the rulers take counsel together, against Yahweh,
            and against his Anointed, saying, «Let's break their bonds apart, and cast their cords
            from us.» He who sits in the heavens will laugh. The LORD will have them in derision.
          </p>
        </div>
      </ReactCardFlipper>
    </div>
  );
}
