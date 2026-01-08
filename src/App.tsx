import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ScrollToTop from './components/ScrollToTop';

import FloatingButtons from './components/FloatingButtons';

// Feature wrapper component to handle conditional footer logic
const AppContent = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  return (
    <div className="min-h-screen bg-bgLight antialiased selection:bg-primary selection:text-white flex flex-col">
      <FloatingButtons />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </main>
      {!isMenuPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
