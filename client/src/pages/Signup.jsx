import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { browserName, browserVersion } from 'react-device-detect';
import axios from 'axios';
import bcrypt from 'bcryptjs';
const createDOMPurify = require('dompurify');
const DOMPurify = createDOMPurify(window);
const parse = require('html-react-parser');
import '../signupPage.css';


// SALT should be created ONE TIME upon sign up
const salt = bcrypt.genSaltSync(10)
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash


function Signup() {
  const navigate = useNavigate();

  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  let data = "Hello!<img src='unicorns.png' onerror='alert(1)'>";

  const hashedPassword = bcrypt.hashSync(
    password,
    '$2a$10$CwTycUXWue0Thq9StjUM0u'
  ); // hash created previously created upon sign up


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
      setTimeout(() => {
        navigate('/game');
      }, 3000);
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
        // .post('https://thesacredcurse.herokuapp.com/state/new', {
        // .post('https://www.sacredcurse.com/state/new', {
        name: name,
        email: email,
        password: hashedPassword,
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

  // Logic for checking Browser type
  const [browserWarning, setBrowserWarning] = useState(false);

  useEffect(() => {
    browserName !== 'Chrome' &&
    browserName !== 'Safari' &&
    browserName !== 'Mobile Safari' &&
    browserName !== 'Mobile Chrome'
      ? setBrowserWarning(true)
      : null;
  }, []);

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}></div> */}
      <div className="containerSignup">
        {browserWarning === true ? (
          <h1
            style={{ fontSize: '30px', color: 'white' }}
          >{`This browser is incompatible with this game. Please use Google Chrome or Safari`}</h1>
        ) : (
          <div className="fade-in">
            <h1 className="titleTextSignup">Sacred Curse</h1>
            <div className="darkSkyGif"></div>
            {/* <div className="darkSkyPic"></div> */}
            <div className="cityline"></div>
            <div className="mainContainerSignup">
              <div className="submit-form">
                <div className="form">
                  <div>
                    <h1 className="otherTextSignupW">User Registration</h1>
                  </div>

                  {/* Calling to the methods */}
                  <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                  </div>

                  <form>
                    {/* Labels and inputs for form data */}
                    <label className="label otherTextSignup">Name</label>
                    <input
                      onChange={handleName}
                      className="input"
                      value={name}
                      type="text"
                    />

                    <label className="label otherTextSignup">Email</label>
                    <input
                      onChange={handleEmail}
                      className="input"
                      value={email}
                      type="email"
                    />

                    <label className="label otherTextSignup">UserName</label>
                    <input
                      onChange={handleUserName}
                      className="input"
                      value={userName}
                      type="username"
                    />

                    <label className="label otherTextSignup">Password</label>
                    <input
                      onChange={handlePassword}
                      className="input"
                      value={password}
                      type="password"
                    />

                    <button
                      onClick={handleSubmit}
                      className="btn"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Signup;