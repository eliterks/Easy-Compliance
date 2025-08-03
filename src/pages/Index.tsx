import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Login from './Login';
import IndustrySelection from './IndustrySelection';
import Dashboard from './Dashboard';

const Index = () => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState<'login' | 'industry' | 'dashboard'>('login');

  // Determine which screen to show based on user state
  React.useEffect(() => {
    if (user) {
      if (user.industry) {
        setCurrentStep('dashboard');
      } else {
        setCurrentStep('industry');
      }
    } else {
      setCurrentStep('login');
    }
  }, [user]);

  if (currentStep === 'login') {
    return <Login onLoginSuccess={() => setCurrentStep('industry')} />;
  }

  if (currentStep === 'industry') {
    return <IndustrySelection onIndustrySelected={() => setCurrentStep('dashboard')} />;
  }

  return <Dashboard />;
};

export default Index;
