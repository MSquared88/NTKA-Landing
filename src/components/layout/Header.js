import React, { useState, useRef, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../images/logo.png';
import Button from '../Button';
import { Transition } from '@headlessui/react';

const Header = () => {
  const refContainer = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = e => {
    if (refContainer.current && !refContainer.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <header className="sticky bg-black shadow z-10">
      <div className="container flex flex-col lg:flex-row  justify-between items-center mx-auto py-4 px-8 text-white">
        <div className="flex items-center text-3xl fonts">
          <img src={Logo} className="pr-2" />
          NTKA
        </div>
        <div className="flex mt-4 sm:mt-0">
          <AnchorLink className="px-4 text-xl md:text-2xl text-white" href="#About">
            About
          </AnchorLink>
          <AnchorLink className="px-4 text-xl md:text-2xl text-white" href="#features">
            Classes
          </AnchorLink>
          <AnchorLink className="px-4 text-xl md:text-2xl text-white" href="#contact">
            Contact
          </AnchorLink>
          <div className="relative px-4 text-xl md:text-2xl text-white" ref={refContainer}>
            <button type="button" className="whitespace-nowrap" onClick={() => setIsOpen(!isOpen)}>
              Video Links {String.fromCharCode(711)}
            </button>

            <Transition
              show={isOpen}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {ref => (
                <div
                  ref={ref}
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
                >
                  <div className="rounded-md bg-black shadow-xs">
                    <ul className="mt-2 leading-loose p-2">
                      <li className="hover:bg-black border-white">
                        <a
                          className="text-white hover:text-yellow-400"
                          target="_blank"
                          href="https://www.youtube.com/playlist?list=PL80Hf8TMAMM7jn9FgjO8dQqyHLzhdN-Wh"
                        >
                          Yellow Belt
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-yellow-700"
                          target="_blank"
                          href="https://www.youtube.com/playlist?list=PL80Hf8TMAMM6LjcxTYx8K9FpwTUAdB751"
                        >
                          Gold Belt
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-orange-400"
                          target="_blank"
                          href="https://www.youtube.com/playlist?list=PL80Hf8TMAMM63a_2fxyuMfhyK3F-m5le6"
                        >
                          Orange Belt
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-green-700 border-"
                          target="_blank"
                          href="https://www.youtube.com/playlist?list=PL80Hf8TMAMM6cFmyGQXXrqyoRUHhsG_Hb"
                        >
                          Green Belt
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white"
                          target="_blank"
                          href="https://www.youtube.com/playlist?list=PL80Hf8TMAMM5Di5VxYYCq0GWoKdgWWtsG"
                        >
                          Blue Belt
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </div>

        <div className="md:pt-0 pt-4">
          <Button className="text-sm">
            <a
              href="https://www.paypal.me/starnesindustries"
              className="text-white hover:text-white"
              target="_blank"
            >
              <img
                className="h-8"
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png"
              />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
