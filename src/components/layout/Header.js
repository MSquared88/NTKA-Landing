import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../images/NTKA_Logo-removebg.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-black shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8 text-white">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img src={Logo} alt="Logo" />
        </div>
        NTKA
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-white" href="#features">
          Classes
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#About">
          About Us
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div>
    </div>
  </header>
);

export default Header;
