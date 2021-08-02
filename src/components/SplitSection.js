import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-20 bg-black text-white">
    <div className="container mx-auto md:px-16 items-center flex lg:flex-row flex-col-reverse">
      <div className="w-3/4 ">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 h-full ${reverseOrder &&
          `order-last lg:order-first md:order-last`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
