

import React, { useState } from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  loginContainer: {
    backgroundColor: 'lightblue',
    background: 'transparent',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },

  label: {
    display: 'block',
    marginBottom: '8px',
  },

  input: {
    width: '100%',
    borderRadius: '50px',
    padding: '8px',
    marginBottom: '16px',
    boxSizing: 'border-box',
  },

  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

function Logins() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Replace this with your actual login logic
    if (formData.username && formData.password) {
      alert('Login successful!');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <>
      <div style={styles.body}>
        <div style={styles.loginContainer}>
          <h2>Login</h2>
          <form>
            <label style={styles.label} htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              style={styles.input}
              required
            />

            <label style={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={styles.input}
              required
            />

            <button type="button" onClick={handleLogin} style={styles.button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Logins;
