import React from 'react';
import ReactCardFlipper from 'react-card-flipper';

import rainbow from './images/rainbow.jpg';
import smiley from './images/smiley-bg2.svg';

export default function TractFlipper({ width }) {
  return (
    <div>
      <ReactCardFlipper
        behavior="click"
        levitate={true}
        width={width}
        height={550}
        className="container mx-auto cursor-pointer"
      >
        <div
          className="px-10 h-full flex flex-col justify-center items-center w-full border border-black"
          style={{ backgroundImage: `url(${rainbow})`, backgroundSize: 'cover' }}
        >
          <p className="font-bold text-xl">click</p>
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
          {/* <span className="text-brightYellow"></span> */}
          {/* <span className="font-bold"></span> */}
        </div>
        <div className=" h-full px-2  overflow-auto flex flex-col justify-center items-center border border-solid border-black">
          <p
            className="h-full text-lg"
            style={{ overflow: 'scroll', '-webkit-overflow-scrolling': 'touch' }}
          >
            <span className="text-primeRed">John 3:16-17</span> says "For God so loved the world,
            that he gave his only begotten Son, that whosoever believeth in him should not perish,
            but have everlasting life. For God sent not his Son into the world to condemn the world;
            but that the world through him <span className="font-bold">might be saved</span>." Most
            people know about
            <span className="text-primary"> John 3:16-17</span>, but ignore
            <span className="text-brightYellow"> verses 18-19</span>, wich say, "He that believeth
            on him is not condemned: but he that believeth not is{' '}
            <span className="font-bold">condemned already </span>condemned already, because he hath
            not believed in the name of the only begotten Son of God. And this is the condemnation,
            that light is come into the world, and{' '}
            <span className="font-bold">men loved darkness </span>rather than light,{' '}
            <span className="font-bold">because their deeds were evil</span>." Friend, don't be
            deceived! Just because God "loves you", <span className="font-bold">doesn't mean</span>{' '}
            that He loves the way your life (<span className="font-bold">if you are sinning</span>)
            or that He won't <span className="text-purple-600">condemn you to hell</span> for you
            sin. <span className="text-primeRed">Romans 5:8</span> says, "But God demonstrates His
            own love toward us, in that while we were still sinners, Christ died for us." God has an{' '}
            <span className="text-green-600">unconditional love </span>for you, in this way: He sent
            jesusto die for <span className="font-bold">YOU and He wants YOU</span> to have
            everlasting life. God has a <span className="font-bold tex-3xl">Holy Hatred</span>, for
            sinners. <span className="text-purple-600">Psalm 5:4-5</span> says, "For you are nat a
            God who takes pleasure in wickedness,{' '}
            <span className="font-bold">nor shall evil dwell with you</span>. The boastful shall not
            stand in Your sight; you <span className="font-bold">hate all workers of iniquity</span>
            ." <span className="text-primeYellow">Psalm 11:5-6</span> says, "The Lord tests the
            righteous, but the wicked and the one who loves violence{' '}
            <span className="font-bold">His soul hates</span>. Upon the wicked He will rain coals;{' '}
            <span className="font-bold">fire and brimstone</span> and a burning wind shall be the
            portion of their cup." The question is not whether or not God loves you. The question
            whether or not God loves the way you are living you life, whether or not{' '}
            <span className="text-purple-600 text-bold">YOU LOVE GOD</span>. Jesus said, "
            <span className="font-bold">If you love Me</span>, keep My commandments". If you are
            lying, stealing, lusting, getting drunk, fornicating, doing drugs or{' '}
            <span className="font-bold">sinning at all</span>, you currently{' '}
            <span className="text-primeRed text-bold">DON'T LOVE GOD</span>. You need to, "Repent
            therefore and be converted, that your sins may be blotted out, so that times of
            refreshing may come from the presence of the Lord"(
            <span className="text-purple-600">Acts 3:19</span>). There{' '}
            <span className="text-brightYellow">IS HOPE</span> for you, but{' '}
            <span className="font-bold">ONLY </span>in Jesus. He commands you to{' '}
            <span className="font-bold">Forsake</span> all of your sins,{' '}
            <span className="font-bold">Trust</span> in Him and{' '}
            <span className="font-bold">Follow</span> Him.{' '}
            <span className="text-green-600">
              <span className="font-bold">DO IT TODAY,</span> before it's too late!
            </span>
          </p>
        </div>
      </ReactCardFlipper>
    </div>
  );
}
