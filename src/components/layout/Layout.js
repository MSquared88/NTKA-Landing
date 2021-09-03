import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../images/logo.png';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="NTKA">
        <link rel="icon" href={favicon} />
        G-XGG52CH4ZQ
      </Helmet>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
