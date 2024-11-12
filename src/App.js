import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import CowRegistrationPage from './components/CowRegistrationPage';
import HomeNoSapiPage from './components/HomeNoSapiPage';
import TermsConditionsPage from './components/TermsConditionsPage';
import DashboardPage from './components/DashboardPage';
import HelpPage from './components/HelpPage';
import WithdrawalOfFundsPage from './components/WithdrawalofFunds';
import ManageCowsPage from './components/ManageCowsPage';
import InvestmentReport from './components/InvestmentReportPage';
import SuccessPage from './components/SuccessRegistrationPage';

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
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(() => JSON.parse(localStorage.getItem(`${email}_isAuthenticated`)) || false);
  const [hasCows, setHasCows] = useState(() => JSON.parse(localStorage.getItem(`${email}_hasCows`)) || false);
  const [acceptedTerms, setAcceptedTerms] = useState(() => JSON.parse(localStorage.getItem(`${email}_acceptedTerms`)) || false);
  const [registrationComplete, setRegistrationComplete] = useState(() => JSON.parse(localStorage.getItem(`${email}_registrationComplete`)) || false);

  useEffect(() => {
    if (email) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem(`${email}_isAuthenticated`, JSON.stringify(isAuthenticated));
      localStorage.setItem(`${email}_hasCows`, JSON.stringify(hasCows));
      localStorage.setItem(`${email}_acceptedTerms`, JSON.stringify(acceptedTerms));
      localStorage.setItem(`${email}_registrationComplete`, JSON.stringify(registrationComplete));
    }
  }, [email, isAuthenticated, hasCows, acceptedTerms, registrationComplete]);

  const handleLogin = (email) => {
    setEmail(email);
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setHasCows(false);
    setAcceptedTerms(false);
    setRegistrationComplete(false);
    localStorage.removeItem("userEmail");
    localStorage.removeItem(`${email}_isAuthenticated`);
    localStorage.removeItem(`${email}_hasCows`);
    localStorage.removeItem(`${email}_acceptedTerms`);
    localStorage.removeItem(`${email}_registrationComplete`);
    setEmail("");
  };

  const handleRegisterCows = () => setHasCows(true);
  const handleAcceptTerms = () => setAcceptedTerms(true);
  const handleCompleteRegistration = () => setRegistrationComplete(true);

  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route 
            path="/no-cows" 
            element={
              isAuthenticated ? 
                (hasCows ? <Navigate to="/dashboard" /> : <HomeNoSapiPage />) 
              : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/register-cow" 
            element={
              isAuthenticated ? 
                (hasCows ? <Navigate to="/dashboard" /> : <CowRegistrationPage onRegisterCows={handleRegisterCows} />) 
              : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/terms-conditions" 
            element={
              isAuthenticated && hasCows && !acceptedTerms ? 
                <TermsConditionsPage onAcceptTerms={handleAcceptTerms} /> 
              : <Navigate to="/regist-success" />
            } 
          />
          <Route 
            path="/regist-success" 
            element={
              isAuthenticated && hasCows && acceptedTerms ? 
                (registrationComplete ? <Navigate to="/dashboard" /> : <SuccessPage onCompleteRegistration={handleCompleteRegistration} />) 
              : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated && hasCows && acceptedTerms && registrationComplete ? 
                <DashboardPage /> 
              : <Navigate to={isAuthenticated ? (hasCows ? "/terms-conditions" : "/no-cows") : "/login"} />
            } 
          />
          <Route path="/dashboard-dev" element={<DashboardPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/withdrawal-of-funds" element={<WithdrawalOfFundsPage />} />
          <Route path='/manage-cows' element={<ManageCowsPage />} />
          <Route path='/investment-report' element={<InvestmentReport />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
