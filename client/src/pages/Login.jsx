import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '../loginPage.css';


function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [saveState, setSaveState] = useState([]);
  const [checkName, setCheckName] = useState("")
  const [checkPassword, setCheckPassword] = useState('');

   const GetSaveState = () => {
     axios
       .get('http://localhost:3001/state')
       .then((res) => {
         setSaveState(res.data);
         setCheckName(res.data[0].userName)
         setCheckPassword(res.data[0].password);
        //  console.log('Res;', res.data);
        //  console.log('UserName;', checkName);
        //  console.log('Password;', checkPassword);
       })
       .catch((err) => console.log(err));
   };

   useEffect(() => {
     GetSaveState();
   }, [isSubmitted, errorMessages]);

  // User Login info
  const database = [
    {
      username: checkName,
      password: checkPassword,
    },
  ];

    // const database = [
    //   {
    //     username: checkName,
    //     password: checkPassword,
    //   },
    //   // {
    //   //   username: 'user2',
    //   //   password: 'pass2',
    //   // },
    // ];

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="otherText">Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage('uname')}
        </div>
        <div className="input-container">
          <label className="otherText">Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage('pass')}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <h1 className="titleTextLogin">Sacred Curse</h1>
      <div className="wholeContainer">
        <div className="app">
          <div className="login-form">
            <div className="title">Log In</div>
            {isSubmitted ? (
              <div>User is successfully logged in</div>
            ) : (
              renderForm
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
