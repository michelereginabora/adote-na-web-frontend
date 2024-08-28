import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage';
import './index.css'; 
import PageUnderConstruction from './presentation/pages/PageUnderConstruction';


const App: React.FC = () => {
  // const getAnimalsUseCase = createGetAnimalsUseCase();

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/adote-na-web-frontend" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/adote-na-web-frontend/emconstrucao" element={<PageUnderConstruction backgroundImageSrc={'assets/cat.png'} />} />
          {/* <Route path="/adotar" element={<AdoptionPage getAnimalsUseCase={getAnimalsUseCase} />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;