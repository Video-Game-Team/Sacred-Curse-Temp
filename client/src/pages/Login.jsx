import React, { useEffect, useState} from 'react';
import { useNavigate} from 'react-router';
import axios from 'axios';
import { browserName, browserVersion } from 'react-device-detect';
import '../loginPage.css';


function Login(props) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [saveState, setSaveState] = useState([]);
  const [checkName, setCheckName] = useState("")
  const [checkPassword, setCheckPassword] = useState([]);

  const navigate = useNavigate();
  
   const GetSaveState = () => {
     axios
       // .get('http://localhost:3001/state')
       //  .get('https://thesacredcurse.herokuapp.com/state')
       .get('https://www.sacredcurse.com/Birn93Giff69InDaHouse69')
       .then((res) => {
         setSaveState(res.data);
         setCheckName(res.data[0].userName);
         setCheckPassword(res.data[0].password);
       })
       .catch((err) => console.log(err));
   };

   useEffect(() => {
     GetSaveState();
   }, [isSubmitted, errorMessages]);

  //  console.log("SAVE STATE", saveState)

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
        setTimeout(() => {
          navigate('/game');
        }, 3000)
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
          <input type="submit" value='submit' />
        </div>
      </form>
    </div>
  );

  return (
    <div className="containerLogin">
        {browserWarning === true ? 
         (<h1 style={{fontSize: "30px", color: 'white'}}>{`This browser is incompatible with this game. Please use Google Chrome or Safari.`}</h1>) :

      <div className="fade-in">
        <h1 className="titleTextLogin">Sacred Curse</h1>
        <div className="darkSkyGif"></div>
        <div className="darkSkyPic"></div>
        {/* <div className="cityline"></div> */}
        <div className="wholeContainer">
          <div className="app">
            <div className="login-form">
              <div className="title">Log In</div>
              {isSubmitted ? (
                <div className="otherText">User is successfully logged in</div>
              ) : (
                renderForm
              )}
            </div>
          </div>
        </div>
      </div>

      }
    </div>
  );
}

export default Login;
