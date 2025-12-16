import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CategoriesGrid from './components/CategoriesGrid.jsx';
import Partners from './components/Partners.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

// Assurez-vous d'inclure les polices et la configuration Tailwind comme dans l'HTML original
// (ici, je suppose que vous avez configuré Tailwind et les Google Material Symbols)

const App = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main font-display antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CategoriesGrid />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;