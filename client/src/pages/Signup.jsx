import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '../signupPage.css';


function Signup() {
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  // POST Request for SaveState
  const updateState = () => {
    axios
      .post('http://localhost:3001/state/new', {
        name: name,
        email: email,
        password: password,
        userName: userName,
        currentMap: 'indoorHouse10',
        flowers: 0,
        quest1: false,
        quest2: false,
        quest3: false,
        quest4: false,
        timeStamp: '',
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    updateState();
  }, [submitted]);

  return (
    <div>
      <h1 className="titleTextSignup">Sacred Curse</h1>
      <div className="mainContainerSignup">
        <div className="form">
          <div>
            <h1>User Registration</h1>
          </div>

          {/* Calling to the methods */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>

          <form>
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
            />

            <label className="label">Email</label>
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
            />

            <label className="label">UserName</label>
            <input
              onChange={handleUserName}
              className="input"
              value={userName}
              type="username"
            />

            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
            />

            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;