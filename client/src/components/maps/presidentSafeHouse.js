import React, { useEffect, useState, useRef } from 'react';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map40x40wgrid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';

import click1 from '../../audioclips/click1.mp3';
import text from '../../audioclips/Text.mp3';
import SnowMan from '../../audioclips/Snowman.mp3';

import '../../presidentSafeHouse.css';

const PresidentSafeHouse = (props) => {
  //this sets the x Cordinate to transform the map and character location
  const [xTransformVar, setXTransformVar] = useState(360);
  //this sets the y Cordinate to transform the map and character location
  const [yTransformVar, setYTransformVar] = useState(-532);
  //
  const requestRef = useRef();
  //this sets the speed for the map to move. bigger number goes faster
  const speedRef = useRef(4);

  const [tick, setTick] = useState(1);
  //correpsondds with a css class to tell it which version of the sprite to load. ie "left", "right"
  // const [facing.current, setFacing] = useState("right");
  const facing = useRef();
  //corresponds with a css class. determiines if the sprite gets animated or not
  const [walker, setWalker] = useState('false');
  // const [walkerArr, setWalkerkArr]= useState([])
  const dirArr = useRef([]);

  const xBank = useRef(0);
  const yBank = useRef(0);
  const yPlayerIndex = useRef(13);
  const xPlayerIndex = useRef(4);
  const [gridArray, setGridArray] = useState([]);
  const [textValue, setTextValue] = useState(null);
  const [npcFace, setNpcFace] = useState();

  //Music Playing
  const clickAudio1 = () => new Audio(SnowMan).play();

  // //NPC Dialogue sound effect
  const clickAudio2 = () => new Audio(text).play();

  //Starts off Music Loop
  useEffect(() => {
    {
      clickAudio1();
    }
  }, []);

  // let currentMap2 = [
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // ];

  let currentMap = [
    [298, 299, 300, 4, 15542, 15543, 15544, 15545, 714, 715, 787, 787, 17648, 17697, 17698],
    [312, 313, 314, 18, 15558, 15559, 15560, 15561, 730, 731, 803, 803, 17664, 17713, 17714],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [17648, 0, 0, 0, 0, 0, 0, 0, 0, 19434, 19435, 0, 0, 0, 716],
    [17664, 0, 0, 0, 0, 0, 0, 18947, 18948, 19453, 19454, 0, 0, 0, 732],
    [17680, 18818, 0, 0, 0, 0, 0, 18965, 18966, 19472, 19473, 0, 0, 0, 0],
    [17733, 18836, 0, 0, 0, 1265, 388, 389, 390, 1266, 0, 0, 0, 10045, 10046],
    [17605, 17582, 0, 0, 0, 1281, 404, 405, 406, 1282, 0, 0, 0, 10166, 10167],
    [17676, 17598, 0, 0, 0, 1265, 420, 421, 422, 1266, 0, 0, 0, 10045, 10046],
    [17692, 17582, 0, 0, 0, 1281, 0, 0, 0, 1282, 0, 0, 0, 10166, 10167],
    [17733, 17598, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 716],
    [17749, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 732],
    [17664, 18482, 18483, 0, 0, 18482, 18483, 0, 0, 0, 0, 0, 0, 18947, 18948],
    [17680, 18501, 18502, 0, 0, 18501, 18502, 0, 0, 0, 0, 0, 1751, 18965, 18966],
    [0, 18520, 18521, 0, 0, 18520, 18521, 0, 0, 0, 0, 0, 1767, 1768, 93],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  console.log('COORDINATE', yPlayerIndex.current, xPlayerIndex.current);
  console.log('VALUE Right', currentMap[yPlayerIndex.current][xPlayerIndex.current]);

  // useEffect(() => {
  //   let tempGrid = [];
  //   for (let i = 0; i < currentMap.length; i++) {
  //     for (let j = 0; j < currentMap[i].length; j++) {
  //       tempGrid.push(
  //         <button
  //           onClick={() => {
  //             console.log(`Coordinates ${i} - ${j}`);
  //           }}
  //           className="numbers"
  //           style={{
  //             gridColumn: j + 1,
  //             gridRow: i + 1,
  //             color: 'white',
  //           }}
  //         >
  //           {/* {i} - {j} */}
  //           {currentMap[i][j]}
  //         </button>
  //       );
  //     }
  //   }
  //   setGridArray(tempGrid);
  // }, []);

  useEffect(() => {
    if (props.previousMap === 'mountainTown') {
      //setYCord
      yPlayerIndex.current = 13;
      //setXcord
      xPlayerIndex.current = 4;
      //set xTransform
      setXTransformVar(360);
      //set yTransform
      setYTransformVar(-524);
      facing.current = 'up';
    }
  }, []);

  //  //  //  //INDOOR USE EFFECT
  useEffect(() => {
    if (
      (yPlayerIndex.current === 14 && xPlayerIndex.current === 3) ||
      (yPlayerIndex.current === 14 && xPlayerIndex.current === 4)
    ) {
      props.active('mountainTown', 'presidentSafeHouse');
    }
  }, [yPlayerIndex.current]);

  //CHARACTER DIALOGUE USE EFFECT
  useEffect(() => {
    const dialogueAction = (event) => {
      if (event.key === 'a') {
        //Facing up
        if (facing.current === 'up') {
          //Guard 1 Lower left NPC
          if (yPlayerIndex.current === 6 && xPlayerIndex.current === 10) {
            setNpcFace('facePresidentRH2');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //YO Mama NPC
          if (
            (yPlayerIndex.current === 3 && xPlayerIndex.current === 4) ||
            (yPlayerIndex.current === 3 && xPlayerIndex.current === 5)
          ) {
            setNpcFace('faceGuard1PSH');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          // //Hot Girl
          // if (
          //   (yPlayerIndex.current === 24 && xPlayerIndex.current === 23) ||
          //   (yPlayerIndex.current === 24 && xPlayerIndex.current === 24)
          // ) {
          //   console.log("Hi I'm Guard 3");
          // }
          // //Hot Girl
          // if (
          //   (yPlayerIndex.current === 24 && xPlayerIndex.current === 33) ||
          //   (yPlayerIndex.current === 24 && xPlayerIndex.current === 34)
          // ) {
          //   console.log("Hi I'm guard 4");
          // }
        }

        //Facing down
        if (!facing.current) {
          //Jim NPC
          if (yPlayerIndex.current === 4 && xPlayerIndex.current === 1) {
            setNpcFace('faceGuard1PSH');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          // //YO Mama NPC
          if (
            (yPlayerIndex.current === 3 && xPlayerIndex.current === 7) ||
            (yPlayerIndex.current === 3 && xPlayerIndex.current === 8)
          ) {
            setNpcFace('faceGeneral1RH2');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //Hot Girl
          if (yPlayerIndex.current === 11 && xPlayerIndex.current === 2) {
            setNpcFace('faceGuard1PSH');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //Hot Girl
          if (yPlayerIndex.current === 12 && xPlayerIndex.current === 4) {
            setNpcFace('faceGuard1PSH');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //Hot Girl
          if (yPlayerIndex.current === 12 && xPlayerIndex.current === 12) {
            setNpcFace('faceGeneral1RH2');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
        }

        //Facing left
        if (facing.current === 'left') {
          if (
            (yPlayerIndex.current === 12 && xPlayerIndex.current === 3) ||
            (yPlayerIndex.current === 13 && xPlayerIndex.current === 3)
          ) {
            setNpcFace('faceGuard1PSH');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //YO Mama NPC
          if (
            (yPlayerIndex.current === 5 && xPlayerIndex.current === 2) ||
            (yPlayerIndex.current === 6 && xPlayerIndex.current === 2)
          ) {
            setNpcFace('faceGuard1PSH');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //Hot Girl
          if (
            (yPlayerIndex.current === 4 && xPlayerIndex.current === 11) ||
            (yPlayerIndex.current === 5 && xPlayerIndex.current === 11)
          ) {
            setNpcFace('facePresidentRH2');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //Hot Girl
          if (yPlayerIndex.current === 12 && xPlayerIndex.current === 7) {
            setNpcFace('faceGuard1PSH');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
        }

        //Facing right
        if (facing.current === 'right') {
          if (
            (yPlayerIndex.current === 13 && xPlayerIndex.current === 4) ||
            (yPlayerIndex.current === 12 && xPlayerIndex.current === 4)
          ) {
            setNpcFace('faceGuard1PSH');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //YO Mama NPC
          if (
            (yPlayerIndex.current === 5 && xPlayerIndex.current === 6) ||
            (yPlayerIndex.current === 4 && xPlayerIndex.current === 6)
          ) {
            setNpcFace('faceGeneral1RH2');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          //Hot Girl
          if (
            (yPlayerIndex.current === 13 && xPlayerIndex.current === 11) ||
            (yPlayerIndex.current === 12 && xPlayerIndex.current === 11)
          ) {
            setNpcFace('faceGeneral1RH2');
            setTextValue('My dad is mad at me');
            clickAudio2();
          }
          // //Hot Girl
          // if (
          //   (yPlayerIndex.current === 22 && xPlayerIndex.current === 32) ||
          //   (yPlayerIndex.current === 23 && xPlayerIndex.current === 32)
          // ) {
          //   console.log("Hi I'm guard 4");
          // }
        }
      }
    };
    window.addEventListener('keydown', dialogueAction);
    return () => {
      window.removeEventListener('keydown', dialogueAction);
    };
  }, []);

  //event listen for enter
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (facing.current === 'up') {
          if (
            xBank.current + 32 > 64 &&
            currentMap[yPlayerIndex.current - 1][xPlayerIndex.current + 1] === 'door1'
          ) {
          }
          if (
            currentMap[yPlayerIndex.current - 1][xPlayerIndex.current] === 'sign1' &&
            64 - xBank.current > 32
          ) {
            // console.log('sign1');
          }
          if (
            xBank.current + 32 > 64 &&
            currentMap[yPlayerIndex.current - 1][xPlayerIndex.current + 1] === 'sign2'
          ) {
            // console.log('sign2');
          }
          if (
            currentMap[yPlayerIndex.current - 1][xPlayerIndex.current] === 'sign2' &&
            64 - xBank.current > 32
          ) {
            // console.log('sign2');
          }
        }
        if (facing.current == null) {
          if (
            currentMap[yPlayerIndex.current + 1][xPlayerIndex.current] === 'sign1' &&
            xBank.current + 32 < 64
          ) {
            // console.log('sign1');
          }
          if (currentMap[yPlayerIndex.current + 1][xPlayerIndex.current + 1] === 'sign2') {
            // console.log('poopshit');
          }
          if (
            currentMap[yPlayerIndex.current + 1][xPlayerIndex.current] === 'sign2' &&
            xBank.current + 32 < 64
          ) {
            // console.log('sign2');
          }
        }
      }
    });
  }, []);

  //listens for the current down key and saves it as the currentkey state
  //wrapping in a useEffect prevents compounding event listeners
  useEffect(() => {
    const keyDownHandler = (event) => {
      // console.log(event.key)

      if (
        event.key === 'ArrowRight' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown'
      ) {
        let newArr = dirArr.current;
        // if the key stroke is not in the array
        if (newArr.indexOf(event.key) == -1) {
          newArr.unshift(event.key);

          dirArr.current = newArr;
          setTick((prevCount) => prevCount + 1);
        }
        setTextValue(null);
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    const keyUpHandler = (event) => {
      if (dirArr.current.indexOf(event.key) > -1) {
        let newArr2 = dirArr.current.filter((el) => el != event.key);
        dirArr.current = newArr2;
        setTick((prevCount) => prevCount + 1);
      }
    };
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };

    //when the key is lifted it sets the current key to null to stop map movement and the walker to false to stop the animation
  }, []);

  //facing logic. It needed to be removed from the animate because it was cuasing
  dirArr.current[0] === 'ArrowRight'
    ? (facing.current = 'right')
    : dirArr.current[0] === 'ArrowLeft'
    ? (facing.current = 'left')
    : dirArr.current[0] === 'ArrowUp'
    ? (facing.current = 'up')
    : dirArr.current[0] == 'ArrowDown'
    ? (facing.current = null)
    : null;

  //animate is a reccursive function that takes the current key and updates the cordinate variables depending on which direction is pushed. It also sets which way the character is facing
  const animate = () => {
    //if current key is d, the x cordinate becomes  the previous state + the speed

    if (dirArr.current[0] === 'ArrowRight') {
      if (currentMap[yPlayerIndex.current][xPlayerIndex.current + 1] === 0 || xBank.current < 0)
        if (
          yBank.current + 32 < 64 ||
          currentMap[yPlayerIndex.current - 1][xPlayerIndex.current + 1] == 0
        ) {
          {
            setXTransformVar((prevCount) => prevCount - speedRef.current);
            // console.log(newMap[yPlayerIndex.current][xPlayerIndex.current+1])
            xBank.current = xBank.current + speedRef.current;
            // console.log(yPlayerIndex.current,xPlayerIndex.current)
            if (xBank.current === 64) {
              xPlayerIndex.current = xPlayerIndex.current + 1;

              xBank.current = 0;
            }
          }
        }
    }
    //if current key is a, the x cordinate becomes  the previous state - the speed

    if (dirArr.current[0] === 'ArrowLeft') {
      if (currentMap[yPlayerIndex.current][xPlayerIndex.current - 1] === 0 || xBank.current > 0)
        if (
          yBank.current + 32 < 64 ||
          currentMap[yPlayerIndex.current - 1][xPlayerIndex.current] == 0
        ) {
          {
            setXTransformVar((prevCount) => prevCount + speedRef.current);
            xBank.current = xBank.current - speedRef.current;
            // console.log(yPlayerIndex.current,xPlayerIndex.current)

            if (xBank.current < 0) {
              // console.log("this one",xBank.current)

              xPlayerIndex.current = xPlayerIndex.current - 1;
              // console.log(yPlayerIndex.current, xPlayerIndex.current);
              // alert(xPlayerIndex.current)
              xBank.current = 60;
            }
          }
        }
    }

    //if current key is w, the y cordinate becomes  the previous state + the speed
    if (dirArr.current[0] === 'ArrowUp') {
      if (currentMap[yPlayerIndex.current - 1][xPlayerIndex.current] === 0 || yBank.current < 0) {
        if (
          xBank.current + 48 < 64 ||
          currentMap[yPlayerIndex.current - 1][xPlayerIndex.current + 1] == 0
        ) {
          setYTransformVar((prevCount) => prevCount + speedRef.current);
          // console.log(yPlayerIndex.current,xPlayerIndex.current)
          yBank.current = yBank.current + speedRef.current;
          if (yBank.current === 64) {
            yPlayerIndex.current = yPlayerIndex.current - 1;
            yBank.current = 0;
          }
        }
      }
    }
    //if current key is s, the y cordinate becomes  the previous state - the speed

    if (dirArr.current[0] === 'ArrowDown') {
      if (currentMap[yPlayerIndex.current + 1][xPlayerIndex.current] === 0 || yBank.current > 0) {
        // if (xBank.current+32<64 || newMap[yPlayerIndex.current+1][xPlayerIndex.current+1]==0)
        if (xBank.current < 16 || currentMap[yPlayerIndex.current][xPlayerIndex.current + 1] == 0) {
          setYTransformVar((prevCount) => prevCount - speedRef.current);
          yBank.current = yBank.current - speedRef.current;
          if (yBank.current < 0) {
            yPlayerIndex.current = yPlayerIndex.current + 1;
            yBank.current = 60;
          }
        }
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  //every time the current key changes this runs
  useEffect(() => {
    if (dirArr.current[0]) {
      setWalker('true');
      if (
        dirArr.current[0] === 'ArrowRight' ||
        dirArr.current[0] === 'ArrowLeft' ||
        dirArr.current[0] === 'ArrowUp' ||
        dirArr.current[0] === 'ArrowDown'
      ) {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
      }
    }

    if (!dirArr.current[0]) {
      setWalker('false');
    }
  }, [tick]);

  //update the style for the mpa character by transforming it according the new x and y variables
  //map and character share the varaibles since they move together
  return (
    <div>
      <div className="camera fade-in">
        <div>
          <div
            className="mapPSH pixel-art"
            style={{
              transform: `translate3d( ${xTransformVar}px, ${yTransformVar}px, 0 )`
            }}>
            {gridArray}
            <div
              className="character pixel-art"
              facing={facing.current}
              walking={walker}
              style={{
                transform: `translate3d( ${600 - xTransformVar}px, ${272 - yTransformVar}px, 0 )`
              }}>
              <div className="character_spritesheet pixel-art"></div>
            </div>

            <div
              className="guard1PSH pixel-art"
              style={{
                transform: `translate3d( ${100}px, ${780}px, 0 )`
              }}>
              <div className="guard1PSH_spritesheet pixel-art"></div>
            </div>

            <div
              className="guard2PSH pixel-art"
              style={{
                transform: `translate3d( ${300}px, ${780}px, 0 )`
              }}>
              <div className="guard2PSH_spritesheet pixel-art"></div>
            </div>

            <div
              className="guard2PSH pixel-art"
              style={{
                transform: `translate3d( ${50}px, ${320}px, 0 )`
              }}>
              <div className="guard2PSH_spritesheet pixel-art"></div>
            </div>

            <div
              className="general1RH2 pixel-art"
              style={{
                transform: `translate3d( ${760}px, ${760}px, 0 )`
              }}>
              <div className="general1RH2_spritesheet pixel-art"></div>
            </div>

            <div
              className="general1RH2 pixel-art"
              style={{
                transform: `translate3d( ${450}px, ${275}px, 0 )`
              }}>
              <div className="general1RH2_spritesheet pixel-art"></div>
            </div>

            <div
              className="presidentRH2 pixel-art"
              style={{
                transform: `translate3d( ${600}px, ${245}px, 0 )`
              }}>
              <div className="presidentRH2_spritesheet pixel-art"></div>
            </div>
          </div>
        </div>
        {textValue ? (
          <dialog id="dialogStyle" className={`${npcFace} textBox typewriter`} open>
            <p>{textValue}</p>
          </dialog>
        ) : null}
      </div>
    </div>
  );
};

export default PresidentSafeHouse;
