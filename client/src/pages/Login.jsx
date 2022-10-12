// import React, { useEffect, useState} from 'react';
// import { useNavigate} from 'react-router';
// import axios from 'axios';
// import { browserName, browserVersion } from 'react-device-detect';
// import bcrypt from 'bcryptjs';
// import '../loginPage.css';
// const createDOMPurify = require('dompurify');
// const DOMPurify = createDOMPurify(window);
// const parse = require('html-react-parser');
// const basicAuth = require('express-basic-auth');
// import jwt from 'jsonwebtoken';
// // import { useAuth0 } from '@auth0/auth0-react';


// // SALT should be created ONE TIME upon sign up
// const salt = bcrypt.genSaltSync(10)
// // example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash


// function Login(props) { 
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [saveState, setSaveState] = useState([]);
//   const [checkName, setCheckName] = useState('');
//   const [checkPassword, setCheckPassword] = useState([]);
//   let data = "Hello!<img src='unicorns.png' onerror='alert(1)'>";
//   // const { loginWithRedirect, isAuthenticated } = useAuth0();

// const Dashboard = () => {
//   const history = useNavigate();

//   async function populateQuote() {
//     const req = await fetch('/api/quote', {
//       headers: {
//           'x-access-token': localStorage.getItem('token')
//       }
//     })
//     const data = req.json()
//     console.log(data)
//   }

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const user = jwt.decode(token);
//       if (!user) {
//         localStorage.removeItem('token');
//         history.replace.href = '/state';
//       } else {
//         populateQuote();
//       }
//     }
//   }, [Dashboard]);

//   return <h1>Hello World</h1>
// }

//   const password = ""

//   const hashedPassword = bcrypt.hashSync(
//     password, '$2a$10$CwTycUXWue0Thq9StjUM0u'
//   ); // hash created previously created upon sign up

//   const navigate = useNavigate();

//   const GetSaveState = () => {
//     axios
//       .get('http://localhost:3001/state', {
//         //  .get('https://thesacredcurse.herokuapp.com/state', {
//         //  .get('https://www.sacredcurse.com/state', {
//         headers: {
//           'x-rapidapi-key': process.env.APIKEY1,
//         }
//       })
//       .then((res) => {
//         setSaveState(res.data);
//         setCheckName(res.data[0].userName);
//         setCheckPassword(res.data[0].password);
//         // console.log('STATE', res.data);
//         // console.log('HASHED PASSWORD', hashedPassword);
//       })
//       .catch((err) => console.log(err)); 
//   };

//   useEffect(() => {
//     GetSaveState();
//   }, [isSubmitted, errorMessages]);

//   //  console.log("SAVE STATE", saveState)

//   // User Login info
//   const database = [
//     {
//       username: checkName,
//       password: checkPassword,
//     },
//   ];

//   // const database = [
//   //   {
//   //     username: checkName,
//   //     password: checkPassword,
//   //   },
//   //   // {
//   //   //   username: 'user2',
//   //   //   password: 'pass2',
//   //   // },
//   // ];

//   const errors = {
//     uname: 'invalid username',
//     pass: 'invalid password',
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();
//     var { uname, pass } = document.forms[0];
//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: 'pass', message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//         // // Redirect to a certain page
//         // window.location.href = '/state';
//         setTimeout(() => {
//           navigate('/game');
//         }, 3000);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: 'uname', message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // Logic for checking Browser type
//   const [browserWarning, setBrowserWarning] = useState(false);

//   useEffect(() => {
//     browserName !== 'Chrome' &&
//     browserName !== 'Safari' &&
//     browserName !== 'Mobile Safari' &&
//     browserName !== 'Mobile Chrome'
//       ? setBrowserWarning(true)
//       : null;
//   }, []);

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label className="otherText">Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage('uname')}
//         </div>
//         <div className="input-container">
//           <label className="otherText">Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage('pass')}
//         </div>
//         <div className="button-container">
//           <input type="submit" value="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <>
//       {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}></div> */}
//       {/* !isAuthenticated && (<button onClick={() => loginWithRedirect()} style={{padding: "60px"}}>Sign In</button>)

