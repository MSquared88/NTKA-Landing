import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">North Texas Karate Academy</h2>
        <a href="https://goo.gl/maps/ADx3LN7mHpesF6or7" className="mt-5">
          3107 State Highway 101 Bridgeport, TX 76426
        </a>
        <p className="">(940) 255-2038</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.paypal.me/starnesindustries">
              <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.facebook.com/northtexaskarateacademy/">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
