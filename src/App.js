import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Blackjack from './pages/blackjack';
import Poker from './pages/poker';
import Rummy from './pages/rummy';
import Euchre from './pages/euchre';
import Bridge from './pages/bridge';
import Solitaire from './pages/solitaire';
import Spades from './pages/spades';
import GinRummy from './pages/gin-rummy';
import Contact from './pages/contact';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/blackjack" element={<Blackjack />} />
         <Route path="/poker" element={<Poker />} />
         <Route path="/rummy" element={<Rummy />} />
         <Route path="/euchre" element={<Euchre />} />
         <Route path="/bridge" element={<Bridge />} />
         <Route path="/solitaire" element={<Solitaire />} />
         <Route path="/spades" element={<Spades />} />
         <Route path="/gin-rummy" element={<GinRummy />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
     </Layout>
    </BrowserRouter>
  );
}

export default App;
