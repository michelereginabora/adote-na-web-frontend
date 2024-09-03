import React from 'react';
import Header from '../components/LandingPage/Header';
import AboutUs from '../components/LandingPage/AboutUs';
import Features from '../components/LandingPage/Features';
import Footer from '../components/LandingPage/Footer';
import Section from '../components/LandingPage/Section';
import Statistic from '../components/LandingPage/Statistic';
import { createGetAnimalsUseCase } from '../../main/factories/UseCaseFactory';
import AnimalCarousel from '../components/LandingPage/AnimalMatch/AnimalCarousel';
import { MenuProvider } from '../contexts/MenuContext';


const HomePage: React.FC = () => {
  const getAnimalsUseCase = createGetAnimalsUseCase();

  return (
    <MenuProvider>
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
        <div id="animals">
          <AnimalCarousel getAnimalsUseCase={getAnimalsUseCase} />
        </div>
        <div id="section">
          <Section />
        </div>
        <Footer />
      </div>
    </MenuProvider>
  );
};

export default HomePage;
