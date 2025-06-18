import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import BackToTopButton from '../src/components/BackToTopButton';
import BackgroundEffects from './setting/util/BackgroundEffects';

// Pages
import HomePage from './pages/HomePage';
import Game01 from './pages/Game01';
import Game02 from './pages/Game02';

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="relative min-h-screen overflow-hidden">
        <BackgroundEffects /> {/* Hiệu ứng nền toàn cục */}
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/snake-game" element={<Game01 />} />
          <Route path="/caro-games" element={<Game02 />} />
        </Routes>
      </div>
    </Suspense>
  );
}
