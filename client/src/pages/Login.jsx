import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { browserName, browserVersion } from 'react-device-detect';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { useAuth0 } from '@auth0/auth0-react';
import '../loginPage.css';
const createDOMPurify = require('dompurify');
const DOMPurify = createDOMPurify(window);
const parse = require('html-react-parser');
const basicAuth = require('express-basic-auth');

//Main function
function Login(props) {
  //AXIOS retry logic
  axiosRetry(axios, { retries: 3 });

  //UseRef to stop Get request Useeffect from running on re-render
  const isMounted = useRef(false);

  //State for checking Broser compatibility
  const [browserWarning, setBrowserWarning] = useState(false);

  const [authTrigger, setAuthTrigger] = useState(false);

  //Email state and sessionStorage
  const [emailSessionStorage, setEmailSessionStorage] = useState('');
  useEffect(() => {
    const data = window.sessionStorage.getItem('email');
    setEmailSessionStorage(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('email', JSON.stringify(emailSessionStorage));
  }, [emailSessionStorage]);

  //Username state and sessionStorage
  const [userNameSessionStorage, setUserNameSessionStorage] = useState('');
  useEffect(() => {
    const data = window.sessionStorage.getItem('userName');
    setUserNameSessionStorage(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('userName', JSON.stringify(userNameSessionStorage));
  }, [userNameSessionStorage]);

  //userID state and sessionStorage
  const [userAuthSessionStorage, setUserAuthSessionStorage] = useState('');
  useEffect(() => {
    const data = window.sessionStorage.getItem('userID');
    setUserAuthSessionStorage(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('userID', JSON.stringify(userAuthSessionStorage));
  }, [userAuthSessionStorage]);

  const [triggerMe, setTriggerMe] = useState(false);

  //Navigate HashRouter Logic
  const navigate = useNavigate();

  // Logic for checking Browser type
  useEffect(() => {
    browserName !== 'Chrome' &&
    browserName !== 'Safari' &&
    browserName !== 'Mobile Safari' &&
    browserName !== 'Mobile Chrome'
      ? setBrowserWarning(true)
      : null;
  }, []);

  //Auth 0 logic
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  // GET Request for Checking to see if user exists or if we need to create a new database record for them
  useEffect(() => {
    if (isAuthenticated === true) {
      axios
        .get(
          `${process.env.APPJS_GET_REQUEST_ENDPOINT}/state`
          //  "https://www.sacredcurse.com/state",
        )
        .then((res) => {
          setEmailSessionStorage(user.email);
          setUserNameSessionStorage(user.nickname);
          setUserAuthSessionStorage(user.sub);
        })
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated]);

  //Clear TempQuest1 Storage Functions
  function clearTempQuest1() {
    sessionStorage.removeItem('tempQuest1');
    return '';
  }

  //Clear TempQuest2 Storage Functions
  function clearTempQuest2() {
    sessionStorage.removeItem('tempQuest2');
    return '';
  }

  //Clear TempQuest3 Storage Functions
  function clearTempQuest3() {
    sessionStorage.removeItem('tempQuest3');
    return '';
  }

  //Clear TempQuest4 Storage Functions
  function clearTempQuest4() {
    sessionStorage.removeItem('tempQuest4');
    return '';
  }

  //Clear TempUserName Storage Functions
  function cleartempUserName() {
    sessionStorage.removeItem('tempUserName');
    return '';
  }

  //Clear TempFlowers Storage Functions
  function clearTempFlowers() {
    sessionStorage.removeItem('tempFlowers');
    return '';
  }

  //Clear TempEmail Storage Functions
  function clearTempEmail() {
    sessionStorage.removeItem('tempEmail');
    return '';
  }

  //Clear TempSubID Storage Functions
  function clearTempSubID() {
    sessionStorage.removeItem('tempSubID');
    return '';
  }

  //Clear TempMongoID Storage Functions
  function clearTempMongoID() {
    sessionStorage.removeItem('tempMongoID');
    return '';
  }

  //Clear TempCurrentMap Storage Functions
  function clearCurrentMap() {
    sessionStorage.removeItem('CurrentMap');
    return '';
  }

  // Handleclick for Load Game
  const enterGame = () => {
    (isMounted.current = true),
      setAuthTrigger(true),
      clearTempQuest1(),
      clearTempQuest2(),
      clearTempQuest3(),
      clearTempQuest4(),
      cleartempUserName(),
      clearTempFlowers(),
      clearTempEmail(),
      clearTempSubID(),
      clearTempMongoID(),
      clearCurrentMap();
    setTimeout(() => {
      navigate('/game');
    }, 1000);
  };

  useEffect(() => {
    console.log;
    if (isMounted.current === true) {
      fetch(`${process.env.APPJS_GET_REQUEST_ENDPOINT}/state`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          auth: false
        })
      }).then((res) => res.json());
    }
  }, []);

  // PUT Request for updating Auth and unlocking state endpoint
  useEffect(() => {
    console.log;
    if (isMounted.current === true) {
      fetch(`${process.env.APPJS_GET_REQUEST_ENDPOINT}/state`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          auth: true,
          authID: user.sub,
        })
      }).then((res) => res.json());
    }
  }, [authTrigger]);

  // Return statement
  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}></div> */}

      {isAuthenticated ? (
        // <button className="enterGame" onClick={enterGame}>
        <button
          className="enterGame"
          onClick={() => {
            logout();
            enterGame();
          }}>
          ENTER SACRED CURSE
        </button>
      ) : (
        <button className="loginSignupButton" onClick={() => loginWithRedirect()}>
          Login / Signup
        </button>
      )}

      <div className="containerLogin">
        {browserWarning === true ? (
          <h1
            style={{
              fontSize: '30px',
              color: 'white'
            }}>{`This browser is incompatible with this game. Please use Google Chrome or Safari.`}</h1>
        ) : (
          <div className="fade-in">
            <h1 className="titleTextLogin">Sacred Curse</h1>
            <div className="darkSkyGif"></div>
            <div className="darkSkyPic"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
