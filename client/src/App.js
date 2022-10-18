import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import LeftWalker from './assets/images/leftWalker.png';
import RightWalker from './assets/images/rightWalker.png';
import UpWalker from './assets/images/upWalker.png';
import DownWalker from './assets/images/downWalker.png';
import EmptyCanvas from './assets/images/newone.png';
import BackgroundImage1 from './assets/maps/map40x40wgrid.png';
import OutDoorMap1 from './components/maps/outdoor-map1';
import Indoormap1 from './components/maps/Indoor-map1';
import Indoormap2 from './components/maps/Indoor-map2';
import OutDoorMapFresh from './components/maps/outdoor-mapFresh.js';
import FarmMap from './components/maps/farmMap.js';
import TownMap1 from './components/maps/town1.js';
import TheWall from './components/maps/theWall.js';
import TrainTracksToTortous from './components/maps/trainTracksToTortous.js';
import TrainTracksToValley from './components/maps/trainTracksToValley.js';
import DunleaveyValley from './components/maps/dunleaveyValley.js';
import SaintAnna from './components/maps/saintAnna.js';
import MountainRoadTrainTracks from './components/maps/mountainRoadTrainTracks.js';
import MansonRanch from './components/maps/mansonRanch.js';
import MountainEntrance from './components/maps/mountainEntrance.js';
import Sigele from './components/maps/sigele.js';
import PresidentSafeHouse from './components/maps/presidentSafeHouse.js';
import RanchHouse1 from './components/maps/ranchHouse1.js';
import RanchHouse2 from './components/maps/ranchHouse2.js';
import SecretIndoorLakeHouse from './components/maps/secretIndoorLakeHouse.js';
import OldManCrawfordInside from './components/maps/oldManCrawfordInside.js';
import HotelIndoors from './components/maps/hotelIndoors.js';
import IndoorHouse1 from './components/maps/indoorHouse1.js';
import IndoorHouse2 from './components/maps/indoorHouse2.js';
import IndoorHouse3 from './components/maps/indoorHouse3.js';
import IndoorHouse4 from './components/maps/indoorHouse4.js';
import IndoorHouse5 from './components/maps/indoorHouse5.js';
import IndoorHouse6 from './components/maps/indoorHouse6.js';
import IndoorHouse7 from './components/maps/indoorHouse7.js';
import IndoorHouse8 from './components/maps/indoorHouse8.js';
import IndoorHouse9 from './components/maps/indoorHouse9.js';
import IndoorHouse10 from './components/maps/indoorHouse10.js';
import MountainTown from './components/maps/mountainTown.js';
import LuluMountainPass from './components/maps/luluMountainPass.js';
import LuluMountainPassRight from './components/maps/luluMountainPassRight.js';
import SaintAnnaHidden from './components/maps/saintAnnaHidden.js';
import TrainTracksToCapital from './components/maps/trainTracksToCapital.js';
import TortousTrainStation from './components/maps/tortousTrainStation.js';
import TrainTracksToSaintAnna from './components/maps/trainTracksToSaintAnna.js';
import TortousFork from './components/maps/tortousFork.js';
import Tortous from './components/maps/tortous.js';
import CrystalCaverns from './components/maps/crystalCaverns.js';
import CrystalCavernsRight from './components/maps/crystalCavernsRight.js';
import LoadingMap from './components/maps/loadingMap.js';
import Login from './pages/Login.jsx';

import DemoMap from './battleMaps/demoMap.jsx';
import DemonObjects from './demonObjects.js';

import Datetime from './components/maps/datetime.js';
import Clock from 'react-live-clock';
import { browserName, browserVersion } from 'react-device-detect';
import './App.css';
const createDOMPurify = require('dompurify');
const DOMPurify = createDOMPurify(window);
const parse = require('html-react-parser');
const URL = require('url-parse');



//Main function
function App(props) {
  //AXIOS retry logic
  axiosRetry(axios, { retries: 3 });

  const [itemObj, setItemObj] = useState({});

  //START OF TEMP STATE//////////////////////////////////////////
  // TempName State
  const [tempName, setTempName] = useState('');

  //TempEmail State/Session Storage
  const [tempEmail, setTempEmail] = useState('');
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempEmail');
    setTempEmail(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempEmail', JSON.stringify(tempEmail));
  }, [tempEmail]);

  //TempUserName State/Session Storage
  const [tempUserName, setTempUserName] = useState('');
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempUserName');
    setTempUserName(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempUserName', JSON.stringify(tempUserName));
  }, [tempUserName]);

  //TempSubID State/Session Storage
  const [tempSubID, setTempSubID] = useState('');
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempSubID');
    setTempSubID(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempSubID', JSON.stringify(tempSubID));
  }, [tempSubID]);

