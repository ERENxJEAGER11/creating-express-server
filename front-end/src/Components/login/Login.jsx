import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [darkTheme, setDarkTheme] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDarkThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login action
  };

  return (
    <div className={`login ${darkTheme ? 'dark' : ''}`}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Login</button>
      </form>

      <div className="theme-toggle">
        <label htmlFor="dark-theme-toggle">Dark theme:</label>
        <input
          type="checkbox"
          id="dark-theme-toggle"
          checked={darkTheme}
          onChange={handleDarkThemeChange}
        />
      </div>
    </div>
  );
}

export default Login;
