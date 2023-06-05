import React from 'react';

import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

// components
import About from '../components/About';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import TractFlipper from '../components/TractFlipper';
import Contact from '../components/Contact';

// pictures
import MasterStarnes from '../components/images/Master_Starnes.jpg';
import kidsImg from '../components/images/kids.svg';
import katasImg from '../components/images/Katas.svg';

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
            className="h-full object-contain drop-shadow-small"
            alt="North Texas Karate Academy Logo "
          />
        </div>
        <div className="text-center w-full md:w-3/5 lg:text-left ">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-none w-full">
            Welcome to North Texas Karate Academy
          </h1>
          <p className="text-xl text-white lg:text-4xl mt-6 font-light">
            Karate or Martial Arts is not a sport as baseball, soccer or football. Karate is an art.
          </p>
        </div>
      </div>
    </section>
    <About />
    <div className="custom-shape-divider-top-1629923985">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"
        />
      </svg>
    </div>
    <section id="features" className="py-20 lg:pb-40 lg:pt-24 bg-primeBlue-dark ">
      <div className="container mx-auto text-center">
        <h2
          className="text-6xl lg:text-8xl  font-semibold text-white"
          style={{ textShadow: '4px 4px #000000' }}
        >
          Class Times
        </h2>
        <div className="flex flex-col md:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Flip left>
              <Card className="mb-8 bg-white ">
                <img src={kidsImg} alt="Kids Sparring" className="h-64 w-full object-contain" />
                <p className="font-semibold text-4xl">Mondays / Thursdays</p>

                <p className="mt-4">
                  <span className="font-bold">(MONDAYS ONLY) Beginner 6yr olds</span> 4:15pm-5:00pm
                </p>
                <p className="mt-4">
                  <span className="font-bold">Beginner 7-11yrs old</span> 5:00pm-6:00pm
                </p>
                <p className="mt-4">
                  <span className="font-bold">Intermediate and Advanced 7-11yrs old</span>{' '}
                  6:00pm-7:00pm
                </p>
                <p className="mt-4">
                  <span className="font-bold">Teens and Adults 12yrs old & up</span> 7:00pm-8:00pm
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
    <div className="custom-shape-divider-top-1629925184">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          className="shape-fill"
        />
      </svg>
    </div>
    <section id="instructor" className="py-10 px-3 lg:px-10 lg:pb-40 lg:pt-2">
      <Bounce left>
        <div className="flex flex-col items-center justify-center">
          <img alt="Master Stephen Starnes" className="w-full lg:w-2/6" src={MasterStarnes} />
        </div>
      </Bounce>
      <Bounce right>
        <div className="lg:pl-3 flex-col">
          <h3 className="text-4xl font-bold leading-tight">Our Instructor</h3>
          <p className="instructorP">
            Stephen E. Starnes started his martial arts training in 1985 with Richard Shofitt at
            Denton Academy of martial arts. And I 1987 began training at North Texas Karate in
            Bridgeport Texas and earned his 1st degree black belt rank at age 12 from instructor
            Darrell Sanders under the J. Pat Burleson American Karate system. J. Pat Burleson was
            the first United States Karate Champion. Mr. Starnes competed for years as a teenager
            and young adult in many tournaments placing first place in katas and sparring . In 1992
            Mr. Starnes because the grand champion in the Advanced Boys 15-17 year old Sparring.
          </p>
          <div className="divide-y-2 divide-dashed md:divide-solid" />

          <p className="instructorP">
            In 1997 Mr. Starnes moved from Bridgeport Texas area to DFW area and trained at several
            different dojos. In 1998 Mr. Starnes began training with Grandmasters Billy Smith, Steve
            Parks and Billy Brammer still under the J. Pat Burleson Karate System.
          </p>
          <p className="instructorP">
            In 2006 Mr. Starnes returned to the Bridgeport area. Mr. Sanders had retired from
            teaching and had closed North Texas Karate. So in November 2006 Mr. Starnes reopened
            North Texas Karate under North Texas Karate Academy from the ground up.
          </p>
          <p className="instructorP">
            Currently, Mr . Starnes holds a 9th Degree Black belt in American Karate and Tae Kwon
            Do. And a 1st Degree Black Belt in Japanese Kobubo weapons. Mr.. Starnes continues his
            upline under Mr. Billy Smith 10th degree black belt and Keith D Yates 10th Degree Black
            belt.
          </p>
          <p className="instructorP">
            Mr. Starnes Black Belt rank is recognized under the J. Pat Burleson system World Martial
            Art Ranking Association and the American Karate And Tae Kwon Do Organization under Keith
            D. Yates.
          </p>
        </div>
        <div>
          <p className="instructorCategory">Mr. Starnes is a member of.</p>

          <p className="instructorAch">AKATO American Karate and Tae Kwon Do Organization</p>
          <hr className="spacer" />

          <p className="instructorAch">World Martial Art Ranking Association</p>
          <hr className="spacer" />

          <p className="instructorAch">AKBBA American Karate Black Belt Association</p>
          <hr className="spacer" />

          <p className="instructorAch">GMAU Gospel Martial Art Union</p>

          <p className="instructorCategory">His other Achievements</p>

          <p className="instructorAch">2014 USA Martial Arts Hall of Fame inductee</p>
          <hr className="spacer" />

          <p className="instructorAch">2016 Masters Hall of Fame inductee</p>
          <hr className="spacer" />

          <p className="instructorAch">2018 Universal Martial Arts Hall of Fame inductee</p>
          <hr className="spacer" />

          <p className="instructorAch">2021 United States Martial Arts Hall of Fame inductee</p>
          <hr className="spacer" />

          <p className="instructorAch">
            2020 Received the Grandmaster Billy Brammer Black Belt lineage Book started in 1961.
            Passed down from Billy Brammer to Billy Smith to Stephen Starnes.
          </p>
          <hr className="spacer" />

          <p className="instructorAch">2021 United States Martial Arts Hall of Fame inductee</p>
          <hr className="spacer" />

          <p className="instructorAch">
            2015 Received the 60s, 70s, 80s, 90s Jr. Black Belt Award from the Houston Sport Karate
            Museum
          </p>
          <hr className="spacer" />

          <p className="instructorAch">
            2021 Received the Billy Brammer Fighter Memorial Award for Houston Sport Karate Museum
          </p>
          <p className="instructorCategory">
            Mr. Starnes has over 50 black belt students under him currently.
          </p>
        </div>
      </Bounce>
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
