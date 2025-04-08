import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Certificates } from './components/Certificates'; // 👈 Add this

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates /> {/* 👈 Use it here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
