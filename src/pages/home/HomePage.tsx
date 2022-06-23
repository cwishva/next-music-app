import PageLayout from '@components/layouts/PageLayout';
import { useLayoutEffect, useState } from 'react';
import Search from '@pages/home/Search';

export default function AuthPage() {
  const [activeStep, setActiveStep] = useState(0);
  const incrementStep = () => setActiveStep(activeStep + 1);

  useLayoutEffect(() => {

  }, []);

  const steps = [
    <Search />
  ];

  return (
    <PageLayout
      pageTitle="Home"
      maxWidth={activeStep === steps.length - 1 ? 'lg' : 'sm'}
    >
      {steps[activeStep]}
    </PageLayout>
  );
}
