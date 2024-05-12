import { FC } from 'react';

const LoginForm: FC = () => {
  return (
    <form className="login-form">
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary mt-4 w-full">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
