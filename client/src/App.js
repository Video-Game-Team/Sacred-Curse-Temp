import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LeftWalker from './assets/images/leftWalker.png';
import RightWalker from './assets/images/rightWalker.png';
import UpWalker from './assets/images/upWalker.png';
import DownWalker from './assets/images/downWalker.png';
import EmptyCanvas from './assets/images/newone.png';
import BackgroundImage1 from './assets/maps/map 40x 40 w grid.png';
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
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

import DemoMap from './battleMaps/demoMap.jsx';
import DemonObjects from './demonObjects.js';

import Datetime from './components/maps/datetime.js';
import Clock from 'react-live-clock';

import './App.css';

function App() {
  const [itemObj, setItemObj] = useState({});

  const [menu1Toggle, setMenu1Toggle] = useState(false);
  const [menu2Toggle, setMenu2Toggle] = useState(false);
  const [menuClockToggle, setMenuClockToggle] = useState(false);

  //delete Later
  const [demonTeam, setDemonTeam] = useState([
    DemonObjects.Player,
    DemonObjects.Dragonite,
    DemonObjects.Haku,
    DemonObjects.Zabuza,
    DemonObjects.Naruto,
  ]);

  const [current, setCurrent] = useState('tortousTrainStation');
  const [tempCurrent, setTempCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [textValue, setTextValue] = useState(null);
  const [menu, setMenu] = useState(false);

  const [saturate, setSaturate] = useState(120);
  const [contrast, setContrast] = useState(120);

  // Save State
  const [saveState, setSaveState] = useState([]);

  const [passwordState, setPasswordState] = useState('');
  const [userIDState, setUserIDState] = useState('');
  const [currentMapState, setCurrentMapState] = useState('');
  const [flowersState, setFlowersState] = useState('');
  const [quest1State, setQuest1State] = useState('false');
  const [quest2State, setQuest2State] = useState('false');
  const [quest3State, setQuest3State] = useState('false');
  const [quest4State, setQuest4State] = useState('false');
  const [emailState, setEmailState] = useState('');
  const [userNameState, setUserNameState] = useState('');

  // let tempObj = {
  //   password: passwordState,
  //   userID: userIDState,
  //   currentMap: currentMapState,
  //   flowers: flowersState,
  //   quest1: true,
  //   quest2: quest2State,
  //   quest3: quest3State,
  //   quest4: quest4State,
  //   timeStamp: '1',
  //   email: emailState,
  //   userName: userNameState,
  // };

  // GET Request for SaveState
  const GetSaveState = () => {
    axios
      .get('http://localhost:3001/state')
      .then((res) => {
        // console.log('Res;', res.data);
        setSaveState(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetSaveState();
  }, []);

  // // POST Request for SaveState
  // const updateState = () => {
  //   axios
  //     .post('http://localhost:3001/state/new', {
  //       password: passwordState,
  //       userID: userIDState,
  //       currentMap: currentMapState,
  //       flowers: flowersState,
  //       quest1: quest1State,
  //       quest2: quest2State,
  //       quest3: quest3State,
  //       quest4: quest4State,
  //       timeStamp: '',
  //       email: emailState,
  //       userName: userNameState,
  //     })
  //     .then((res) => {
  //       // console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   updateState();
  // }, [passwordState]);

  // PUT Request for SaveState
  const putState = async (id) => {
    const data = await fetch(`http://localhost:3001/state/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userNameState,
        email: emailState,
        password: passwordState,
        userID: userIDState,
        currentMap: currentMapState,
        flowers: flowersState,
        quest1: quest1State,
        quest2: quest2State,
        quest3: quest3State,
        quest4: quest4State,
        timeStamp: '',
      }),
    }).then((res) => res.json());
  };

  useEffect(() => {
    putState('6333ae1026690d1e71b91b39');
  }, []);

  //TEMP TRIGGER FOR UPDATING STATE JUST FOR DEMO PURPOSE
  // useEffect(() => {
  //   setPasswordState('TOTOISE');
  // }, );

  // DELETE Request for SaveState
  const deleteState = async (id) => {
    const data = await fetch(`http://localhost:3001/state/delete/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  };

  //  useEffect(() => {
  //   deleteState('');
  //  }, [])

  const mapsObj = {
    outDoorMap1: (
      <OutDoorMap1
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorMap1: (
      <Indoormap1
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorMap2: (
      <Indoormap2
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    outDoorMapFresh: (
      <OutDoorMapFresh
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    farmMap: (
      <FarmMap
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    townMap1: (
      <TownMap1
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    theWall: (
      <TheWall
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
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
      <DunleaveyValley
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    saintAnna: (
      <SaintAnna
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
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
      <MansonRanch
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    mountainEntrance: (
      <MountainEntrance
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    sigele: (
      <Sigele
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    presidentSafeHouse: (
      <PresidentSafeHouse
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    ranchHouse1: (
      <RanchHouse1
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    ranchHouse2: (
      <RanchHouse2
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
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
      <HotelIndoors
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse1: (
      <IndoorHouse1
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse2: (
      <IndoorHouse2
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse3: (
      <IndoorHouse3
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse4: (
      <IndoorHouse4
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse5: (
      <IndoorHouse5
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse6: (
      <IndoorHouse6
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse7: (
      <IndoorHouse7
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse8: (
      <IndoorHouse8
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse9: (
      <IndoorHouse9
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    indoorHouse10: (
      <IndoorHouse10
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    mountainTown: (
      <MountainTown
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    luluMountainPass: (
      <LuluMountainPass
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
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
      <SaintAnnaHidden
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    tortousFork: (
      <TortousFork
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
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
      <CrystalCaverns
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    crystalCavernsRight: (
      <CrystalCavernsRight
        passed={previous}
        active={tracker}
        adder={addItem}
        previousMap={previous}
      />
    ),
    demoMap: <DemoMap demonList={demonTeam} />,
  };

  //MATT MENU
  useEffect(() => {
    const menuListener = (event) => {
      if (event.key === 'Enter') {
        setMenu(true);
      }
      if (event.key === 'Escape') {
        setMenu(false);
      }
    };
    window.addEventListener('keydown', menuListener);
    return () => {
      window.removeEventListener('keydown', menuListener);
    };
  }, []);

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
      if (event.key === 'm') {
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
      if (event.key === 'i') {
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

  // whole map is a button - giving that button onkeyppress listener called wrap
  return (
    <div>
      <div style={{ filter: `saturate(${saturate}%)` }}>
        <div style={{ filter: `contrast(${contrast}%)` }}>
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
                  <Clock
                    format="h:mm:ssa"
                    style={{ fontSize: '1.5em' }}
                    ticking
                  />
                </div>

                <div className="clockTime">
                  <Datetime />
                </div>
              </>
            ) : null}

            {menu2Toggle === true ? (
              <div className="box1">
                <text className="pokeText" style={{ marginLeft: '90px' }}>
                  FLOWERS
                </text>
                c
              </div>
            ) : null}

            {menu2Toggle === true ? (
              <div className="box2">
                <text className="pokeText" style={{ marginLeft: '105px' }}>
                  ITEMS
                </text>
              </div>
            ) : null}

            {menu2Toggle === true ? (
              <div className="box3">
                <text className="pokeText" style={{ marginLeft: '82px' }}>
                  EQUIPMENT
                </text>
              </div>
            ) : null}

            {menu1Toggle === true ? (
              <div className="box4">
                <text className="pokeText" style={{ marginLeft: '125px' }}>
                  MAP
                </text>
              </div>
            ) : null}

            {menu1Toggle === true ? (
              <div className="box5">
                <text className="pokeText" style={{ marginLeft: '585px' }}>
                  CONTROLS
                </text>
              </div>
            ) : null}

            {menu1Toggle === true ? (
              <div className="box6">
                <text className="pokeText" style={{ marginLeft: '585px' }}>
                  MENU
                </text>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
