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
    demoMap: <DemoMap demonList={demonTeam} />,
  };


// console.log('POOP', mapsObj)


const [current, setCurrent] = useState('sigele');

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
