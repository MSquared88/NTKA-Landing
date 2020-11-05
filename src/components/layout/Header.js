import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../images/logo.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky bg-black shadow z-10">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8 text-white">
      <div className="flex items-center text-3xl fonts">
        <img src={Logo} className="pr-2" />
        NTKA
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-2xl text-white" href="#About">
          About
        </AnchorLink>
        <AnchorLink className="px-4 text-2xl text-white" href="#features">
          Classes
        </AnchorLink>
        <AnchorLink className="px-4 text-2xl text-white" href="#contact">
          Contact
        </AnchorLink>
      </div>
      <div className="md:pt-0 pt-4">
        <Button className="text-sm">
          <a href="https://www.paypal.me/starnesindustries" className="text-white hover:text-white" target="_blank">
            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" />
          </a>
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
