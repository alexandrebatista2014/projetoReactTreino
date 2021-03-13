import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Sobre from './Sobre';
import Acomodacoes from './Acomodacoes';
import Lazer from './Lazer';
import Contato from './Contato';
import NaoEncontrada from './NaoEncontrada';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="Acomodacoes" element={<Acomodacoes />} />
        <Route path="Lazer" element={<Lazer />} />
        <Route path="Contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
