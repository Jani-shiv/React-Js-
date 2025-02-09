import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Age = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleGreet = () => {
    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (isNaN(age)) {
      alert("Please enter a valid age.");
      return;
    }

    let message;
    if (age < 13) {
      message = `Hey, ${name}! You are a cute child.`;
    } else if (age >= 13 && age <= 19) {
      message = `Hi, ${name}! Welcome to teenagers!`;
    } else {
      message = `Hello, ${name} dear! You are an adult now.`;
    }
    setMessage(message);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Greeting App</h2>
      <form id="greetForm">
        <div className="form-group mb-3">
          <label for="name" className="form-label">
            Enter Your Name:
          </label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label for="age" className="form-label">
            Age:
          </label>
          <input type="number" className="form-control" id="age" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" id="greetButton" onClick={handleGreet}>
          Greet Me
        </button>
      </form>
      <div className="mt-3" id="message">
        {message && <div className="alert alert-info">{message}</div>}
      </div>
    </div>
  );
};

export default Age;