import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import authService from './services/authService';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuthStatus = () => {
      if (authService.isAuthenticated()) {
        const userData = authService.getUserData();
        setIsLoggedIn(true);
        setUser(userData);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogin = userData => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <DashboardPage user={user} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
