import React, { useState, useCallback, useEffect } from 'react';
import AprendiFluxoShell from '@adapters/frontend/shell/AprendiFluxoShell';
import Header from '@adapters/frontend/components/ui/Header';
import ProfileSetupView from '@adapters/frontend/components/views/ProfileSetupView';
import { useUserProfile } from '@adapters/frontend/hooks/useUserProfile';
import { VIEWS } from '@shared/constants/branding';
import { readTheme, writeTheme } from '@infra/storage/storageKeys';
import '@adapters/frontend/styles/main.css';

function App() {
  const { profile, hasProfile, upsertProfile, error: profileError } = useUserProfile();

  const [isDark, setIsDark] = useState(() => {
    const stored = readTheme();
    return stored ? stored === 'dark' : true;
  });
  const [currentView, setCurrentView] = useState(() =>
    hasProfile ? VIEWS.SUBJECTS : VIEWS.PROFILE
  );
  const [userProgress, setUserProgress] = useState({ xp: 0, progress: 0 });

  useEffect(() => {
    writeTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleProgressUpdate = useCallback((xp, progress) => {
    setUserProgress({ xp, progress });
  }, []);

  const handleNavigate = useCallback(
    (viewId) => {
      if (viewId === 'profile') {
        setCurrentView(VIEWS.PROFILE);
        return;
      }
      if (viewId === 'cadeiras') {
        setCurrentView(VIEWS.SUBJECTS);
        return;
      }
      if (viewId === 'quiz') {
        setCurrentView(VIEWS.SURVIVAL);
        return;
      }
      setCurrentView(viewId);
    },
    []
  );

  const handleProfileSave = useCallback(
    (input) => {
      upsertProfile(input);
      setCurrentView(VIEWS.SUBJECTS);
    },
    [upsertProfile]
  );

  const handleHomeReset = useCallback(() => {
    setCurrentView(VIEWS.SUBJECTS);
  }, []);

  const showProfile = currentView === VIEWS.PROFILE || !hasProfile;

  return (
    <div className={`app aprendifluxo-app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Header
        isDark={isDark}
        toggleTheme={() => setIsDark((d) => !d)}
        currentView={currentView}
        onNavigate={handleNavigate}
        onBack={handleHomeReset}
        user={profile ? { name: profile.name } : null}
        xp={userProgress.xp}
        progress={userProgress.progress}
      />
      <main className="app-main-content">
        {showProfile ? (
          <ProfileSetupView
            initialProfile={profile}
            onSave={handleProfileSave}
            error={profileError}
          />
        ) : (
          <AprendiFluxoShell
            currentView={currentView}
            onViewChange={setCurrentView}
            onProgressUpdate={handleProgressUpdate}
            isDark={isDark}
          />
        )}
      </main>
    </div>
  );
}

export default App;
