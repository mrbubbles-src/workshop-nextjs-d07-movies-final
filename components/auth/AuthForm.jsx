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
    <section>
      <h1>{type && type.at(0).toUpperCase() + type.slice(1)}</h1>
      <form onSubmit={onSubmitHandler}>
        {type === 'register' && (
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="username">Benutzername</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Benutzername"
            minLength={3}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Passwort</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Passwort"
            minLength={8}
            required
          />
        </div>
        <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
      </form>
      {error && (
        <h2 className="font-bold text-red-600">
          {type === 'login'
            ? 'Login fehlgeschlagen, bitte überprüfe deine Eingaben'
            : 'Registrierung fehlgeschlagen, bitte überprüfe deine Eingaben'}
        </h2>
      )}
    </section>
  );
};

export default AuthForm;
