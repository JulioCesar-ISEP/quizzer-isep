// App.jsx
import React, { useState } from 'react';
import QuizzerIsep from './QuizzerIsep';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import './styles/main.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState('cadeiras');
  const [userProgress, setUserProgress] = useState({ xp: 0, progress: 0 });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleProgressUpdate = (xp, progress) => {
    setUserProgress({ xp, progress });
  };

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
          onProgressUpdate={handleProgressUpdate}
          isDark={isDark}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;