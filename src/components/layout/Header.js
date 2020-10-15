import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../images/NTKA_Logo-removebg.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky bg-black shadow z-10">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8 text-white">
      <div className="flex items-center text-2xl">NTKA</div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-xl text-white" href="#features">
          Classes
        </AnchorLink>
        <AnchorLink className="px-4 text-xl text-white" href="#About">
          About Us
        </AnchorLink>
        <AnchorLink className="px-4 text-xl text-white" href="#contact">
          Contact
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">
          <a href="https://www.paypal.me/starnesindustries" className="text-white hover:text-white">
            Paypal
          </a>
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
