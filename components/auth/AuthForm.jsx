'use client';

import { useState } from 'react';

const AuthForm = ({ type }) => {
  const [error, setError] = useState(false);
  const handleAuthRequest = async (bodyData) => {
    setError(false);
    try {
      const response = await fetch(`/api/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      setError(true);
      return err;
    }
  };

  const onAuthSuccess = (resData) => {
    const token = {
      token: resData.token,
    };

    localStorage.setItem('token', JSON.stringify(token));
    window.location.href = '/dashboard';
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    switch (type) {
      case 'login':
        const loginCredentials = { username, password };
        const loginResponse = await handleAuthRequest(loginCredentials);
        if (loginResponse.token) {
          onAuthSuccess(loginResponse);
        } else {
          setError(true);
        }
        break;
      case 'register':
        const email = e.target.email.value;
        const registerCredentials = { email, username, password };
        const registerResponse = await handleAuthRequest(registerCredentials);
        if (registerResponse.token) {
          onAuthSuccess(registerResponse);
        } else {
          setError(true);
        }
        break;

      default:
        setError(true);
        console.warn('Unsupported auth type');
        break;
    }
  };
  return (
    <section className="bg-brand-card mx-auto my-4 flex w-[min(100%,theme(maxWidth.md))] flex-col gap-5 rounded-md p-4">
      <h1 className="text-center text-4xl font-bold">
        {type && type.at(0).toUpperCase() + type.slice(1)}
      </h1>
      <form onSubmit={onSubmitHandler} className="flex w-full flex-col gap-3">
        {type === 'register' && (
          <div className="flex w-full flex-col gap-1 px-1">
            <label htmlFor="email" className="text-lg font-bold">
              Email
            </label>
            <input
              className="shadow-brand-primary focus:shadow-brand-secondary bg-brand-card text-brand-highlight placeholder:text-brand-highlight/60 w-full p-2 font-bold shadow-md focus:shadow-lg focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
        )}
        <div className="flex w-full flex-col gap-1 px-1">
          <label htmlFor="username" className="text-lg font-bold">
            Benutzername
          </label>
          <input
            className="shadow-brand-primary focus:shadow-brand-secondary bg-brand-card text-brand-highlight placeholder:text-brand-highlight/60 w-full p-2 font-bold shadow-md focus:shadow-lg focus:outline-none"
            type="text"
            name="username"
            id="username"
            placeholder="Benutzername"
            minLength={3}
            required
          />
        </div>
        <div className="flex w-full flex-col gap-1 px-1">
          <label htmlFor="password" className="text-lg font-bold">
            Passwort
          </label>
          <input
            className="shadow-brand-primary focus:shadow-brand-secondary bg-brand-card text-brand-highlight placeholder:text-brand-highlight/60 w-full p-2 font-bold shadow-md focus:shadow-lg focus:outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Passwort"
            minLength={8}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-brand-secondary hover:bg-brand-primary shadow-brand-primary hover:shadow-brand-secondary mt-2 mb-2 ml-1 w-fit place-self-start rounded-md px-7 py-2 font-bold shadow-md transition-colors duration-1000 ease-in-out active:scale-95 active:shadow-none">
          {type === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
      {error && (
        <h2 className="text-brand-error place-self-center font-bold">
          {type === 'login'
            ? 'Login fehlgeschlagen, bitte überprüfe deine Eingaben'
            : 'Registrierung fehlgeschlagen, bitte überprüfe deine Eingaben'}
        </h2>
      )}
    </section>
  );
};

export default AuthForm;
