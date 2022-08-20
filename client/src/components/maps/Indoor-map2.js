// import React, { useEffect, useState } from 'react';
// import images from './index';
// import LeftWalker from '../../assets/images/leftWalker.png';
// import RightWalker from '../../assets/images/rightWalker.png';
// import UpWalker from '../../assets/images/upWalker.png';
// import DownWalker from '../../assets/images/downWalker.png';
// import EmptyCanvas from '../../assets/images/newone.png';
// import BackgroundImage1 from '../../assets/maps/map 40x 40 w grid.png';
// import '../../App.css';

// const Indoormap2 = (props) => {
//   const [playerInd, setPlayerInd] = useState(378);
//   const mapArr = [
//     5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0,
//     0, 0, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 0, 69, 5, 5, 0, 0, 70, 70, 70,
//     0, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 0, 0, 5, 5, 0, 0, 70,
//     70, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0,
//     5, 5, 0, 0, 0, 0, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 134, 135, 136, 0, 0, 0,
//     0, 172, 173, 174, 175, 0, 0, 0, 0, 0, 0, 0, 5, 5, 150, 151, 152, 0, 0, 0, 0,
//     188, 189, 190, 191, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 204,
//     205, 206, 207, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 70, 0, 70,
//     0, 0, 0, 0, 0, 0, 103, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 70, 0, 0, 5, 5, 133, 133, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//     5,
//   ];

//   const goldKey={
//     text: "Hi Mike"
//   }
//   const [currentMap, setCurrentMap] = useState();
//   //player position x and y
//   const [xPos, setXPos] = useState(-162);
//   const [yPos, setYPos] = useState(-151);

//   //x y coordinates of player position also
//   const [cord, setCord] = useState('80px 80px');

//   // current sprite loaded
//   const [sprite, setSprite] = useState(DownWalker);

//   //event listener for button
//   function wrap(e) {
//     if (e.key === 'q' && sprite === LeftWalker && mapArr[playerInd - 1] === 152) {
//       props.adder(goldKey)
//     }
//      if (e.key === 'q' && sprite === LeftWalker && mapArr[playerInd -1] === 136) {
//        props.adder(goldKey);
//      }


//     if (e.key === 'a' && mapArr[playerInd - 1] === 0) {
//       setXPos(xPos + 32);
//       setSprite(LeftWalker);
//       let newPos = playerInd - 1;
//       setPlayerInd(newPos);
//     }

//     if (e.key === 'w' && mapArr[playerInd - 20] === 0) {
//       setYPos(yPos + 32);
//       console.log('up');
//       setSprite(UpWalker);
//       let newPos = playerInd - 20;
//       setPlayerInd(newPos);
//     }
//     if (e.key === 'd' && mapArr[playerInd + 1] === 0) {
//       setXPos(xPos - 32);
//       console.log('right');
//       setSprite(RightWalker);
//       let newPos = playerInd + 1;
//       setPlayerInd(newPos);
//     }
//     if (e.key === 's' && mapArr[playerInd + 20] === 0) {
//       setYPos(yPos - 32);
//       console.log('down');
//       setSprite(DownWalker);
//       let newPos = playerInd + 20;
//       setPlayerInd(newPos);
//     }
//   }

//   //
//   useEffect(() => {
//     let newX = xPos.toString() + 'px';
//     let newY = yPos.toString() + 'px';
//     setCord(newX + ' ' + newY);
//     console.log(cord);
//   }, [xPos]);

//   useEffect(() => {
//     let newX = xPos.toString() + 'px';
//     let newY = yPos.toString() + 'px';
//     setCord(newX + ' ' + newY);
//     console.log(cord);
//   }, [yPos]);
//   console.log(BackgroundImage1);

//   // whole map is a button - giving that button onkeyppress listener called wrap
//   return (
//     <div>
//       <button onKeyPress={wrap}>
//         {/* /*This is the sprite/* */}
//         <img className="happy" src={sprite} alt="hi" />
//         <img
//           style={{
//             backgroundPosition: cord,
//           }}
//           className="butt2"
//           src={EmptyCanvas}
//           alt="butt"
//         />
//       </button>
//     </div>
//   );
// };

// export default Indoormap2;

import React, { useEffect, useState, useRef } from 'react';
// import images from './index';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map 40x 40 w grid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';
import '../../App.css';

