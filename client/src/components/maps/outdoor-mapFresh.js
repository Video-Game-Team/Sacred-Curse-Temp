import React, { useEffect, useState, useRef } from 'react';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map 40x 40 w grid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';
import '../../App.css';




const OutDoorMapFresh = (props) => {
  //this sets the x Cordinate to transform the map and character location
  const [xTransformVar, setXTransformVar] = useState(-628);
  //this sets the y Cordinate to transform the map and character location
  const [yTransformVar, setYTransformVar] = useState(-740);
  //
  const requestRef = useRef();
  //this sets the speed for the map to move. bigger number goes faster
  const speedRef = useRef(4);

  const [tick, setTick] = useState(1);
  //correpsondds with a css class to tell it which version of the sprite to load. ie "left", "right"
  // const [facing.current, setFacing] = useState("right");
  const facing= useRef()
  //corresponds with a css class. determiines if the sprite gets animated or not
  const [walker, setWalker] = useState('up');
  // const [walkerArr, setWalkerkArr]= useState([])
  const dirArr = useRef([]);

  const xBank = useRef(0);
  const yBank = useRef(0);
  const yPlayerIndex = useRef(16);
  const xPlayerIndex = useRef(19);

  let newMap = [
    [
      9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12,
      9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12,
    ],
    [
      25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26,
      27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28,
      25, 26, 27, 28,
    ],
    [
      41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42,
      43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44,
      41, 42, 43, 44,
    ],
    [
      57, 58, 59, 551, 552, 553, 554, 555, 556, 557, 59, 60, 57, 58, 59, 60, 57,
      58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59,
      60, 57, 58, 59, 60,
    ],
    [
      9, 10, 11, 567, 568, 569, 570, 571, 572, 573, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 11, 12,
    ],
    [
      25, 26, 27, 583, 584, 585, 586, 587, 588, 589, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 26, 27, 28,
    ],
    [
      41, 42, 43, 599, 600, 601, 602, 603, 604, 605, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 42, 43, 44,
    ],
    [
      57, 58, 59, 615, 616, 617, 618, 619, 620, 621, "sign1", 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 58, 59, 60,
    ],
    [
      9, 10, 11, 631, 632, 633, 634, 635, 636, 637, 0, 0, 0, 0, 0, 0, 143, 144,
      0, 0, 0, 0, 0, 0, 0, 0, 551, 552, 553, 554, 555, 556, 557, 0, 0, 0, 9, 10,
      11, 12,
    ],
    [
      25, 26, 27, 647, 648, 649, 650, 651, 652, 653, 0, 0, 0, 0, 0, 0, 159, 160,
      0, 0, 0, 0, 0, 0, 0, 0, 567, 568, 569, 570, 571, 572, 573, 0, "sign2", 0, 25,
      26, 27, 28,
    ],
    [
      41, 42, 43, 663, 664, 665, 666, 667, 668, 669, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 73, 74, 75, 76, 77, 583, 584, 585, 586, 587, 588, 589, 0, 0, 0, 41,
      42, 43, 44,
    ],
    [
      57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 90,
      91, 92, 93, 599, 600, 601, 602, 603, 604, 605, 0, 0, 0, 57, 58, 59, 60,
    ],
    [
      9, 10, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105,
      106, 107, 108, 109, 615, 616, 617, 618, 619, 620, 621, 0, 0, 0, 9, 10, 11,
      12,
    ],
    [
      25, 26, 27, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121,
      122, 123, 124, 125, 631, 632, 633, 634, 635, 636, 637, 0, 0, 0, 25, 26,
      27, 28,
    ],
    [
      41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137,
      138, 139, 140, 141, 647, 648, 649, 650, 651, 652, 653, 0, 0, 0, 41, 42,
      43, 44,
    ],
    [
      57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
      154, 155, 156, 157, 663, 664, 665, 666, 667, 668, 669, 0, 0, 0, 57, 58,
      59, 60,
    ],
    [
      9, 10, 11, 12, 0, 143, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 11, 12,
    ],
    [
      25, 26, 27, 28, 0, 159, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 26, 27, 28,
    ],
    [
      41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 42, 43, 44,
    ],
    [
      57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143,
      144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 58, 59, 60,
    ],
    [
      9, 10, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159,
      160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 9, 10, 11, 12,
    ],
    [
      25, 26, 27, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 143, 144, 0, 0, 0, 0, 101, 101, 101, 25, 26, 27, 28,
    ],
    [
      41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 159, 160, 0, 0, 0, 0, 85, 85, 85, 41, 42, 43, 44,
    ],
    [
      57, 58, 59, 60, 0, 143, 144, 0, 0, 0, 143, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101, 101, 57, 58, 59, 60,
    ],
    [
      9, 10, 11, 12, 0, 159, 160, 0, 0, 0, 159, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, "sign2", 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 9, 10, 11, 12,
    ],
    [
      25, 26, 27, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101, 101, 25, 26, 27, 28,
    ],
    [
      41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 143, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 41, 42, 43, 44,
    ],
    [
      57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 159, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101, 101, 57, 58, 59, 60,
    ],
    [
      9, 10, 11, 12, 0, 0, 0, 0, 0, 0, 143, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 9, 10, 11, 12,
    ],
    [
      25, 26, 27, 28, 0, 0, 0, 0, 0, 0, 159, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101, 101, 25, 26, 27, 28,
    ],
    [
      41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143,
      144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 41, 42, 43, 44,
    ],
    [
      57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159,
      160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101, 101, 57, 58, 59, 60,
    ],
    [
      9, 10, 11, 12, 0, 0, 0, "sign2", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 85, 85, 9, 10, 11, 12,
    ],
    [
      25, 26, 27, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 143, 144, 0, 0, 0, 0, 0, 101, 101, 101, 25, 26, 27, 28,
    ],
    [
      41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 159, 160, 0, 0, 0, 0, 0, 85, 85, 85, 41, 42, 43, 44,
    ],
    [
      57, 58, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 101, 101, 57, 58, 59, 60,
    ],
    [
      9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12,
      9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12,
    ],
    [
      25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26,
      27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28, 25, 26, 27, 28,
      25, 26, 27, 28,
    ],
    [
      41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42,
      43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44, 41, 42, 43, 44,
      41, 42, 43, 44,
    ],
    [
      57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58,
      59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60, 57, 58, 59, 60,
      57, 58, 59, 60,
    ],
  ];

  //create an array. If the current array does not contain the value. shift it.

// console.log(yPlayerIndex.current, xPlayerIndex.current)
// console.log(newMap[yPlayerIndex.current][xPlayerIndex.current])
  //event listen for enter
  useEffect(()=>{

    window.addEventListener('keydown', (e)=>{
      if (e.key=== 'Enter'){
        if (facing.current==="up"){
            if (xBank.current+32>64 && newMap[yPlayerIndex.current-1][xPlayerIndex.current+1]==="sign1"){
              }
            if(newMap[yPlayerIndex.current-1][xPlayerIndex.current]==="sign1"  && 64-xBank.current>32 ){
              console.log("sign1")
            }
            if (xBank.current+32>64 && newMap[yPlayerIndex.current-1][xPlayerIndex.current+1]==="sign2"){
              console.log("sign2")
            }
            if(newMap[yPlayerIndex.current-1][xPlayerIndex.current]==="sign2"  && 64-xBank.current>32 ){
            console.log("sign2")
            }
          }
       if (facing.current== null){
        if (newMap[yPlayerIndex.current+1][xPlayerIndex.current]==='sign1' && xBank.current+32<64){
          console.log("sign1")
        }
        if (newMap[yPlayerIndex.current+1][xPlayerIndex.current+1]==='sign2'){
          console.log("poopshit")
        }
        if (newMap[yPlayerIndex.current+1][xPlayerIndex.current]==='sign2' && xBank.current+32<64){
          console.log("sign2")
        }


  }
    }
      })
    
  },[])
  console.log(dirArr.current)


    //listens for the current down key and saves it as the currentkey state
    //wrapping in a useEffect prevents compounding event listeners
useEffect(()=>{

  window.addEventListener('keydown', (event) => {

    
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
  }
});

//when the key is lifted it sets the current key to null to stop map movement and the walker to false to stop the animation
window.addEventListener('keyup', (event) => {
  console.log("run")
  if (dirArr.current.indexOf(event.key) > -1) {
    let newArr2 = dirArr.current.filter((el) => el != event.key);
    dirArr.current = newArr2;
    setTick((prevCount) => prevCount + 1);
  }
})
},[])


