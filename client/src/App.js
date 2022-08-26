import React, { useEffect, useState, useRef } from 'react';
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
import SecretLakeIndoorHouse from './components/maps/secretIndoorLakeHouse.js';
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
import SaintAnnaHidden from './components/maps/saintAnnaHidden.js';
import TrainTracksToCapital from './components/maps/trainTracksToCapital.js';
import TortousTrainStation from './components/maps/tortousTrainStation.js';
import TrainTracksToSaintAnna from './components/maps/trainTracksToSaintAnna.js';

import DemoMap from './battleMaps/demoMap.jsx';
import DemonObjects from './demonObjects.js'

import './App.css';

function App() {

  // const character =  testRef.current.querySelector('characterUp');
  const [itemObj, setItemObj]=useState({
  

  })

  //delete Later
const [demonTeam, setDemonTeam]= useState([DemonObjects.Player, DemonObjects.Dragonite, DemonObjects.Haku, DemonObjects.Zabuza, DemonObjects.Naruto])


  const mapsObj = {
    outDoorMap1: <OutDoorMap1 active={tracker} adder={addItem} />,
    indoorMap1: <Indoormap1 active={tracker} adder={addItem} />,
    indoorMap2: <Indoormap2 active={tracker} adder={addItem} />,
    outDoorMapFresh: <OutDoorMapFresh active={tracker} adder={addItem} />,
    farmMap: <FarmMap active={tracker} adder={addItem} />,
    townMap1: <TownMap1 active={tracker} adder={addItem} />,
    theWall: <TheWall active={tracker} adder={addItem} />,
    trainTracksToTortous: (
      <TrainTracksToTortous active={tracker} adder={addItem} />
    ),
    trainTracksToValley: (
      <TrainTracksToValley active={tracker} adder={addItem} />
    ),
    dunleaveyValley: <DunleaveyValley active={tracker} adder={addItem} />,
    saintAnna: <SaintAnna active={tracker} adder={addItem} />,
    mountainRoadTrainTracks: (
      <MountainRoadTrainTracks active={tracker} adder={addItem} />
    ),
    mansonRanch: <MansonRanch active={tracker} adder={addItem} />,
    mountainEntrance: <MountainEntrance active={tracker} adder={addItem} />,
    sigele: <Sigele active={tracker} adder={addItem} />,
    presidentSafeHouse: <PresidentSafeHouse active={tracker} adder={addItem} />,
    ranchHouse1: <RanchHouse1 active={tracker} adder={addItem} />,
    ranchHouse2: <RanchHouse2 active={tracker} adder={addItem} />,
    secretLakeIndoorHouse: (
      <SecretLakeIndoorHouse active={tracker} adder={addItem} />
    ),
    oldManCrawfordInside: (
      <OldManCrawfordInside active={tracker} adder={addItem} />
    ),
    hotelIndoors: <HotelIndoors active={tracker} adder={addItem} />,
    indoorHouse1: <IndoorHouse1 active={tracker} adder={addItem} />,
    indoorHouse2: <IndoorHouse2 active={tracker} adder={addItem} />,
    indoorHouse3: <IndoorHouse3 active={tracker} adder={addItem} />,
    indoorHouse4: <IndoorHouse4 active={tracker} adder={addItem} />,
    indoorHouse5: <IndoorHouse5 active={tracker} adder={addItem} />,
    indoorHouse6: <IndoorHouse6 active={tracker} adder={addItem} />,
    indoorHouse7: <IndoorHouse7 active={tracker} adder={addItem} />,
    indoorHouse8: <IndoorHouse8 active={tracker} adder={addItem} />,
    indoorHouse9: <IndoorHouse9 active={tracker} adder={addItem} />,
    indoorHouse10: <IndoorHouse10 active={tracker} adder={addItem} />,
    mountainTown: <MountainTown active={tracker} adder={addItem} />,
    luluMountainPass: <LuluMountainPass active={tracker} adder={addItem} />,
    saintAnnaHidden: <SaintAnnaHidden active={tracker} adder={addItem} />,
    trainTracksToCapital: (
      <TrainTracksToCapital active={tracker} adder={addItem} />
    ),
    tortousTrainStation: (
      <TortousTrainStation active={tracker} adder={addItem} />
    ),
    trainTracksToSaintAnna: (
      <TrainTracksToSaintAnna active={tracker} adder={addItem} />
    ),
    demoMap: <DemoMap demonList={demonTeam} />,
  };


// console.log('POOP', mapsObj)


const [current, setCurrent] = useState('trainTracksToSaintAnna');

  function tracker(x) {
    setCurrent(x);
  }  

  function addItem(x){
    setItemObj(itemObj.poop=x)
  }

  // whole map is a button - giving that button onkeyppress listener called wrap
  return <body>{mapsObj[current]}</body>;
}

export default App;
