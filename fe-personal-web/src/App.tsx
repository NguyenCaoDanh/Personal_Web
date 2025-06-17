import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import BackToTopButton from '../src/components/BackToTopButton';

// Auth Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BackToTopButton />
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
