import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import IndustrySelection from './IndustrySelection';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'login' | 'industry'>('login');

  // Determine which screen to show based on user state
  React.useEffect(() => {
    if (user) {
      if (user.industry) {
        navigate('/dashboard');
      } else {
        setCurrentStep('industry');
      }
    } else {
      setCurrentStep('login');
    }
  }, [user, navigate]);

  if (currentStep === 'industry') {
    return <IndustrySelection onIndustrySelected={() => navigate('/dashboard')} />;
  }

  return <Login onLoginSuccess={() => setCurrentStep('industry')} />;
};

export default Index;
