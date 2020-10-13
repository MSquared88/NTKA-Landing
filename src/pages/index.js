import React from 'react';

//components
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import TractFlipper from '../components/TractFlipper';
// import StatsBox from '../components/StatsBox';
// import CustomerCard from '../components/CustomerCard';
// import LabelText from '../components/LabelText';

// import customerData from '../data/customer-data';
//pictures
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/AmericanFlag';
import MasterStarnes from '../components/images/Master_Starnes.jpg';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Welcome to North Texas Karate Academy
          </h1>
          <p className="text-xl lg:text-3xl mt-6 font-light">
            Karate or Martial Arts is not a sport as baseball, soccer or football. Karate is an art.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Classes</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Mondays & Thursdays </p>
              <p className="mt-4">
                4-6yrs old 4:00pm-4:45pm7-12yrs old All Ranks Adults 7:00pm-8:00pm
              </p>
              <p className="mt-4">7-12yrs old Beginner Kids 5:00pm-5:45pm</p>
              <p className="mt-4">intermedate and Advanced Kids 6:00pm-7:00pm</p>
              <p className="mt-4">All Ranks Adults 7:00pm-8:00pm</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Tuesdays</p>
              <p className="mt-4">7-12yrs old KATAS (Orange, Green and Blue Belts) 6:00pm-7:00pm</p>
              <p className="mt-4">
                7-12yrs old KATAS (Purple, Brown, Red and Black Belts) 7:00pm-8:00pm
              </p>
              <p className="mt-4">All Adult Ranks 8:00pm- 9:00pm</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="About"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">About Us</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            In Karate an individual will learn Disipline, Respect for themselves and others,
            improving their self-esteem and give them the courage to overcome the everday obstacles
            they face. The classes incorporate a balance of hard work and fun to keep the students
            highly motivated and interested in learning the arts of karate for years to come. Karate
            is a contact art!!!
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl- flex-col ">
          <h3 className="text-3xl font-semibold leading-tight">Our Instructor</h3>
          <p className="mt-8 text-2xl font-light leading-relaxed">
            Stephen began training in the Martial Arts at age 7 in Shin-Toshi Karate in 1985 and
            received his gold belt. In 1987 at age 9 he started training in American Karate with Mr.
            Darrel Sanders at North Texas Karate in Bridgeport , Texas. Stephen recieved his 1st
            degree black belt at age 12. Stephen taught karate throughout his teenage years for Mr.
            Sanders. Presently, Stephen is continuing to train under Mr. Billy Smith 10th degree
            black belt in South Ft.Worth.
          </p>
        </div>
      }
      secondarySlot={<img src={MasterStarnes} />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
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
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <form>
        <input />
      </form>
    </section>
    <section id="stats" className="py-20 lg:pt-32">
      <TractFlipper />
    </section>
  </Layout>
);
