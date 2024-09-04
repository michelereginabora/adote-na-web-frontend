import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton: React.FC = () => (
  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    <Link
      to="emconstrucao"
      className="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-sm font-semibold leading-6 py-3 px-6 rounded-md shadow-md hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-primary-light)] transition duration-300 ease-in-out"
    >
      Entrar <span aria-hidden="true">&rarr;</span>
    </Link>
  </div>
);

export default LoginButton;