const OutDoorMapFresh = (props) => {

    


  // start in the middle of the map (state of character)
  let x = 850;
  let y = 260;
//   const held_directions = []; // State of which arrow keys we are holding down
  const speed = 1.5; // determines how many pixels per frame the character is going to move
  // This will determine if the player is holding any actions down, then based on that, reposition the character on the map where they should be
  

  const [held_directions, setHeldDirections]= useState([])
  const [newMap, setNewMap] = useState(null)
const [newChar, setNewChar]= useState(null)
  const [direction, setDirection] = useState(held_directions[0]);
    const [walker, setWalker]= useState("false");


  const placeCharacter1 = (e) => {

    
  

    if (e.key === 'a' && held_directions.indexOf("left") === -1) {
        let dir= 'left';
        held_directions.unshift(dir)



    }

   if (e.key === 'w' && held_directions.indexOf("up") === -1) {
     
    
        let dir= 'up';
        held_directions.unshift(dir)


   }

   if (e.key === 'd' && held_directions.indexOf("right") === -1) {
     

        let dir= 'right';
        held_directions.unshift(dir)


   }
   if (e.key === 's' && held_directions.indexOf("down") === -1) {
    
    
        let dir= 'down';
        held_directions.unshift(dir)


   }
    // This will get the pixel size from the css byt grabbing the "--pixel-size from the css class". This will convert it all to a string?
    const pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--pixel-size'
      )
    );

    // He likes to use arrays for this, this will keep track of the order that the key movments where triggered by the user, in case there is a misfire, the order will be preserved in an array. The x and y pos are oblviously pixel positions top and left bottom

    const held_direction = held_directions[0];
    if (held_direction) {
      if (held_direction === directions.right) {
        x += speed;
      }
      if (held_direction === directions.left) {
        x -= speed;
      }
      if (held_direction === directions.down) {
        y += speed;
      }
      if (held_direction === directions.up) {
        y -= speed;
      }
      // The line below will say, if there is a direction being held, then trigger the css class "facing" in conjuction with the "held_direction" direction
    //   character.setAttribute('facing', held_direction);

    }
  
    setDirection(held_direction)
    // walker="true" ? setWalker("false") : setWalker("true")
    // This below will trigger the "walking" css animation if a direction is held down
    // character.setAttribute('walking', held_direction ? 'true' : 'false');


    const camera_left = pixelSize * 66;
    const camera_top = pixelSize * 42;



    setNewMap(`translate3d( ${-x * pixelSize + camera_left}px, ${
        -y * pixelSize + camera_top
      }px, 0 )`)
    
      setNewChar(`translate3d( ${-x * pixelSize + camera_left}px, ${
          -y * pixelSize + camera_top
        }px, 0 )`)
      console.log(newMap)
      console.log(newChar)
    // map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    //   -y * pixelSize + camera_top
    // }px, 0 )`;
   
    

    // This will keep the code performant for the browser. This is a good rule to us, the "translate3d"
    // character.style.transform = `translate3d( ${x * pixelSize}px, ${
    //   y * pixelSize
    // }px, 0 )`;
  };

const placeCharacter2 = (e) => {
    const dir = keys[e.which];
    const index = held_directions.indexOf(dir);
    if (index > -1) {
      held_directions.splice(index, 1);
    }
}
   


   
  // Set up the game loop - this is the repetitive thing that happens every frame
  const step = () => {
    // placeCharacter();
    window.requestAnimationFrame(() => {
      step();
    });
  };
  step(); // kick off the first step!

  /* Direction key state */
  const directions = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
  };
  const keys = {
    87: directions.up,
    65: directions.left,
    68: directions.right,
    83: directions.down,
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  };



//   document.addEventListener('keydown', (e) => {
//     const dir = keys[e.which];
//     if (dir && held_directions.indexOf(dir) === -1) {
//       held_directions.unshift(dir);
//     }
//   });

  function wrap(e) {

    

   //door 1 logic
   if (e.key === 'w' && mapArr[playerInd - 40] === h1) {
     props.active('indoorMap1');
   }

   //door 2 logic
   if (e.key === 'w' && mapArr[playerInd - 40] === h2) {
     props.active('indoorMap2');
   }
 }

