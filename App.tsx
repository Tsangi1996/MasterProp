import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Location from './components/Location';
import Process from './components/Process';
import Services from './components/Services';
import Sustainability from './components/Sustainability';
import DesignEthos from './components/DesignEthos';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Location />
        <Process />
        <Services />
        <Sustainability />
        <DesignEthos />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;