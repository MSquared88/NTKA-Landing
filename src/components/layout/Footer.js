import React from 'react';

const Footer = () => (
  <footer className="container mx-auto px-3 mt-24 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 pl-1">
        <h2 className="md:text-lg font-semibold">North Texas Karate Academy</h2>
        <a href="mailto:starnesmartialarts@gmail.com">starnesmartialarts@gmail.com</a>
        <br />
        <a target="_blank" href="https://goo.gl/maps/ADx3LN7mHpesF6or7" className="mt-5 text-lg">
          3107 State Highway 101 <br /> Bridgeport, TX 76426
        </a>
        <p className="text-sm lg:text-base">(940) 255-2038</p>
      </div>
      <div className="flex-1">
        <h2 className="lg:text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a
              target="_blank"
              className="mt-5 text-lg"
              href="https://www.facebook.com/northtexaskarateacademy/"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