///////////////////////////////////////////////
 const [emailSessionStorage, setEmailSessionStorage] = useState('');
const [userNameSessionStorage, setUserNameSessionStorage] = useState('');
const [userAuthSessionStorage, setUserAuthSessionStorage] = useState('');

  useEffect(() => {
    const data1 = window.sessionStorage.getItem('email');
    setEmailSessionStorage(JSON.parse(data1));
    console.log("EMAIL GOOD", data1 )
  }, []);


   useEffect(() => {
     const data2 = window.sessionStorage.getItem('userName');
     setUserNameSessionStorage(JSON.parse(data2));
     console.log('USERNAME GOOD', data2);
   }, []);

  useEffect(() => {
    const data3 = window.sessionStorage.getItem('userID');
    setUserAuthSessionStorage(JSON.parse(data3));
    console.log('USERID GOOD', data3);
  }, []);


////////////////////////////////////////////////////////


  //TempPassword State
  const [tempPassword, setTempPassword] = useState('');

  //TempCurrentMap State
  const [tempCurrentMap, setTempCurrentMap] = useState('loadingMap');

  //TempFlowers State/Session Storage
  const [tempFlowers, setTempFlowers] = useState(0);
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempFlowers');
    setTempFlowers(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempFlowers', JSON.stringify(tempFlowers));
  }, [tempFlowers]);

  //TempQuest1 State/Session Storage
  const [tempQuest1, setTempQuest1] = useState('false');
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempQuest1');
    setTempQuest1(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempQuest1', JSON.stringify(tempQuest1));
  }, [tempQuest1]);

  //TempQuest2 State/Session Storage
  const [tempQuest2, setTempQuest2] = useState('false');
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempQuest2');
    setTempQuest2(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempQuest2', JSON.stringify(tempQuest2));
  }, [tempQuest2]);

  //TempQuest3 State/Session Storage
  const [tempQuest3, setTempQuest3] = useState('false');
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempQuest3');
    setTempQuest3(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempQuest3', JSON.stringify(tempQuest3));
  }, [tempQuest3]);

  //TempQuest4 State/Session Storage
  const [tempQuest4, setTempQuest4] = useState('false');
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempQuest4');
    setTempQuest4(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempQuest4', JSON.stringify(tempQuest4));
  }, [tempQuest4]);

  //TimeStamp State/Session Storage
  const [timeStamp, setTimeStamp] = useState('');

  //TempMongoID State/Session Storage
  const [tempMongoID, setTempMongoID] = useState('');
  useEffect(() => {
    const data = window.sessionStorage.getItem('tempMongoID');
    setTempMongoID(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('tempMongoID', JSON.stringify(tempMongoID));
  }, [tempMongoID]);

  //END OF TEMP STATE/;///////////////////z///////////////////////

  const [finalEmail, setFinalEmail] = useState('');
  const [finalUserName, setFinalUserName] = useState('');
  const [finalSubID, setFinalSubID] = useState('');

  const email = useEffect(() => {
    const data = window.sessionStorage.getItem('email');
    setFinalEmail(data);
  }, []);

  const userName = useEffect(() => {
    const data = window.sessionStorage.getItem('userName');
    setFinalUserName(data);
  }, []);

  const authID = useEffect(() => {
    const data = window.sessionStorage.getItem('userID');
    setFinalSubID(data);
  }, []);

  //RETRIEVE SESSION STORAGE CREDENTIALS//////////////////////////////////////////////////////

  const [menu1Toggle, setMenu1Toggle] = useState(false);
  const [menu2Toggle, setMenu2Toggle] = useState(false);
  const [menuClockToggle, setMenuClockToggle] = useState(false);
  const [framerateToggle, setFramerateToggle] = useState(false);
  const [closeMessage, setCloseMessage] = useState(false);

  //LoadGame Toggle logic for Load Game message
  const [loadGameToggle, setLoadGameToggle] = useState(true);

  // Logic for checking Browser type
  const [browserWarning, setBrowserWarning] = useState(false);

  //delete Later
  const [demonTeam, setDemonTeam] = useState([
    DemonObjects.Player,
    DemonObjects.Dragonite,
    DemonObjects.Haku,
    DemonObjects.Zabuza,
    DemonObjects.Naruto
  ]);

  const [current, setCurrent] = useState(tempCurrentMap);
  //Persist Logic for currentMap
  useEffect(() => {
    const data = window.sessionStorage.getItem('CurrentMap');
    setCurrent(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.sessionStorage.setItem('CurrentMap', JSON.stringify(current));
  }, [current]);

  const [tempCurrent, setTempCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [textValue, setTextValue] = useState(null);
  const [menu, setMenu] = useState(false);

  const [saturate, setSaturate] = useState(120);
  const [contrast, setContrast] = useState(120);

  // Current OS
  const platform = window.navigator.platform;

  // Save State
  const [saveState, setSaveState] = useState([]);
  const [passwordState, setPasswordState] = useState('');

  const [mattState, setMattState] = useState();

  const [trigger, setTrigger] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [saveMessage, setSaveMessage] = useState(false);
  const [refreshMessage, setRefreshMessage] = useState(false);
  const [newGameToggle, setNewGameToggle] = useState(false);
  const [newGameMessage, setNewGameMessage] = useState(false);
  const [gameOverwriteWarning, setGameOverwriteWarning] = useState(false);
  const [proceedButton, setProceedButton] = useState(false);
  const [lockButton, setLockButton] = useState(false);
  const [lockNewGameButton, setLockNewGameButton] = useState(false);
  

  //Create New Game State
  const [checkForSavedGame, setCheckForSavedGame] = useState(false);

  //Create New Game State
  const [createNewGame, setCreateNewGame] = useState(false);

  //Create Load Game State
  const [execute, setExecute] = useState(false);

  //UseRef to stop Get request Useeffect from running on re-render
  const isMounted = useRef(false);

  // Handle Click Function For temp activating Get Request
  const handleClickSave = (e) => {
    setTrigger2(true);
    setSaveMessage(true);
    setTimeout(() => {
      setSaveMessage(false);
      setTrigger2(false);
      setMenu2Toggle(false);
    }, 4000);
  };

    useEffect(() => {
      if (emailSessionStorage === null|| userNameSessionStorage === null|| userAuthSessionStorage === null) {
        setLockButton(true);
        setLockNewGameButton(true);
        console.log('WTF DUDE GET OUTTA HERE');
      }
    }, );

    console.log(
      'CHECK CRED LOGIC',
      emailSessionStorage,
      userNameSessionStorage,
      userAuthSessionStorage
    );
  

  //Function for loading Game
  function loadGame() {
    if (lockButton === false) {
      isMounted.current = true;
      setExecute(true);
      console.log('LOAD GAME PRESSED');
      setTimeout(() => {
        isMounted.current = false;
        setExecute(false);
      }, 100);
    } else {
      // window.location.replace('http://localhost:3000/');
      window.location.replace('https://www.sacredcurse.com/');
      return null;
    }
  }
  console.log("LOAD GAME", lockButton)

  //Function for Checking for current saved game records
  function checkForSavedRecords() {
    isMounted.current = true;
    if (lockNewGameButton === false) {
    setCheckForSavedGame(true);
    setLockButton(true);
    setTimeout(() => {
      isMounted.current = false;
      setCheckForSavedGame(false);
    }, 100)
  }
  else {
    //  window.location.replace('http://localhost:3000/');
     window.location.replace('https://www.sacredcurse.com/');
     return null;
  }
    console.log('NEW GAME PRESSED');
  }

  console.log('NEW GAME', lockNewGameButton);

  //Function for Closing a new Game warning message
  function proceedToggle() {
    isMounted.current = true;
    setProceedButton(true);
    setTimeout(() => {
    setExecute(false);
    setLockButton(false);
    }, 200)
    setTimeout(() => {
      isMounted.current = false;
    }, 100);
  }

  //Function for Creating a new Game
  function closeButton2() {
    isMounted.current = true;
    setRefreshMessage(false);
  }

  //Function for Clsoing a new Game warning message
  function closeButton() {
    isMounted.current = true;
    setGameOverwriteWarning(false);
    setLockButton(false);
     setTimeout(() => {
      isMounted.current = false;
    }, 100);
  }

  // console.log('IS MOUNTED', isMounted);

  //GET Request for Fetching and Updating Users Game Records
  useEffect(() => {
    if (isMounted.current) {
      axios
        .get(
          // `${process.env.APPJS_GET_REQUEST_ENDPOINT}/state`
          "https://www.sacredcurse.com/state"
        )
        .then((res) => {
          {
            const result = res.data.filter((c, i) => c.subID === finalSubID);
            // Check if record exists
            if (!result.length) {
              setNewGameMessage(true);
              setTimeout(() => {
                setNewGameMessage(false);
              }, 3000);
              console.log('USER HAS NO RECORDS STORED');
            } else {
              setTempMongoID(result[0]._id);
              setTempName(result[0].name);
              setTempEmail(result[0].email);
              setTempUserName(result[0].userName);
              setTempSubID(result[0].subID);
              setTempPassword(result[0].password);
              setTempCurrentMap(result[0].setTempCurrentMap);
              setTempFlowers(result[0].flowers);
              setTempQuest1(result[0].quest1);
              setTempQuest2(result[0].quest2);
              setTempQuest3(result[0].quest3);
              setTempQuest4(result[0].quest4);
              setTimeStamp(result[0].timeStamp);
              setSaveState(res.data);
              setCurrent(result[0].currentMap);
              setTimeout(() => {
                setLoadGameToggle(false);
              }, 200);
              // console.log('_ID AFTER GET', res.data[0]._id);
              // console.log('NAME AFTER GET', res.data[0].name);
              // console.log('EMAIL AFTER GET', res.data[0].email);
              // console.log('USERNAME AFTER GET', res.data[0].userName);
              // console.log('SUBID AFTER GET', res.data[0].subID);
              // console.log('PASSWORD', result[0].password);
              // console.log('CURRENTMAP', result[0].currentMap);
              // console.log('FLOWERS', result[0].flowers);
              // console.log('QUEST1', result[0].quest1);
              // console.log('QUEST2', result[0].quest2);
              // console.log('QUEST3', result[0].quest3);
              // console.log('QUEST4', result[0].quest4);
              // console.log('TIMESTAMP', result[0].timeStamp);
              console.log('FETCH USERS RECORD COMPLETED!');
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }, [execute]);

  // console.log('NAME AFTER', tempName);
  // console.log('Email AFTER', tempEmail);
  // console.log('Username AFTER', tempUserName);
  // console.log('SubID AFTER', tempSubID);
  // console.log('Current Map AFTER', current);
  // console.log('QUEST1 AFTER', tempQuest1);
  // console.log('QUEST2 AFTER', tempQuest2);
  // console.log('QUEST3 AFTER', tempQuest3);
  // console.log('QUEST4 AFTER', tempQuest4);

  // GET REQUEST FOR CREATING A NEW GAME
  useEffect(() => {
    if (isMounted.current) {
      axios
        .get(
          // `${process.env.APPJS_GET_REQUEST_ENDPOINT}/state`
          "https://www.sacredcurse.com/state"
        )
        .then((res) => {
          {
            const findRecord = res.data.filter((c, i) => c.subID === finalSubID);
            // Check if record exists
            if (findRecord.length) {
              setGameOverwriteWarning(true);
              setTempMongoID(findRecord[0]._id);
              console.log('GET REQUEST RUNNING');
            } else {
              setCreateNewGame(true);
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }, [checkForSavedGame]);

  //POST Request for Creating a new record
  useEffect(() => {
    if (isMounted.current) {
      axios
        .post(
          // `${process.env.APPJS_GET_REQUEST_ENDPOINT}/state/new`,
          "https://www.sacredcurse.com/state/new",
          {
            name: '',
            email: finalEmail,
            password: '',
            userName: finalUserName,
            subID: finalSubID,
            currentMap: 'indoorHouse10',
            flowers: 0,
            quest1: false,
            quest2: false,
            quest3: false,
            quest4: false,
            timeStamp: ''
          }
        )
        .then((res) => {
          console.log(res);
          setExecute(true);
        })
        .catch((err) => console.log(err));
      // }
    }
  }, [createNewGame]);

  // PUT Request for SaveState
  useEffect(() => {
    if (trigger2 === true) {
      const putState = async (id) => {
        const data = await fetch(
          // `${process.env.APPJS_GET_REQUEST_ENDPOINT}/state/update/${id}`,
          `https://www.sacredcurse.com/state/update/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: tempName,
              email: tempEmail,
              userName: tempUserName,
              subID: tempSubID,
              password: tempPassword,
              currentMap: current,
              flowers: tempFlowers,
              quest1: tempQuest1,
              quest2: tempQuest2,
              quest3: tempQuest3,
              quest4: tempQuest4,
              timeStamp: timeStamp
            })
          }
        ).then((res) => res.json());
        console.log('SAVE GAME RECORD UPDATED');
      };
      putState(tempMongoID);
    }
  }, [trigger2]);

  // PUT Request 2 for overwriting game record
  useEffect(() => {
    if (proceedButton === true) {
      const putState = async (id) => {
        const data = await fetch(
          // `${process.env.APPJS_GET_REQUEST_ENDPOINT}/state/update/${id}`,
          `https://www.sacredcurse.com/state/update/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: '',
              email: finalEmail,
              password: '',
              userName: finalUserName,
              subID: finalSubID,
              currentMap: 'indoorHouse10',
              flowers: 0,
              quest1: false,
              quest2: false,
              quest3: false,
              quest4: false,
              timeStamp: ''
            })
          }
        ).then((res) => res.json());
        setGameOverwriteWarning(false);
        setExecute(true);
        console.log('SAVE GAME RECORD UPDATED');
      };
      putState(tempMongoID);
    }
  }, [proceedButton]);

  // DELETE Request for SaveState
  const deleteState = async (id) => {
    const data = await fetch(`${process.env.APPJS_GET_REQUEST_ENDPOINT}/state/delete/${id}`, {
      method: 'DELETE'
    }).then((res) => res.json());
  };

  //  useEffect(() => {
  //   deleteState('6337321ce90b16a4693f15b5');
  //  }, [])

  // console.log('User Name', finalUserName);
  // console.log('User Email', finalEmail);
  // console.log('User ID', finalSubID);

  // URL protocol checker
  // let url = new URL('https://github.com/foo/bar');

  // function isSafe(dangerousURL, text) {
  //   const url = URL(dangerousURL, {});
  //   if (url.protocol === 'http:') return true;
  //   if (url.protocol === 'https:') return true;

  //   return false;
  // }

  // useEffect(() => {
  //   isSafe();
  // }, []);

  const mapsObj = {
    outDoorMap1: (
      <OutDoorMap1 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorMap1: (
      <Indoormap1 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorMap2: (
      <Indoormap2 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    outDoorMapFresh: (
      <OutDoorMapFresh passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    farmMap: <FarmMap passed={previous} active={tracker} adder={addItem} previousMap={previous} />,
    townMap1: (
      <TownMap1 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    theWall: <TheWall passed={previous} active={tracker} adder={addItem} previousMap={previous} />,
    trainTracksToTortous: (
      <TrainTracksToTortous
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    trainTracksToValley: (
      <TrainTracksToValley
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    dunleaveyValley: (
      <DunleaveyValley passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    saintAnna: (
      <SaintAnna passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    mountainRoadTrainTracks: (
      <MountainRoadTrainTracks
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    mansonRanch: (
      <MansonRanch passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    mountainEntrance: (
      <MountainEntrance passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    sigele: <Sigele passed={previous} active={tracker} adder={addItem} previousMap={previous} />,
    presidentSafeHouse: (
      <PresidentSafeHouse
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    ranchHouse1: (
      <RanchHouse1 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    ranchHouse2: (
      <RanchHouse2 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    secretIndoorLakeHouse: (
      <SecretIndoorLakeHouse
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    oldManCrawfordInside: (
      <OldManCrawfordInside
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    hotelIndoors: (
      <HotelIndoors passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse1: (
      <IndoorHouse1 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse2: (
      <IndoorHouse2 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse3: (
      <IndoorHouse3 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse4: (
      <IndoorHouse4 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse5: (
      <IndoorHouse5 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse6: (
      <IndoorHouse6 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse7: (
      <IndoorHouse7 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse8: (
      <IndoorHouse8 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse9: (
      <IndoorHouse9 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    indoorHouse10: (
      <IndoorHouse10 passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    mountainTown: (
      <MountainTown passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    luluMountainPass: (
      <LuluMountainPass passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    luluMountainPassRight: (
      <LuluMountainPassRight
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    saintAnnaHidden: (
      <SaintAnnaHidden passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    tortousFork: (
      <TortousFork passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    tortous: (
      <Tortous
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
        passUpState={finalState}
        // value= "Cana"
      />
    ),
    trainTracksToCapital: (
      <TrainTracksToCapital
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    tortousTrainStation: (
      <TortousTrainStation
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    trainTracksToSaintAnna: (
      <TrainTracksToSaintAnna
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    crystalCaverns: (
      <CrystalCaverns passed={previous} active={tracker} adder={addItem} previousMap={previous} />
    ),
    crystalCavernsRight: (
      <CrystalCavernsRight
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    loadingMap: <LoadingMap />,
    demoMap: <DemoMap demonList={demonTeam} />
  };

  //Framerate Tester on and off
  useEffect(() => {
    const frameRate = (event) => {
      if (event.key === 'f') {
        setFramerateToggle(!framerateToggle);
        function step(timestamp) {
          var time2 = new Date();
          var fps = 1000 / (time2 - time);
          time = time2;
          document.getElementById('test').innerHTML = fps;
          window.requestAnimationFrame(step);
        }
        var time = new Date(),
          i = 0;
        window.requestAnimationFrame(step);
      }
    };
    window.addEventListener('keydown', frameRate);
    return () => {
      window.removeEventListener('keydown', frameRate);
    };
  }, [framerateToggle]);

  // //Checking for screen inner width
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  //Checking for window inner height
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  }
  // console.log('WINDOW INNER HEIGHT', window.innerHeight);

  //Check screens resolution
  function getResolution() {
    return 'Screen resolution: ' + screen.width + 'x' + screen.height;
  }

  // //MATT MENU
  // useEffect(() => {
  //   const menuListener = (event) => {
  //     if (event.key === 'Enter') {
  //       setMenu(true);
  //     }
  //     if (event.key === 'Escape') {
  //       setMenu(false);
  //     }
  //   };
  //   window.addEventListener('keydown', menuListener);
  //   return () => {
  //     window.removeEventListener('keydown', menuListener);
  //   };
  // }, []);

  // MATT CODE
  useEffect(() => {
    setPrevious(tempCurrent);
  }, [current]);

  useEffect(() => {
    setTempCurrent(current);
  }, [previous]);

  function tracker(x, y) {
    setCurrent(x);
    setPrevious(y);
  }

  //Page reload, quit, and close blocker logic
   window.onbeforeunload = function () {
     return '';
   };

  

  /////////////////////////////////////////////////////////////////
  //MATT STATE PASSING FUNCTION for subID Auth
  function subIDPass(subIDAuth) {
    setMattState(subIDAuth);
  }
  /////////////////////////////////////////////////////////////////

  function addItem(x) {
    setItemObj((itemObj.poop = x));
  }

  function finalState(x) {
    setPasswordState(x);
  }

  useEffect(() => {
    finalState();
  }, []);

  //menu 1 toggle
  useEffect(() => {
    const menu1 = (event) => {
      if (event.key === 's') {
        setMenu1Toggle(!menu1Toggle);
      }
    };
    window.addEventListener('keydown', menu1);
    return () => {
      window.removeEventListener('keydown', menu1);
    };
  }, [menu1Toggle]);

  // menu 2 toggle
  useEffect(() => {
    const menu2 = (event) => {
      if (event.key === 's') {
        setMenu2Toggle(!menu2Toggle);
      }
    };
    window.addEventListener('keydown', menu2);
    return () => {
      window.removeEventListener('keydown', menu2);
    };
  }, [menu2Toggle]);

  // menu Clock toggle
  useEffect(() => {
    const clock = (event) => {
      if (event.key === 'c') {
        setMenuClockToggle(!menuClockToggle);
      }
    };
    window.addEventListener('keydown', clock);
    return () => {
      window.removeEventListener('keydown', clock);
    };
  }, [menuClockToggle]);

  // console.log("BROWSER", `${browserName} ${browserVersion}`);

  //UseEffect for blocking certain browsers
  useEffect(() => {
    browserName !== 'Chrome' &&
    browserName !== 'Safari' &&
    browserName !== 'Mobile Safari' &&
    browserName !== 'Mobile Chrome'
      ? setBrowserWarning(true)
      : null;
  }, []);

  // Local Storage Size Indicator
  // const blob = new Blob(Object.values(localStorage)).size;
  // console.log('LOCAL STORAGE', blob);

  //Return logic
  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}></div> */}
      <div className="containerApp">
        {browserWarning === true ? (
          <h1
            style={{
              fontSize: '30px',
              color: 'white'
            }}>{`This browser is incompatible with this game. Please use Google Chrome or Safari`}</h1>
        ) : (
          <div style={{ filter: `saturate(${saturate}%)` }}>
            <div style={{ filter: `contrast(${contrast}%)` }}>
              {loadGameToggle === true ? (
                <button className="loadGame" onClick={loadGame}>
                  LOAD GAME
                </button>
              ) : null}

              {loadGameToggle === true ? (
                <button className="newGame" onClick={checkForSavedRecords}>
                  NEW GAME
                </button>
              ) : null}

              {newGameMessage === true ? (
                <>
                  <p className="createNewRecordMessage">
                    You have no saved game on file under this account.
                  </p>

                  <p className="createNewRecordMessage2">
                    Please press "NEW GAME" to start playing.
                  </p>
                </>
              ) : null}

              {framerateToggle === true ? (
                <>
                  <div>
                    <span
                      style={{
                        position: 'absolute',
                        top: '4rem',
                        left: '2rem',
                        color: 'white',
                        zIndex: '999'
                      }}>
                      Frame Rate =
                    </span>

                    <span
                      id="test"
                      style={{
                        position: 'absolute',
                        top: '4rem',
                        left: '8.5rem',
                        color: 'white',
                        zIndex: '999'
                      }}></span>
                    <span
                      style={{
                        position: 'absolute',
                        top: '4rem',
                        left: '19.8rem',
                        color: 'white',
                        zIndex: '999'
                      }}>
                      {getResolution()}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        top: '4rem',
                        left: '34.5rem',
                        fontSize: '16px',
                        color: 'white',
                        zIndex: '999'
                      }}>
                      {browserName} Version: {browserVersion}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        top: '4rem',
                        left: '45rem',
                        fontSize: '16px',
                        color: 'white',
                        zIndex: '999'
                      }}>
                      OS:
                      {platform}
                    </span>
                  </div>
                </>
              ) : null}

              <div>
                <body>
                  {mapsObj[current]}
                  {menu === true ? (
                    <dialog className="mainMenu" open>
                      <button>MAP</button>
                    </dialog>
                  ) : null}
                </body>

                {menuClockToggle === true ? (
                  <>
                    <div className="clock">
                      <Clock format="h:mm:ssa" style={{ fontSize: '1.5em' }} ticking />
                    </div>

                    <div className="clockTime">
                      <Datetime />
                    </div>
                  </>
                ) : null}

                {menu2Toggle === true ? <></> : null}

                {menu2Toggle === true ? (
                  <button className="saveGameButton" onClick={handleClickSave}>
                    SAVE GAME
                  </button>
                ) : null}

                {gameOverwriteWarning === true ? (
                  <button className="eraseGame" onClick={proceedToggle}>
                    !PRESS TO DELETE!
                  </button>
                ) : null}

                {saveMessage === true ? (
                  <h1 className="successMessage">YOUR GAME WAS SUCCESSFULLY SAVED!</h1>
                ) : null}

                {refreshMessage === true ? (
                  <div>
                    <h1 className="alertWarning">
                      "WARNING!"
                      <br />
                      <br />
                      Pressing the "R", "Q", or "W" keys while playing the game will potentially
                      quit or refresh the game.
                      <br />
                      <br /> This is not advised!
                    </h1>
                    <button className="closeOutButton" onClick={closeButton2}>
                      X
                    </button>
                  </div>
                ) : null}

                {gameOverwriteWarning === true ? (
                  <div>
                    <div> setLockButton(true)</div>
                    <button className="closeOutButton2" onClick={closeButton}>
                      PRESS TO CANCEL
                    </button>
                    <h1 className="newGameAlertWarning">WARNING!</h1>
                    <p className="newGameAlertWarning2">
                      This useremail and or password you are logged in as, is already associated
                      <br />
                      <br />
                      with a current saved game. Please press the "LOAD GAME" button to load
                      <br />
                      <br />
                      your saved progress. If you really want to erase your saved game and start
                      <br />
                      <br />
                      over from scratch, then please click the "ERASE MY GAME" button.
                      <br />
                      <br />
                      This process is irreversible!
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
