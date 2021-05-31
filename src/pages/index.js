import React from 'react';

import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

//components
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import TractFlipper from '../components/TractFlipper';
import Contact from '../components/Contact';
// import StatsBox from '../components/StatsBox';
// import CustomerCard from '../components/CustomerCard';
// import LabelText from '../components/LabelText';

// import customerData from '../data/customer-data';
//pictures
import MasterStarnes from '../components/images/Master_Starnes.jpg';
import kidsImg from '../components/images/kids.svg';
import katasImg from '../components/images/Katas.svg';
import group from '../components/images/groupPhoto2-removedbg.png';

import logo from '../components/images/NTKA_Logo-removebg.png';
import americanFlag from '../components/images/American-Flag-Enhanced.svg';

export default () => (
  <Layout>
    <section
      className="pt-10 pb-24 "
      style={{ backgroundImage: `url(${americanFlag})`, backgroundSize: 'cover' }}
    >
      <div
        className="container mx-auto px-8 py-24 flex flex-col justify-center items-center bg-tint border-solid rounded-lg"
        style={{ boxShadow: '10px 10px 5px rgb(0,0,0)' }}
      >
        <div className="h-64 flex justify-center">
          <img
            src={logo}
            className="h-full object-contain"
            alt="North Texas Karate Academy Logo "
          />
        </div>
        <Fade>
          <div className="text-center w-full md:w-3/5 lg:text-left ">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-none w-full">
              Welcome to North Texas Karate Academy
            </h1>
            <p className="text-xl text-white lg:text-4xl mt-6 font-light">
              Karate or Martial Arts is not a sport as baseball, soccer or football. Karate is an
              art.
            </p>
          </div>
        </Fade>
      </div>
    </section>
    <SplitSection
      id="About"
      primarySlot={
        <Bounce left>
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-4xl font-bold leading-tight">About Us</h3>
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
            alt="The American Flag"
            className="border-solid border-8 border-black bg-primeRed"
            // style={{ backgroundImage: `url(${americanFlag})`, backgroundSize: 'cover' }}
          />
        </Bounce>
      }
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <Bounce right>
          <div className="lg:pl-32 xl:pl- flex-col ">
            <h3 className="text-4xl font-bold leading-tight">Our Instructor</h3>
            <p className="mt-8 text-2xl font-light leading-relaxed">
              Stephen began training in the Martial Arts at age 7 in Shin-Toshi Karate in 1985 and
              received his gold belt. In 1987 at age 9 he started training in American Karate with
              Mr. Darrel Sanders at North Texas Karate in Bridgeport , Texas. Stephen received his
              1st degree black belt at age 12. Stephen taught karate throughout his teenage years
              for Mr. Sanders. Presently, Stephen is continuing to train under Mr. Billy Smith 10th
              degree black belt in South Ft. Worth.
            </p>
            <p className="text-center font-bold text-2xl mt-4">Achievements</p>
            <p className="font-semibold text-xl">2014 USA Martial Arts Hall of Fame inductee</p>
            <p className="font-semibold text-xl">2016 Masters Hall of Fame inductee</p>
            <p className="font-semibold text-xl">
              2018 Universal Martial Arts Hall of Fame inductee
            </p>
          </div>
        </Bounce>
      }
      secondarySlot={
        <Bounce left>
          <div className="flex flex-col items-center">
            <img alt="Master Stephen Starnes" src={MasterStarnes} />
          </div>
        </Bounce>
      }
    />
    <section id="features" className="py-20 lg:pb-40 lg:pt-24 bg-primeBlue-dark ">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl lg:text-7xl font-semibold text-white">Class Times</h2>
        <div className="flex flex-col md:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Flip left>
              <Card className="mb-8 bg-white ">
                <img src={kidsImg} alt="Kids Sparring" className="h-64 w-full object-contain" />
                <p className="font-semibold text-4xl">Mondays</p>
                <p className="mt-4">
                  <span className="font-bold">5-6yrs old</span> 4:15pm-5:00pm
                </p>
                <p className="mt-4">
                  <span className="font-bold">Beginners 7-11yrs</span> 5:00pm-6:00pm
                </p>
                <p className="mt-4">
                  <span className="font-bold">Intermediate and Advanced 7-11yrs</span> 6:00pm-7:00pm
                </p>
                <p className="mt-4">
                  <span className="font-bold">Teens and Adults 12yrs & up</span> 7:00pm-8:00pm
                </p>
              </Card>
            </Flip>
          </div>
          <div className="flex-1 px-3">
            <Flip left>
              <Card className="mb-8 bg-white">
                <img src={katasImg} alt="Adult Punching" className="h-64 w-full object-contain" />

                <p className="font-semibold text-4xl">1st and 3rd Tuesdays</p>
                <p className="mt-4">
                  <span className="font-bold">Begginers Kids KATAS</span>
                </p>
                <p>
                  <span className="font-bold">group 1</span> 4:30pm-5:00pm
                </p>
                <p>
                  <span className="font-bold">group 2</span> 5:00pm-5:30pm
                </p>
                <p className="mt-4 font-bold">Intermediate and Advanced Kids</p>
                <p>
                  <span className="font-bold">group 1</span> 5:30pm-6:00pm
                </p>
                <p>
                  <span className="font-bold">group 2</span> 6:00pm-6:30pm
                </p>
                <p className="mt-4">
                  <span className="font-bold">Teens and Adults All Ranks</span> 8:00pm- 9:00pm
                </p>
              </Card>
            </Flip>
          </div>
        </div>
      </div>
    </section>
    {/* <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
      <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
      <div className="flex flex-col md:flex-row md:-mx-3">
      {customerData.map(customer => (
        <div key={customer.customerName} className="flex-1 px-3">
        <CustomerCard customer={customer} />
        </div>
        ))}
        </div>
        </div>
      </section> */}
    <section
      id="contact"
      className="container mx-auto my-20 bg-black text-white rounded-lg text-center "
    >
      <h1 className="text-white text-5xl font-bold">Contact Form</h1>
      <Contact />
    </section>
    <section id="stats" className="py-20 lg:pb-40 lg:pt-12 hidden md:block">
      <TractFlipper width={800} />
    </section>
  </Layout>
);
