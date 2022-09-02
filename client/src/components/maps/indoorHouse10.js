import React, { useEffect, useState, useRef } from 'react';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map 40x 40 w grid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';
import '../../indoorHouse10.css';

const IndoorHouse10 = (props) => {
  //this sets the x Cordinate to transform the map and character location
  const [xTransformVar, setXTransformVar] = useState(420);
  //this sets the y Cordinate to transform the map and character location
  const [yTransformVar, setYTransformVar] = useState(108);
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
  const yPlayerIndex = useRef(3);
  const xPlayerIndex = useRef(3);
  const [gridArray, setGridArray] = useState([]);
  const [textValue, setTextValue] = useState(null);

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
  //   [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  // ];

  let currentMap = [
    [3, 4, 5, 1858, 1859, 1860, 2573, 2574, 2575, 2576, 5, 1855, 5, 2628, 13],
    [
      17, 18, 19, 1874, 1875, 1876, 2589, 2590, 2591, 2592, 19, 1871, 2102,
      2644, 27,
    ],
    [3221225513, 2747, 2748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41],
    [3221225513, 2763, 2764, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 2739, 5528, 5529, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 2755, 5547, 5548, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 2536, 2537, 2538, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 2552, 2553, 2554, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 2739, 2569, 2739, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 2755, 0, 2755, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41],
    [3221225513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  // console.log('COORDINATE', yPlayerIndex.current, xPlayerIndex.current);
  // console.log(
  //   'VALUE Right',
  //   currentMap2[yPlayerIndex.current][xPlayerIndex.current]
  // );

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
  //           {i} - {j}
  //           {/* {currentMap[i][j]} */}
  //         </button>
  //       );
  //     }
  //   }
  //   setGridArray(tempGrid);
  // }, []);

  useEffect(() => {
    if (props.previousMap === 'farmMap') {
      //setYCord
      yPlayerIndex.current = 13;
      //setXcord
      xPlayerIndex.current = 7;
      //set xTransform
      setXTransformVar(168);
      //set yTransform
      setYTransformVar(-535);
      facing.current = 'up';
    }
  }, []);

  //  //  //INDOOR USE EFFECT
  useEffect(() => {
    if (
      (yPlayerIndex.current === 14 && xPlayerIndex.current === 6) ||
      (yPlayerIndex.current === 14 && xPlayerIndex.current === 7) ||
      (yPlayerIndex.current === 14 && xPlayerIndex.current === 8)
    ) {
      props.active('farmMap', 'indoorHouse10');
    }
  }, [yPlayerIndex.current]);



  // //CHARACTER DIALOGUE USE EFFECT
  useEffect(() => {
          if (
            (yPlayerIndex.current === 3 && xPlayerIndex.current === 3) 
          ) {
            setTextValue("Ahhhh, what a night. I feel really rested!");
          }
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
            className="mapIH10 pixel-art"
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
          </div>
        </div>
        {textValue ? (
          <dialog className="textBox typewriter" open>
            <p>{textValue}</p>
          </dialog>
        ) : null}
      </div>
    </div>
  );
};


export default IndoorHouse10;
