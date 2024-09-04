import React from 'react';
import { Link } from 'react-router-dom';

const LoginButtonMobile: React.FC = () => (
  <div className="mt-4">
    <Link
      to="emconstrucao"
      className="block w-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-sm font-semibold leading-6 py-3 px-6 rounded-md shadow-md hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-primary-light)] transition duration-300 ease-in-out"
    >
      Entrar
    </Link>
  </div>
);

export default LoginButtonMobile;
