import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './presentation/pages/LandingPage/HomePage';
import './index.css'; 
import PageUnderConstruction from './presentation/pages/PageUnderConstruction';


const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/emconstrucao" element={<PageUnderConstruction backgroundImageSrc={'assets/cat.webp'} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;