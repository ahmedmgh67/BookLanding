import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/BookLanding/Banner";
import Partner from "../components/BookLanding/Partner";
import Discover from "../components/BookLanding/Discover";
import Discover2 from "../components/BookLanding/Discover2";

import Features from "../components/BookLanding/Features";
// import Funfact from '../components/BookLanding/Funfact';
import Screenshot from "../components/BookLanding/Screenshot";
import Team from "../components/BookLanding/Team";
import Pricing from "../components/BookLanding/Pricing";
import Feedback from "../components/BookLanding/Feedback";
import Blog from "../components/BookLanding/Blog";
import Platform from "../components/BookLanding/Platform";
import Subscribe from "../components/BookLanding/Subscribe";
import FaqContent from "../components/Faq/FaqContent";
import BlogOne from "../components/Blog/BlogOne";
import AboutContent from "../components/BookLanding/AboutContent";
import Wartosci from "../components/BookLanding/Wartosci";
import Overview from "../components/BookLanding/Overview";
import Services from "../components/DigitalMarketing/Services";
import VirtualReality from "../components/ProductLanding/VirtualReality";
import CtaCard from "../components/About/CtaCard";
import Pricing2 from "../components/BookLanding/Pricing2";

export const finalPath = "";
class BookLanding extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <AboutContent />
        <Discover />
        <CtaCard />
        <Discover2 />
        {/* <Overview /> */}
        <Wartosci />
        <Features />
        {/* <Funfact /> */}
        <Screenshot />
        <VirtualReality />
        <Services />
        <Team />
        <Pricing2 />
        {/* <Pricing /> */}
        <Feedback />
        <Blog />
        <Subscribe />
        <FaqContent />
        <Platform />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BookLanding;
