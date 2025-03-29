import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the login data object
    const loginData = {
      username: username,
      password: password
    };

    // Send the data to the Spring backend
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData), // Send login data as JSON
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); // Handle response here
        alert('Login Successful');
      } else {
        alert('Login Failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label for="tab-1" className="tab">Sign In</label>
        <div className="login-form">
          <div className="sign-in-htm">
            <form onSubmit={handleSubmit}>
              <div className="group">
                <label for="user" className="label">Username</label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="group">
                <label for="pass" className="label">Password</label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
  