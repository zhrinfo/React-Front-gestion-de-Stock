import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <div>
        {/* Button that redirects to the login page */}
        <Link to="/login">
          <button>Go to Login</button>
        </Link>

        {/* Routes to show the Login page when /login is accessed */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
