import { useState } from 'react';
import HomePage from './components/HomePage';
import BasicsPage from './components/BasicsPage';
import OOPPage from './components/OOPPage';
import DSAPage from './components/DSAPage';
import CurriculumPage from './components/CurriculumPage';
import AdvancedDSAPage from './components/AdvancedDSAPage';
import CleanCodePage from './components/CleanCodePage';
import BestPracticesPage from './components/BestPracticesPage';

export type PageType = 'home' | 'basics' | 'oop' | 'dsa' | 'curriculum' | 'advanced-dsa' | 'clean-code' | 'best-practices';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'basics' && <BasicsPage onNavigate={setCurrentPage} />}
      {currentPage === 'oop' && <OOPPage onNavigate={setCurrentPage} />}
      {currentPage === 'dsa' && <DSAPage onNavigate={setCurrentPage} />}
      {currentPage === 'curriculum' && <CurriculumPage onNavigate={setCurrentPage} />}
      {currentPage === 'advanced-dsa' && <AdvancedDSAPage onNavigate={setCurrentPage} />}
      {currentPage === 'clean-code' && <CleanCodePage onNavigate={setCurrentPage} />}
      {currentPage === 'best-practices' && <BestPracticesPage onNavigate={setCurrentPage} />}
    </div>
  );
}
