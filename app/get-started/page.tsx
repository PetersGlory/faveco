import GetStartedForm from '@/components/GetStartedForm';
import Navigation from '@/components/sections/Navigation';

export const metadata = {
  title: 'Get Started - Faveco Solar Solutions',
  description: 'Start your journey to clean solar energy with Faveco. Quick and easy onboarding process.',
};

export default function GetStartedPage() {
  return (
    <div>
      <Navigation />
      <GetStartedForm />
    </div>
  );
}
