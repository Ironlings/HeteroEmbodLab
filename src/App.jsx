
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Engineering from './pages/Engineering';
import People from './pages/People';
import ProjectDetail from './pages/ProjectDetail';
import PersonDetail from './pages/PersonDetail';
import { AnimatePresence } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Footer = () => (
  <footer style={{
    padding: '3rem 0',
    borderTop: '1px solid var(--color-border)',
    marginTop: 'auto',
    backgroundColor: 'var(--color-bg-secondary)'
  }}>
    <div className="container" style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
      <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>HeteroEmbod Lab</p>
      <p style={{ fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} HKUST(GZ). All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/people" element={<People />} />
              <Route path="/research/:id" element={<ProjectDetail />} />
              <Route path="/engineering/:id" element={<ProjectDetail />} />
              <Route path="/people/:id" element={<PersonDetail />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
