import PaymentForm from '@/components/payment/PaymentForm';
import { FC } from 'react';

const PaymentPage: FC = () => {
  return (
    <section className="container">
      <div className="mx-auto my-12 mt-[100px] max-w-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold">Payment Details</h2>
        <p className="text-sm text-gray-600">
          You have picked <b>Effotel By Sayaji Jaipur</b> and base price is{' '}
          <b>$10</b>
        </p>
        <PaymentForm />
      </div>
    </section>
  );
};

export default PaymentPage;
