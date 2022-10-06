import React, { useEffect, useState, useRef } from 'react';
// import images from './index';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map40x40wgrid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';
import '../../App.css';

const OutDoorMap1 = (props) => {



  let h1 = 1;
  let h2 = 2;


  const [oldBackground, setOldBackground]= useState( getComputedStyle(document.documentElement).getPropertyValue(
    '--old'
  ))



  const [newBackground, setNewBackground]= useState( getComputedStyle(document.documentElement).getPropertyValue(
    '--new'
  ))

  const [keyDownTrigger, setKeyDownTrigger]= useState(false);
  const [playerInd, setPlayerInd] = useState(451);

  
  const [boob, setBoob]= useState(0);

  const [currentMap, setCurrentMap] = useState();
  //player position x and y
  const [xPos, setXPos] = useState(63);
  const [yPos, setYPos] = useState(72);

  //x y coordinates of player position also
  const [cord, setCord] = useState('63px 72px');

  // current sprite loaded
  const [sprite, setSprite] = useState(DownWalker);
  
  //// tells us when the character is moving, how many pixels per frame do they move
  const speed = 1.5;


  
  //event listener for button
  function wrap(e) {
    // if (e.key === 'a' && mapArr[playerInd - 1] === 0) {
    //   setXPos(xPos + 32);
    //   setSprite('characterLeft');
    //   let newPos = playerInd - 1;
    //   setPlayerInd(newPos);
    //   setKeyDownTrigger(true);
    // }



     if (e.key === 'a' && mapArr[playerInd - 1] === 0) {
       setSprite('characterLeft');
       let newPos = playerInd - 1;
       setXPos(xPos + 32);


       setPlayerInd(newPos);
       setKeyDownTrigger(true);

     }

    if (e.key === 'w' && mapArr[playerInd - 40] === 0) {
      setSprite('characterUp');
      setYPos(yPos + 32);
      let newPos = playerInd - 40;
      setPlayerInd(newPos);
      setKeyDownTrigger(true);
    }

    if (e.key === 'd' && mapArr[playerInd + 1] === 0) {
      setXPos(xPos - 32);
      setSprite('characterRight');
      let newPos = playerInd + 1;
      setPlayerInd(newPos);
      setKeyDownTrigger(true);
    }
    if (e.key === 's' && mapArr[playerInd + 40] === 0) {
      setYPos(yPos - 32);
      setSprite('characterDown');
      let newPos = playerInd + 40;
      setPlayerInd(newPos);
      setKeyDownTrigger(true);
    }

    //door 1 logic
    if (e.key === 'w' && mapArr[playerInd - 40] === h1) {
      props.active('indoorMap1');
    }

    //door 2 logic
    if (e.key === 'w' && mapArr[playerInd - 40] === h2) {
      props.active('indoorMap2');
    }
  }

  
  //
  useEffect(() => {
    let newX = xPos.toString() + 'px';
    let newY = yPos.toString() + 'px';
    setCord(newX + ' ' + newY);
    setOldBackground(newBackground)
    document.documentElement.style.setProperty('--old',newBackground);


    setNewBackground(cord);
console.log('x run')
    document.documentElement.style.setProperty('--new',cord);

  }, [xPos]);

  useEffect(() => {
    let newX = xPos.toString() + 'px';
    let newY = yPos.toString() + 'px';
    setCord(newX + ' ' + newY);
    setOldBackground(newBackground)

    document.documentElement.style.setProperty('--old',newBackground);

    setNewBackground(cord);
    
    document.documentElement.style.setProperty('--new',cord);
    console.log('y run')


  }, [yPos]);

  



function newWrap(){
  setKeyDownTrigger(false)
}


  // whole map is a button - giving that button onkeyppress listener called wrap
  return (
    <div>
      {/* <div className="camera"> */}
        {/* <div class="map pixel-art"> */}
          <div className="character" style={{ transform: 'scale(0.45)' }}>
            {keyDownTrigger === true ? (
              <div
                className={sprite}
                alt="hi"
                
                style={{
                  animation: 'walkAnimation 0.6s steps(4) infinite',
                  //  width: "calc(var(--grid-cell)* 8)",
                  //  height: "calc(var(--grid-cell)* 8)",
                }}
              ></div>
            ) : (
              <div className={sprite} alt="hi">
                {' '}
              </div>
            )}
          </div>
          
          <button onKeyPress={wrap} onKeyUp={newWrap}>
            {/* /*This is the sprite/* */}
           
            <img
              style={{
                animationName: 'mymove',
                animationDuration: '0.1s',
               
              }}
              className="butt"
              src={EmptyCanvas}
              alt="butt"
            />
          </button>
          :
        </div>
    //   </div>
    // </div>
  );
};

export default OutDoorMap1;
