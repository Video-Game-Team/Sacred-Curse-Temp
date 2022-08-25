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

import DemoMap from './battleMaps/demoMap.jsx';
import DemonObjects from './demonObjects.js'

import './App.css';

function App() {

  // const character =  testRef.current.querySelector('characterUp');
  const [itemObj, setItemObj]=useState({
  

  })

  //delete Later
const [demonTeam, setDemonTeam]= useState([DemonObjects.Player, DemonObjects.Suki, DemonObjects.Kipsie, DemonObjects.Mishi, DemonObjects.Oro, DemonObjects.Angelica,
DemonObjects.Charlie, DemonObjects.CrawLord, DemonObjects.Dewy, DemonObjects.Hashi, DemonObjects.Hakara])


  const mapsObj = {
    outDoorMap1: <OutDoorMap1 active={tracker} adder={addItem} />,
    indoorMap1: <Indoormap1 active={tracker} adder={addItem} />,
    indoorMap2: <Indoormap2 active={tracker} adder={addItem} />,
    outDoorMapFresh: <OutDoorMapFresh active={tracker} adder={addItem} />,
    farmMap: <FarmMap active={tracker} adder={addItem}/>,
    demoMap:  <DemoMap demonList={demonTeam}/>
};


// console.log('POOP', mapsObj)
console.log(<FarmMap/>)

const [current, setCurrent] = useState("demoMap");

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
