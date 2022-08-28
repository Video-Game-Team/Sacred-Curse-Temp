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
import LuluMountainPassRight from './components/maps/luluMountainPassRight.js';
import SaintAnnaHidden from './components/maps/saintAnnaHidden.js';
import TrainTracksToCapital from './components/maps/trainTracksToCapital.js';
import TortousTrainStation from './components/maps/tortousTrainStation.js';
import TrainTracksToSaintAnna from './components/maps/trainTracksToSaintAnna.js';
import TortousFork from './components/maps/tortousFork.js';
import Tortous from './components/maps/tortous.js';
import CrystalCaverns from './components/maps/crystalCaverns.js';
import CrystalCavernsRight from './components/maps/crystalCavernsRight.js';

import DemoMap from './battleMaps/demoMap.jsx';
import DemonObjects from './demonObjects.js'

import './App.css';

function App() {
  // const character =  testRef.current.querySelector('characterUp');
  const [itemObj, setItemObj]=useState({
  

  })


  //delete Later
const [demonTeam, setDemonTeam]= useState([DemonObjects.Player, DemonObjects.Dragonite, DemonObjects.Haku, DemonObjects.Zabuza, DemonObjects.Naruto])
const [current, setCurrent] = useState('luluMountainPassRight');
const [tempCurrent, setTempCurrent] = useState(null)
const [previous,setPrevious]= useState(null)

console.log("CURRENTMAP", current, "PREVIOUSMAP", previous)


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
    secretLakeIndoorHouse: (
      <SecretLakeIndoorHouse
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


// console.log('POOP', mapsObj)

useEffect(()=>{
  console.log(current)
  console.log(tempCurrent)
setPrevious(tempCurrent)


},[current])

useEffect(() => {
setTempCurrent(current);
}, [previous])


  function tracker(x, y) {
    setCurrent(x);
     setPrevious(y);
  }  

  function addItem(x){
    setItemObj(itemObj.poop=x)
  }

  // whole map is a button - giving that button onkeyppress listener called wrap
  return <body>{mapsObj[current]}</body>;
}

export default App;
