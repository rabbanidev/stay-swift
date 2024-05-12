import RegistrationForm from '@/components/auth/RegistrationForm';
import SocialLogins from '@/components/auth/SocialLogins';
import { FC } from 'react';

const RegistrationPage: FC = () => {
  return (
    <section className="grid h-screen place-items-center">
      <div className="mx-auto w-full max-w-[450px] rounded-md border border-gray-700/20 p-6">
        <h4 className="text-2xl font-bold">Sign up</h4>
        <RegistrationForm />
        <SocialLogins />
      </div>
    </section>
  );
};

export default RegistrationPage;
