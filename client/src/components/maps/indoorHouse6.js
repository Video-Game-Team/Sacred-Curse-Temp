import React, { useEffect, useState, useRef } from 'react';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map 40x 40 w grid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';

import click1 from '../../audioclips/click1.mp3';
import text from '../../audioclips/Text.mp3';
import SnowMan from '../../audioclips/Snowman.mp3';

import '../../indoorHouse6.css';

const IndoorHouse6 = (props) => {
  //this sets the x Cordinate to transform the map and character location
  const [xTransformVar, setXTransformVar] = useState(364);
  //this sets the y Cordinate to transform the map and character location
  const [yTransformVar, setYTransformVar] = useState(-531);
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
    [4, 4, 4, 4, 1297, 1298, 2119, 2120, 2121, 0, 3689, 3690, 3691, 3692, 7],
    [
      1408, 1409, 1410, 18, 1313, 1314, 2135, 2136, 2137, 2995, 3705, 3706,
      3707, 3708, 21,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5827, 5828, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 5845, 5846, 0, 0, 0, 0, 0, 0, 0],
    [2995, 0, 0, 0, 0, 0, 1166, 1167, 0, 0, 0, 0, 0, 0, 3146],
    [0, 0, 0, 0, 1897, 0, 1182, 1183, 0, 1926, 0, 0, 0, 0, 3162],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3178],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1546, 1547, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1546, 1547],
    [1562, 1563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1562, 1563],
    [1578, 1579, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1578, 1579],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  console.log('COORDINATE', yPlayerIndex.current, xPlayerIndex.current);
  console.log(
    'VALUE Right',
    currentMap[yPlayerIndex.current][xPlayerIndex.current]
  );

  // useEffect(() => {
  //   let tempGrid = [];
  //   for (let i = 0; i < currentMap.length; i++) {
  //     for (let j = 0; j < currentMap[i].length; j++) {
  //       tempGrid.push(
  //         <button
  //           onClick={() => {
  //             console.log(`Coordi  nates ${i} - ${j}`);
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
    if (props.previousMap === 'saintAnna') {
      //setYCord
      yPlayerIndex.current = 13;
      //setXcord
      xPlayerIndex.current = 4;
      //set xTransform
      setXTransformVar(364);
      //set yTransform
      setYTransformVar(-531);
      facing.current = 'up';
    }
  }, []);

  //  //  //  //  //INDOOR USE EFFECT
  useEffect(() => {
    if (
      (yPlayerIndex.current === 14 && xPlayerIndex.current === 3) ||
      (yPlayerIndex.current === 14 && xPlayerIndex.current === 4)
    ) {
      props.active('saintAnna', 'indoorHouse6');
    }
  }, [yPlayerIndex.current, xPlayerIndex.current]);

  //CHARACTER DIALOGUE USE EFFECT
  useEffect(() => {
    const dialogueAction = (event) => {
      if (event.key === 'a') {
        //Facing up
        if (facing.current === 'up') {
          //Guard 1 Lower left NPC
          // if (
          //   (yPlayerIndex.current === 5 && xPlayerIndex.current === 11) ||
          //   (yPlayerIndex.current === 5 && xPlayerIndex.current === 12)
          // ) {
          //   setTextValue('Hi I am Guard1');
          //   console.log('Hi I am Guard1');
          // }
          // //YO Mama NPC
          // if (
          //   (yPlayerIndex.current === 3 && xPlayerIndex.current === 4) ||
          //   (yPlayerIndex.current === 3 && xPlayerIndex.current === 5)
          // ) {
          //   console.log("Hi I'm behind the counter");
          // }
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
          if (
            (yPlayerIndex.current === 4 && xPlayerIndex.current === 6) ||
            (yPlayerIndex.current === 4 && xPlayerIndex.current === 7)
          ) {
            clickAudio2();
            setNpcFace('faceGirlIH6');
            setTextValue('Hi, welcome to our sex chamber');
          }
          // //YO Mama NPC
          // if (
          //   (yPlayerIndex.current === 32 && xPlayerIndex.current === 38) ||
          //   (yPlayerIndex.current === 32 && xPlayerIndex.current === 39)
          // ) {
          //    console.log("Hi I'm behind the counter");
          // }
          //Hot Girl
          // if (
          //   (yPlayerIndex.current === 34 && xPlayerIndex.current === 14) ||
          //   (yPlayerIndex.current === 34 && xPlayerIndex.current === 15)
          // ) {
          //   console.log("Hi I'm Guard 3");
          // }
          //Hot Girl
          // if (
          //   (yPlayerIndex.current === 21 && xPlayerIndex.current === 33) ||
          //   (yPlayerIndex.current === 21 && xPlayerIndex.current === 34)
          // ) {
          //   console.log("Hi I'm guard 4");
          // }
        }

        //Facing left
        if (facing.current === 'left') {
          if (
            (yPlayerIndex.current === 5 && xPlayerIndex.current === 8) ||
            (yPlayerIndex.current === 6 && xPlayerIndex.current === 8)
          ) {
            clickAudio2();
            setNpcFace('faceGirlIH6');
            setTextValue('Hi, welcome to our sex chamber');
          }
          //YO Mama NPC
          // if (
          //   (yPlayerIndex.current === 33 && xPlayerIndex.current === 40) ||
          //   (yPlayerIndex.current === 34 && xPlayerIndex.current === 40)
          // ) {
          //     console.log("Hi I'm behind the counter");
          // }
          //Hot Girl
          // if (
          //   (yPlayerIndex.current === 35 && xPlayerIndex.current === 16) ||
          //   (yPlayerIndex.current === 36 && xPlayerIndex.current === 16)
          // ) {
          //   console.log("Hi I'm Guard 3");
          // }
          //Hot Girl
          // if (
          //   (yPlayerIndex.current === 22 && xPlayerIndex.current === 34) ||
          //   (yPlayerIndex.current === 23 && xPlayerIndex.current === 34)
          // ) {
          //   console.log("Hi I'm guard 4");
          // }
        }

        //Facing right
        if (facing.current === 'right') {
          if (
            (yPlayerIndex.current === 5 && xPlayerIndex.current === 5) ||
            (yPlayerIndex.current === 6 && xPlayerIndex.current === 5)
          ) {
            clickAudio2();
            setNpcFace('faceGirlIH6');
            setTextValue('Hi, welcome to our sex chamber');
          }
          //YO Mama NPC
          // if (
          //   (yPlayerIndex.current === 33 && xPlayerIndex.current === 37) ||
          //   (yPlayerIndex.current === 34 && xPlayerIndex.current === 37)
          // ) {
          //    console.log("Hi I'm behind the counter");
          // }
          //Hot Girl
          // if (
          //   (yPlayerIndex.current === 22 && xPlayerIndex.current === 22) ||
          //   (yPlayerIndex.current === 23 && xPlayerIndex.current === 22)
          // ) {
          //   console.log("Hi I'm Guard 3");
          // }
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
            currentMap[yPlayerIndex.current - 1][xPlayerIndex.current + 1] ===
              'door1'
          ) {
          }
          if (
            currentMap[yPlayerIndex.current - 1][xPlayerIndex.current] ===
              'sign1' &&
            64 - xBank.current > 32
          ) {
            console.log('sign1');
          }
          if (
            xBank.current + 32 > 64 &&
            currentMap[yPlayerIndex.current - 1][xPlayerIndex.current + 1] ===
              'sign2'
          ) {
            console.log('sign2');
          }
          if (
            currentMap[yPlayerIndex.current - 1][xPlayerIndex.current] ===
              'sign2' &&
            64 - xBank.current > 32
          ) {
            console.log('sign2');
          }
        }
        if (facing.current == null) {
          if (
            currentMap[yPlayerIndex.current + 1][xPlayerIndex.current] ===
              'sign1' &&
            xBank.current + 32 < 64
          ) {
            console.log('sign1');
          }
          if (
            currentMap[yPlayerIndex.current + 1][xPlayerIndex.current + 1] ===
            'sign2'
          ) {
            console.log('poopshit');
          }
          if (
            currentMap[yPlayerIndex.current + 1][xPlayerIndex.current] ===
              'sign2' &&
            xBank.current + 32 < 64
          ) {
            console.log('sign2');
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
      if (
        currentMap[yPlayerIndex.current][xPlayerIndex.current + 1] === 0 ||
        xBank.current < 0
      )
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
      if (
        currentMap[yPlayerIndex.current][xPlayerIndex.current - 1] === 0 ||
        xBank.current > 0
      )
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
      if (
        currentMap[yPlayerIndex.current - 1][xPlayerIndex.current] === 0 ||
        yBank.current < 0
      ) {
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
      if (
        currentMap[yPlayerIndex.current + 1][xPlayerIndex.current] === 0 ||
        yBank.current > 0
      ) {
        // if (xBank.current+32<64 || newMap[yPlayerIndex.current+1][xPlayerIndex.current+1]==0)
        if (
          xBank.current < 16 ||
          currentMap[yPlayerIndex.current][xPlayerIndex.current + 1] == 0
        ) {
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
            className="mapIH6 pixel-art"
            style={{
              transform: `translate3d( ${xTransformVar}px, ${yTransformVar}px, 0 )`,
            }}
          >
            {gridArray}
            <div
              className="character pixel-art"
              facing={facing.current}
              walking={walker}
              style={{
                transform: `translate3d( ${600 - xTransformVar}px, ${
                  272 - yTransformVar
                }px, 0 )`,
              }}
            >
              <div className="character_spritesheet pixel-art"></div>
            </div>
            <div
              className="girlIH6 pixel-art"
              style={{
                transform: `translate3d( ${394}px, ${230}px, 0 )`,
              }}
            >
              <div className="girlIH6_spritesheet pixel-art"></div>
            </div>
          </div>
        </div>

        {textValue ? (
          <dialog
            id="dialogStyle"
            className={`${npcFace} textBox typewriter`}
            open
          >
            <p>{textValue}</p>
          </dialog>
        ) : null}
      </div>
    </div>
  );
};

export default IndoorHouse6;
