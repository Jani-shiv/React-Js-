import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Custom styles

const Login = () => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
<div className={`login-container d-flex align-items-center justify-content-center ${theme === 'dark' ? 'dark-mode' : ''}`}>
  <div className="login-box p-4">
    <h2 className="text-center mb-4 neon-text">Login</h2>
    <div className="theme-toggle mb-3">
      <i className={`bi bi-${theme === 'dark' ? 'sun' : 'moon'}`} onClick={toggleTheme} />
    </div>
    <form onSubmit={(e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      if (email && password) {
        alert('Thanks for signing in!');
      }
    }}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control futuristic-input" placeholder="example@example.com" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required title="Please enter a valid email address" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control futuristic-input" placeholder="Password (min 8 characters, 1 uppercase, 1 lowercase, 1 number)" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$" required title="Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter and one number" />
      </div>
      <button type="submit" className="btn btn-primary w-100 futuristic-btn">Sign In</button>
    </form>
  </div>
</div>
  );
};

export default Login;
