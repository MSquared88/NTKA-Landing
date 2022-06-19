import React from 'react';

import Bounce from 'react-reveal/Bounce';
import SplitSection from './SplitSection';
import group from './images/black-belt-group.jpg';

export default function about() {
  return (
    <SplitSection
      id="About"
      primarySlot={
        <Bounce left>
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-4xl font-bold leading-tight ">About Us</h3>
            <p className="mt-8 text-2xl font-light leading-relaxed">
              In Karate an individual will learn discipline, Respect for themselves and others,
              improving their self-esteem and give them the courage to overcome the everyday
              obstacles they face. The classes incorporate a balance of hard work and fun to keep
              the students highly motivated and interested in learning the arts of karate for years
              to come. Karate is a contact art!!!
            </p>
          </div>
        </Bounce>
      }
      secondarySlot={
        <Bounce right>
          <img
            src={group}
            alt="Group of balck belts in karate"
            className="border-solid border-8 border-white bg-primeRed"
          />
        </Bounce>
      }
    />
  );
}