//facing logic. It needed to be removed from the animate because it was cuasing
dirArr.current[0]==='ArrowRight' ?  facing.current="right" :  dirArr.current[0]==='ArrowLeft' ?  facing.current="left" :  dirArr.current[0]==='ArrowUp' ?  facing.current="up" :  dirArr.current[0] == 'ArrowDown' ? facing.current= null : null;
  
  //animate is a reccursive function that takes the current key and updates the cordinate variables depending on which direction is pushed. It also sets which way the character is facing
  const animate = () => {
 
    //if current key is d, the x cordinate becomes  the previous state + the speed

    if (dirArr.current[0] === 'ArrowRight') {
   
    

      if (
        newMap[yPlayerIndex.current][xPlayerIndex.current + 1] === 0 ||
        xBank.current < 0
      ) if (
        yBank.current + 32 < 64 ||
        newMap[yPlayerIndex.current-1][xPlayerIndex.current + 1] == 0
      ){ {
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
        newMap[yPlayerIndex.current][xPlayerIndex.current - 1] === 0 ||
        xBank.current > 0
      ) if (
        yBank.current + 32 < 64 ||
        newMap[yPlayerIndex.current-1][xPlayerIndex.current] == 0
      ){{
        setXTransformVar((prevCount) => prevCount + speedRef.current);
        ;
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
        newMap[yPlayerIndex.current - 1][xPlayerIndex.current] === 0 ||
        yBank.current < 0
      ) {  if (
        xBank.current + 48 < 64 ||
        newMap[yPlayerIndex.current-1][xPlayerIndex.current + 1] == 0
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
        newMap[yPlayerIndex.current + 1][xPlayerIndex.current] === 0 ||
        yBank.current > 0
      ) {
        // if (xBank.current+32<64 || newMap[yPlayerIndex.current+1][xPlayerIndex.current+1]==0)
        if (
          xBank.current  < 16 ||
          newMap[yPlayerIndex.current][xPlayerIndex.current + 1] == 0
        ) 
        {
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

  // Matt Birnholtz is going to go bald
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
      <div className="camera">
        <div>
          <div
            className="map pixel-art"
            style={{
              transform: `translate3d( ${xTransformVar}px, ${yTransformVar}px, 0 )`,
            }}
          >
            <div
              className="character pixel-art"
              facing={facing.current}
              walking={walker}
              style={{
                transform: `translate3d( ${-xTransformVar}px, ${-yTransformVar}px, 0 )`,
              }}
            >
              <div className="character_spritesheet pixel-art"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutDoorMapFresh;