let h1 = 1;
let h2 = 2;

  const [playerInd, setPlayerInd] = useState(451);
  const mapArr = [
    9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12,
    9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12,
    25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27,
    28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26,
    27, 28, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41,
    42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44,
    41, 42, 43, 44, 57, 58, 59, 551, 552, 553, 554, 555, 556, 557, 59, 60, 57,
    58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60,
    57, 58, 59, 60, 57, 58, 59, 60, 9, 10, 11, 567, 568, 569, 570, 571, 572,
    573, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 9, 10, 11, 12, 25, 26, 27, 583, 584, 585, 586, 587, 588, 589, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 26,
    27, 28, 41, 42, 43, 599, 600, 601, 602, 603, 604, 605, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 42, 43, 44, 57,
    58, 59, 615, 616, 617, 618, 619, 620, 621, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 58, 59, 60, 9, 10, 11, 631,
    632, 633, 634, 635, 636, 637, 0, 0, 0, 0, 0, 0, 143, 144, 0, 0, 0, 0, 0, 0,
    0, 0, 551, 552, 553, 554, 555, 556, 557, 0, 0, 0, 9, 10, 11, 12, 25, 26, 27,
    647, 648, 649, 650, 651, 652, 653, 0, 0, 0, 0, 0, 0, 159, 160, 0, 0, 0, 0,
    0, 0, 0, 0, 567, 568, 569, 570, 571, 572, 573, 0, 3, 0, 25, 26, 27, 28, 41,
    42, 43, 663, 664, 665, h1, 667, 668, 669, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    73, 74, 75, 76, 77, 583, 584, 585, 586, 587, 588, 589, 0, 0, 0, 41, 42, 43,
    44, 57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89,
    90, 91, 92, 93, 599, 600, 601, 602, 603, 604, 605, 0, 0, 0, 57, 58, 59, 60,
    9, 10, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 106,
    107, 108, 109, 615, 616, 617, 618, 619, 620, 621, 0, 0, 0, 9, 10, 11, 12,
    25, 26, 27, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 122,
    123, 124, 125, 631, 632, 633, 634, 635, 636, 637, 0, 0, 0, 25, 26, 27, 28,
    41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 138,
    139, 140, 141, 647, 648, 649, 650, 651, 652, 653, 0, 0, 0, 41, 42, 43, 44,
    57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 154,
    155, 156, 157, 663, 664, 665, h2, 667, 668, 669, 0, 0, 0, 57, 58, 59, 60, 9,
    10, 11, 12, 0, 143, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 11, 12, 25, 26, 27, 28, 0, 159,
    160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 25, 26, 27, 28, 41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 42,
    43, 44, 57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    143, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 58, 59, 60, 9, 10, 11,
    12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159, 160, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 85, 85, 85, 9, 10, 11, 12, 25, 26, 27, 28, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143, 144, 0, 0, 0, 0,
    101, 101, 101, 25, 26, 27, 28, 41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159, 160, 0, 0, 0, 0, 85, 85, 85, 41,
    42, 43, 44, 57, 58, 59, 60, 0, 143, 144, 0, 0, 0, 143, 144, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101, 101, 57, 58, 59,
    60, 9, 10, 11, 12, 0, 159, 160, 0, 0, 0, 159, 160, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 9, 10, 11, 12, 25, 26,
    27, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 101, 101, 101, 25, 26, 27, 28, 41, 42, 43, 44, 0, 0, 0, 0,
    0, 0, 143, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 85, 85, 85, 41, 42, 43, 44, 57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 159, 160,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101,
    101, 57, 58, 59, 60, 9, 10, 11, 12, 0, 0, 0, 0, 0, 0, 143, 144, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 9, 10, 11,
    12, 25, 26, 27, 28, 0, 0, 0, 0, 0, 0, 159, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101, 101, 25, 26, 27, 28, 41, 42,
    43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143, 144, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 41, 42, 43, 44, 57, 58, 59, 60, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159, 160, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 101, 101, 101, 57, 58, 59, 60, 9, 10, 11, 12, 0, 0, 0, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85,
    9, 10, 11, 12, 25, 26, 27, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 143, 144, 0, 0, 0, 0, 0, 101, 101, 101, 25, 26, 27, 28,
    41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 159, 160, 0, 0, 0, 0, 0, 85, 85, 85, 41, 42, 43, 44, 57, 58, 59, 60,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 101, 101, 101, 57, 58, 59, 60, 9, 10, 11, 12, 9, 10, 11, 12, 9,
    10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9,
    10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 25, 26, 27, 28, 25, 26, 27, 28,
    25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27,
    28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 41, 42, 43, 44, 41, 42,
    43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41,
    42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 57, 58, 59, 60,
    57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59,
    60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60,
  ];


  const [currentMap, setCurrentMap] = useState();
  //player position x and y


  //x y coordinates of player position also

  // current sprite loaded
  const [sprite, setSprite] = useState(DownWalker);
  
  //// tells us when the character is moving, how many pixels per frame do they move


  
  //event listener for button
  
  
  //
  

  





  // whole map is a button - giving that button onkeyppress listener called wrap
  return (
    <div>
        <button onKeyDown={placeCharacter1}   > 

    <div className="camera">
        <div className="map pixel-art"
        style={{
            transform: newMap
           

        }}>
            <div  className= "character" facing={direction} walking= {walker}>
                
                <div className="character_spritesheet pixel-art"></div>
            </div>
        </div>
    </div>
    </button>
    </div>


      
  );
}

export default OutDoorMapFresh;
