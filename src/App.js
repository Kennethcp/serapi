import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import CowRegistrationPage from './pages/CowRegistrationPage';
import HomeNoSapiPage from './pages/HomeNoSapiPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import DashboardPage from './pages/DashboardPage';
import HelpPage from './pages/HelpPage';
import WithdrawalOfFundsPage from './pages/WithdrawalofFunds';
import ManageCowsPage from './pages/ManageCowsPage';
// import InvestmentReport from './pages/InvestmentReportPage';
import SuccessPage from './pages/SuccessRegistrationPage';
import UserPage from './pages/UserPage';
import Settings from './pages/settings';
import ManageCowsDetailed from './pages/manageCowDetailed';
import UserPageNoCow from './pages/userPageNoCow';
import Home from './pages/Home';

function Layout({ children, isAuthenticated, onLogout }) {
  const location = useLocation();
  
  return (
    <div>
      {location.pathname !== "/" && <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />}
      {children}
    </div>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === email);
      if (user) setCurrentUser(user);
    }
  }, []);

  const saveUserData = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === userData.email ? { ...user, ...userData } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleLogin = (email) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email) || { email, isAuthenticated: true, hasCows: false, acceptedTerms: false, registrationComplete: false };
    setCurrentUser(user);
    localStorage.setItem("userEmail", email);

    if (!users.find((u) => u.email === email)) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      saveUserData({ ...user, isAuthenticated: true });
    }
  };

  const handleLogout = () => {
    if (currentUser) saveUserData({ ...currentUser, isAuthenticated: false });
    setCurrentUser(null);
    localStorage.removeItem("userEmail");
  };

  const handleRegisterCows = () => {
    const updatedUser = { ...currentUser, hasCows: true };
    setCurrentUser(updatedUser);
    saveUserData(updatedUser);
  };

  const handleAcceptTerms = () => {
    const updatedUser = { ...currentUser, acceptedTerms: true };
    setCurrentUser(updatedUser);
    saveUserData(updatedUser);
  };

  const handleDisagreeTerms = () => {
    const updatedUser = { ...currentUser, acceptedTerms: false };
    setCurrentUser(updatedUser);
    saveUserData(updatedUser);
  };

  const handleCompleteRegistration = () => {
    const updatedUser = { ...currentUser, registrationComplete: true };
    setCurrentUser(updatedUser);
    saveUserData(updatedUser);
  };

  return (
    <Router>
      <Layout isAuthenticated={currentUser?.isAuthenticated} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route 
            path="/no-cows" 
            element={
              currentUser?.isAuthenticated ? 
                (currentUser.hasCows ? <Navigate to="/dashboard" /> : <HomeNoSapiPage />) 
              : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/register-cow" 
            element={
              currentUser?.isAuthenticated ? 
                (currentUser.hasCows ? <Navigate to="/dashboard" /> : <CowRegistrationPage onRegisterCows={handleRegisterCows} />) 
              : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/terms-conditions" 
            element={
              currentUser?.isAuthenticated && currentUser.hasCows && !currentUser.acceptedTerms ? 
                <TermsConditionsPage onAcceptTerms={handleAcceptTerms} onDisagreeTerms={handleDisagreeTerms} /> 
              : <Navigate to="/regist-success" />
            } 
          />
          <Route 
            path="/regist-success" 
            element={
              currentUser?.isAuthenticated && currentUser.hasCows && currentUser.acceptedTerms ? 
                (currentUser.registrationComplete ? <Navigate to="/dashboard" /> : <SuccessPage onCompleteRegistration={handleCompleteRegistration} />) 
              : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              currentUser?.isAuthenticated && currentUser.hasCows && currentUser.acceptedTerms && currentUser.registrationComplete ? 
                <DashboardPage /> 
              : <Navigate to={currentUser?.isAuthenticated ? (currentUser.hasCows ? "/terms-conditions" : "/no-cows") : "/login"} />
            } 
          />
          <Route path="/dashboard-dev" element={<DashboardPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/withdrawal-of-funds" element={<WithdrawalOfFundsPage />} />
          <Route path='/manage-cows' element={<ManageCowsPage />} />
          {/* <Route path='/investment-report' element={<InvestmentReport />} /> */}
          <Route path='/userpage' element={<UserPage />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/managecowdetailed' element={<ManageCowsDetailed />} />
          <Route path='/dashboardnav' element={<DashboardPage />} />
          <Route path="/userpagenocow" element={<UserPageNoCow />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
