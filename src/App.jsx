import React, { useState, useCallback } from 'react';
import QuizzerIsep from './QuizzerIsep';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import './styles/main.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentView, setCurrentView] = useState('cadeiras');
  const [userProgress, setUserProgress] = useState({ xp: 0, progress: 0 });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // FIX: Use useCallback to memoize the progress update function
  const handleProgressUpdate = useCallback((xp, progress) => {
    setUserProgress({ xp, progress });
  }, []); // Empty dependency array means this function is created once

  return (
    <div className={`app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Header 
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentView={currentView}
        onNavigate={setCurrentView}
        user={{ name: 'Símio', xp: userProgress.xp }}
        xp={userProgress.xp}
        progress={userProgress.progress}
      />
      <main className="app-main-content">
        <QuizzerIsep 
          currentView={currentView}
          onViewChange={setCurrentView}
          onProgressUpdate={handleProgressUpdate} // Now this is stable
          isDark={isDark}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;