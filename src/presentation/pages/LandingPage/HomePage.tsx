import React from 'react';
import Header from '../../components/LandingPage/Header/Header';
import AboutUs from '../../components/LandingPage/About/AboutUs';
import Footer from '../../components/LandingPage/Footer/Footer';
import Statistic from '../../components/LandingPage/Statistic/Statistic';
import { createGetAnimalsUseCase } from '../../../main/factories/UseCaseFactory';
import AnimalCarousel from '../../components/LandingPage/AnimalMatch/AnimalCarousel';
import { MenuProvider } from '../../contexts/MenuContext';
import FeatureComponent from '../../components/LandingPage/Features/FeatureComponent';
import CommunitySection from '../../components/LandingPage/CommunitySection/CommunitySection';


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
          <FeatureComponent />
        </div>
        <div id="animals">
          <AnimalCarousel getAnimalsUseCase={getAnimalsUseCase} />
        </div>
        <div id="section">
          <CommunitySection />
        </div>
        <Footer />
      </div>
    </MenuProvider>
  );
};

export default HomePage;
