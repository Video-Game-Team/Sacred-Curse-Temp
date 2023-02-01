import React, { useEffect, useState } from 'react';
import images from './index';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map40x40wgrid.png';
import '../../App.css';

const Indoormap1 = (props) => {
  const [playerInd, setPlayerInd] = useState(378);
  const mapArr = [
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 86, 86, 86, 86,
    86, 86, 86, 86, 86, 86, 0, 69, 5, 5, 0, 0, 70, 70, 70, 0, 102, 102, 102, 102, 102, 102, 102,
    102, 102, 102, 0, 0, 5, 5, 0, 0, 70, 70, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 103,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 5, 5, 134, 135, 136, 0, 0, 0, 0, 172, 173, 174, 175, 0, 0, 0, 0, 0, 0, 0, 5, 5, 150, 151,
    152, 0, 0, 0, 0, 188, 189, 190, 191, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 204, 205,
    206, 207, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 70,
    0, 70, 0, 0, 0, 0, 0, 0, 103, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 70, 0, 0, 5, 5, 133, 133, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
  ];

  const goldKey = {
    text: 'Hi Mike'
  };
  const [currentMap, setCurrentMap] = useState();
  //player position x and y
  const [xPos, setXPos] = useState(-162);
  const [yPos, setYPos] = useState(-151);

  //x y coordinates of player position also
  const [cord, setCord] = useState('80px 80px');

  // current sprite loaded
  const [sprite, setSprite] = useState(DownWalker);

  //event listener for button
  function wrap(e) {
    if (e.key === 'q' && sprite === LeftWalker && mapArr[playerInd - 1] === 152) {
      props.adder(goldKey);
    }
    if (e.key === 'q' && sprite === LeftWalker && mapArr[playerInd - 1] === 136) {
      props.adder(goldKey);
    }

    if (e.key === 'a' && mapArr[playerInd - 1] === 0) {
      setXPos(xPos + 32);
      setSprite(LeftWalker);
      let newPos = playerInd - 1;
      setPlayerInd(newPos);
    }

    if (e.key === 'w' && mapArr[playerInd - 20] === 0) {
      setYPos(yPos + 32);
      console.log('up');
      setSprite(UpWalker);
      let newPos = playerInd - 20;
      setPlayerInd(newPos);
    }
    if (e.key === 'd' && mapArr[playerInd + 1] === 0) {
      setXPos(xPos - 32);
      console.log('right');
      setSprite(RightWalker);
      let newPos = playerInd + 1;
      setPlayerInd(newPos);
    }
    if (e.key === 's' && mapArr[playerInd + 20] === 0) {
      setYPos(yPos - 32);
      console.log('down');
      setSprite(DownWalker);
      let newPos = playerInd + 20;
      setPlayerInd(newPos);
    }
  }

  //
  useEffect(() => {
    let newX = xPos.toString() + 'px';
    let newY = yPos.toString() + 'px';
    setCord(newX + ' ' + newY);
    console.log(cord);
  }, [xPos]);

  useEffect(() => {
    let newX = xPos.toString() + 'px';
    let newY = yPos.toString() + 'px';
    setCord(newX + ' ' + newY);
    console.log(cord);
  }, [yPos]);
  console.log(BackgroundImage1);

  // whole map is a button - giving that button onkeyppress listener called wrap
  return (
    <div>
      <button onKeyPress={wrap}>
        {/* /*This is the sprite/* */}
        <img className="happy" src={sprite} alt="hi" />
        <img
          style={{
            backgroundPosition: cord
          }}
          className="butt2"
          src={EmptyCanvas}
          alt="butt"
        />
      </button>
    </div>
  );
};

export default Indoormap1;
