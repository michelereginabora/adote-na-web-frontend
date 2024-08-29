import React from 'react';
import Header from '../components/LandingPage/Header';
import AboutUs from '../components/LandingPage/AboutUs';
import Features from '../components/LandingPage/Features';
import Footer from '../components/LandingPage/Footer';
import Section from '../components/LandingPage/Section';
import Statistic from '../components/LandingPage/Statistic';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="statistic">
        <Statistic />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="section">
        <Section />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