//       isAuthenticated && (
//              <button onClick={() => logout()}>
//                 Sign Out
//              </button>
//         ) */}
//       <div className="containerLogin">
//         {browserWarning === true ? (
//           <h1
//             style={{
//               fontSize: '30px',
//               color: 'white'
//             }}>{`This browser is incompatible with this game. Please use Google Chrome or Safari.`}</h1>
//         ) : (
//           <div className="fade-in">
//             <h1 className="titleTextLogin">Sacred Curse</h1>
//             <div className="darkSkyGif"></div>
//             <div className="darkSkyPic"></div>
//             <div className="wholeContainer">
//               <div className="app">
//                 <div className="login-form">
//                   <div className="title">Log In</div>
//                   {isSubmitted ? (
//                     <div className="otherText">User is successfully logged in</div>
//                   ) : (
//                     renderForm
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Login;






/////////////////////////////////////////////////////////////////////








import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { browserName, browserVersion } from 'react-device-detect';
import bcrypt from 'bcryptjs';
import '../loginPage.css';
const createDOMPurify = require('dompurify');
const DOMPurify = createDOMPurify(window);
const parse = require('html-react-parser');
const basicAuth = require('express-basic-auth');
import jwt from 'jsonwebtoken';
import { useAuth0 } from '@auth0/auth0-react';


function Login(props) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [saveState, setSaveState] = useState([]);
  const [checkEmail, setCheckEmail] = useState('');
  const [checkSubID, setCheckSubID] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [subID, setSubID] = useState('');

  const [tempSubID, setTumpSubID] = useState('')

  const [execute, setExecute] = useState(false);

  const navigate = useNavigate();

  //Get request
  // const GetSaveState = () => {
  //   axios
  //     .get('http://localhost:3001/state', {
  //       //  .get('https://thesacredcurse.herokuapp.com/state', {
  //       //  .get('https://www.sacredcurse.com/state', {
  //     })
  //     .then((res) => {
  //       setSaveState(res.data);
  //       setCheckEmail(res.data[0].email);
  //       setCheckSubID(res.data[0].subID);
  //       console.log('STATE', res.data);
  //       // console.log('HASHED PASSWORD', hashedPassword);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   GetSaveState();
  // }, []);


  // User Login info
  const database = [
    {
      email: checkEmail,
      subID: checkSubID
    }
  ];

  const errors = {
    email: 'invalid email',
    subID: 'invalid SubID'
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
        // // Redirect to a certain page
        // window.location.href = '/state';
        setTimeout(() => {
          navigate('/game');
        }, 3000);
      }
    } else {
      // Username not found
      setErrorMessages({ email: 'uname', message: errors.email });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && <div className="error">{errorMessages.message}</div>;

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

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

 

     // POST Request for SaveState
 useEffect(() => { 
   if (isAuthenticated === true) {
    axios
      .get('http://localhost:3001/state', {})
      .then((res) => {
        setSaveState(res.data);
        setCheckEmail(res.data[0].email);
        setTumpSubID(user.sub);
        setCheckSubID(res.data[0].subID);
      })
      .catch((err) => console.log(err));

  
    if (checkSubID === tempSubID) {
      console.log('USER MATCHES');
    } else {
      axios
        .post('http://localhost:3001/state/new', {
          name: name,
          email: user.email,
          password: password,
          userName: user.nickname,
          subID: user.sub,
          currentMap: 'indoorHouse10',
          flowers: 0,
          quest1: false,
          quest2: false,
          quest3: false,
          quest4: false,
          timeStamp: ''
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
}
  },[isAuthenticated])

  console.log('CHECK SUB', checkSubID, tempSubID);

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}></div> */}

      {isAuthenticated ? (
        <button className="loadGame" onClick={() => logout()}>
          LOAD GAME
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
