import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import BackToTopButton from '../src/components/BackToTopButton';

// Pages
import HomePage from './pages/HomePage';
import Game01 from './pages/Game01';
import ListGames from './pages/ListGames';
export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BackToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />\
        <Route path="/list-games" element={<ListGames />} />
        <Route path="/game01" element={<Game01 />} />
      </Routes>
    </Suspense>
  );
}
