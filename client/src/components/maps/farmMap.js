import React, { useEffect, useState, useRef } from 'react';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map 40x 40 w grid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';
import '../../FarmMap.css';




const FarmMap = (props) => {
  //this sets the x Cordinate to transform the map and character location
  const [xTransformVar, setXTransformVar] = useState(-1240);
  //this sets the y Cordinate to transform the map and character location
  const [yTransformVar, setYTransformVar] = useState(-596);
  //
  const requestRef = useRef();
  //this sets the speed for the map to move. bigger number goes faster
  const speedRef = useRef(4);
  //
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
  const yPlayerIndex = useRef(14);
  const xPlayerIndex = useRef(29);
  const [gridArray, setGridArray] = useState([]);
  const [textValue, setTextValue] = useState(null);

  let currentMap2 = [
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  ];


  let currentMap = [
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 0, 0, 0, 4803, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 0, 0, 0, 4803, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 0, 0, 0, 4803, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 0, 4809, 4810, 4811, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 0, 4817, 4820, 4819, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 1, 0, 0, 0, 1, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 0, 0, 0, 0, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 0, 0, 0, 0, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1661, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 4707, 0, 0, 0, 0, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1662, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 4707, 319, 0, 0, 0, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1659, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 4707, 0, 0, 0, 0, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 0, 0, 0, 0, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 4707, 1468, 0, 0, 0, 0, 4707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1212, 1213, 1214, 1212, 1213, 1214, 1212,
      1213, 1214, 1212, 1213, 1214, 1212, 1213, 1214, 1212, 1213, 1214, 0, 0, 0,
      1212, 1213, 1214, 1212, 1213, 1214, 1212, 1213, 1214, 1212, 1213, 1214,
      1212, 1213, 1214, 1212, 1213, 1214, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1228, 1229, 1230, 1228, 1229, 1230, 1228,
      1229, 1230, 1228, 1229, 1230, 1228, 1229, 1230, 1228, 1229, 1230, 0, 0, 0,
      1228, 1229, 1230, 1228, 1229, 1230, 1228, 1229, 1230, 1228, 1229, 1230,
      1228, 1229, 1230, 1228, 1229, 1230, 1230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 0, 1504, 1504, 1662, 0, 0, 1502, 0,
      1502, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1502, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 1504, 1504, 1504, 1504, 1504, 1036, 0,
      0, 0, 1502, 0, 0, 0, 1502, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1502, 0, 1579, 0, 0,
      0, 0, 0, 0, 1502, 0, 0, 1565, 1566, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 1504, 1504, 459, 460, 459, 460, 461,
      459, 460, 461, 0, 1915, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1595, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 0, 475, 476, 475, 476, 477, 475,
      476, 477, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 1213, 1214, 491, 492, 491, 492, 493,
      491, 492, 493, 0, 0, 843, 844, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 1229, 1230, 507, 508, 507, 508, 509,
      507, 508, 509, 0, 0, 875, 876, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1502, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 859, 860, 651, 652, 653, 654, 655,
      656, 657, 658, 4015, 4016, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1581, 1582, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 875, 876, 667, 668, 669, 670, 671,
      672, 673, 674, 4034, 4035, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1915, 1915, 0, 0, 1597, 1598, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 1504, 864, 865, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1915, 1915, 0, 0, 0,
      0, 0, 1613, 1614, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 877, 880, 881, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1629, 1630, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 0, 1581, 1582, 1947, 0, 0, 0, 0, 0,
      0, 731, 732, 701, 701, 702, 701, 701, 702, 701, 701, 702, 701, 701, 732,
      734, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 0, 1597, 1598, 0, 0, 0, 0, 0, 0,
      4015, 4016, 4016, 1442, 1947, 0, 0, 0, 0, 0, 0, 1915, 0, 0, 0, 747, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 0, 1613, 1614, 0, 0, 0, 0, 0, 0,
      4034, 4035, 4035, 1458, 0, 0, 0, 453, 538, 455, 0, 0, 0, 0, 0, 763, 0, 0,
      0, 0, 0, 1915, 1915, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 1915, 1629, 1630, 1915, 0, 0, 0, 0,
      0, 0, 747, 0, 0, 0, 467, 468, 469, 470, 471, 458, 0, 0, 1947, 0, 747, 0,
      0, 1915, 1915, 0, 1502, 0, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 763,
      0, 0, 0, 483, 484, 485, 486, 487, 474, 489, 0, 0, 0, 763, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 747,
      0, 1915, 0, 499, 500, 501, 502, 503, 504, 505, 0, 0, 1915, 747, 0, 0, 0,
      0, 1915, 1568, 1569, 1570, 0, 0, 1502, 1502, 1266, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 2266, 2266, 2266, 2266, 2266, 0, 0, 0,
      0, 0, 0, 747, 0, 0, 0, 515, 516, 517, 518, 519, 520, 521, 701, 701, 732,
      747, 0, 0, 0, 0, 1583, 1584, 1585, 1586, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 3296, 3297, 817, 818, 818, 0, 0, 0, 0,
      0, 0, 763, 1222, 0, 0, 531, 532, 533, 534, 535, 536, 537, 537, 0, 1439,
      763, 0, 0, 0, 0, 1599, 1600, 1601, 1602, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 2813, 724, 724, 0, 0, 0, 0, 0, 0, 0,
      0, 747, 1457, 705, 0, 619, 652, 623, 624, 625, 652, 626, 706, 706, 1455,
      747, 0, 0, 0, 0, 1615, 1616, 1617, 1618, 0, 0, 0, 0, 1266, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 724, 724, 0, 4322, 4323, 0, 0, 0, 0,
      0, 0, 700, 701, 721, 0, 635, 636, 639, 0, 641, 636, 642, 722, 701, 702,
      703, 0, 0, 0, 0, 1915, 1632, 1633, 1634, 0, 0, 0, 0, 3435, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 3317, 3318, 3319, 4340, 4341, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1565, 1566, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1265, 2264, 2264, 2266, 2266, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3434, 2266, 1212, 1213, 1214, 1214, 1214,
      1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213,
      1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213,
      1213, 1213, 1213, 1213, 1213, 1213, 1213, 1213, 3435, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1228, 1229, 1228, 1229, 1230, 1230, 1230,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229,
      1229, 1229, 1229, 1229, 1229, 1229, 1229, 1229, 1232, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  ];


  // console.log('COORDINATE', yPlayerIndex.current, xPlayerIndex.current);
  // console.log(
  //   'VALUE Right',
  //   currentMap[yPlayerIndex.current][xPlayerIndex.current]
  // );


  //CSS GRID ON OFF USE EFFECT
  // useEffect(()=>{
  //   let tempGrid=[]
  //   for (let i=0; i<currentMap.length; i++){
  //     for (let j=0; j<currentMap[i].length; j++){
  //       tempGrid.push(<button onClick={()=> {console.log(`Coordinates ${i} - ${j}`)}} className="numbers" style={{
  //         gridColumn: j+1,
  //         gridRow: i+1,
  //         color: "white",
  //     }}
  //     > {i} - {j}

  //     </button>)

  //     }
  //   }
  // setGridArray(tempGrid)
  // },[])


// Console Log to test npc interation
console.log(textValue)


//CHARACTER DIALOGUE USE EFFECT
useEffect(() => {
    const dialogueAction = (event) => {
      if (event.key === 'a') {

        //Facing up
        if (facing.current === 'up') {
          //Jim NPC
          if (
            (yPlayerIndex.current === 23 && xPlayerIndex.current === 21) ||
            (yPlayerIndex.current === 23 && xPlayerIndex.current === 22)
          ) {
            setTextValue('Hi I am Jim')
            console.log("Hi I'm jim");
          }
          //YO Mama NPC
          if (
            (yPlayerIndex.current === 29 && xPlayerIndex.current === 21) ||
            (yPlayerIndex.current === 29 && xPlayerIndex.current === 22)
          ) {
            console.log("Hi I'm Yo Mama");
          }
          //Hot Girl
          if (
            (yPlayerIndex.current === 37 && xPlayerIndex.current === 14) ||
            (yPlayerIndex.current === 37 && xPlayerIndex.current === 15)
          ) {
            console.log("Hi I'm Hot girl");
          }
        }

        //Facing down
        if (!facing.current) {
          //Jim NPC
          if (
            (yPlayerIndex.current === 20 && xPlayerIndex.current === 21) ||
            (yPlayerIndex.current === 20 && xPlayerIndex.current === 22)
          ) {
            console.log("Hi I'm jim");
          }
          //YO Mama NPC
          if (
            (yPlayerIndex.current === 26 && xPlayerIndex.current === 21) ||
            (yPlayerIndex.current === 26 && xPlayerIndex.current === 22)
          ) {
            console.log("Hi I'm Yo Mama");
          }
          //Hot Girl
          if (
            (yPlayerIndex.current === 34 && xPlayerIndex.current === 14) ||
            (yPlayerIndex.current === 34 && xPlayerIndex.current === 15)
          ) {
            console.log("Hi I'm Hot girl");
          }
        }

        //Facing left
        if (facing.current === 'left') {
          if (
            (yPlayerIndex.current === 21 && xPlayerIndex.current === 23) ||
            (yPlayerIndex.current === 22 && xPlayerIndex.current === 23)
          ) {
            console.log("Hi I'm jim");
          }
          //YO Mama NPC
          if (
            (yPlayerIndex.current === 27 && xPlayerIndex.current === 23) ||
            (yPlayerIndex.current === 28 && xPlayerIndex.current === 23)
          ) {
            console.log("Hi I'm Yo Mama");
          }
          //Hot Girl
          if (
            (yPlayerIndex.current === 35 && xPlayerIndex.current === 16) ||
            (yPlayerIndex.current === 36 && xPlayerIndex.current === 16)
          ) {
            console.log("Hi I'm Hot girl");
          }
        }

        //Facing right
        if (facing.current === 'right') {
          if (
            (yPlayerIndex.current === 21 && xPlayerIndex.current === 20) ||
            (yPlayerIndex.current === 22 && xPlayerIndex.current === 20)
          ) {
            console.log("Hi I'm jim");
          }
          //YO Mama NPC
          if (
            (yPlayerIndex.current === 27 && xPlayerIndex.current === 20) ||
            (yPlayerIndex.current === 28 && xPlayerIndex.current === 20)
          ) {
            console.log("Hi I'm Yo Mama");
          }
          //Hot Girl
          if (
            (yPlayerIndex.current === 35 && xPlayerIndex.current === 13) ||
            (yPlayerIndex.current === 36 && xPlayerIndex.current === 13)
          ) {
            console.log("Hi I'm Hot girl");
          }
        }
      }
    }
    window.addEventListener('keydown', dialogueAction);
    return () => {
      window.removeEventListener('keydown', dialogueAction);
    };
  }, []);




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



  // UseEffect for transitiong between map Coordinates
  useEffect(() => {
    if (
      (yPlayerIndex.current === 5 && xPlayerIndex.current === 28) ||
      (yPlayerIndex.current === 5 && xPlayerIndex.current === 29) ||
      (yPlayerIndex.current === 5 && xPlayerIndex.current === 30)
    ) {
      props.active('townMap1', 'farmMap');
    }
    //FARMMAP
    if (yPlayerIndex.current === 35 && xPlayerIndex.current === 29) {
      props.active('indoorHouse10', 'farmMap');
    }
  }, [yTransformVar]);



  //UseEffect for keeping track of the previous maps and maps/player positions
  useEffect(() => {
    // console.log(props.previousMap);
    if (props.previousMap === 'townMap1') {
      //setYCord
      yPlayerIndex.current = 6;
      //setXcord
      xPlayerIndex.current = 29;
      //set xTransform
      setXTransformVar(-1240);
      //set yTransform
      setYTransformVar(-80);
      facing.current = 'down';
    }

    //indoorhouse 10
    if (props.previousMap === 'indoorHouse10') {
      //setYCord
      yPlayerIndex.current = 36;
      //setXcord
      xPlayerIndex.current = 29;
      //set xTransform
      setXTransformVar(-1244);
      //set yTransform
      setYTransformVar(-2004);
      facing.current = 'down';
    }
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

  // console.log([yPlayerIndex.current],[xPlayerIndex.current])

  //update the style for the mpa character by transforming it according the new x and y variables
  //map and character share the varaibles since they move together
  return (
    <div>
      <div className="camera fade-in">
        {/* <button style={{height: "1000px", }} onClick={()=>{console.log("Mike is a poker king")}}>Hi</button> */}

        <div>
          <div
            className="mapF pixel-art"
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
        <dialog className="textBox typewriter" open>
          <p>
            Have you seen the man with the weeping willow tree in front of his
            house? Be on 
            the lookout for Wiggins hiding underneath your bed before you sleep.
            Grab him and take him to the willow tree for a surprise from Mr. F.
          </p>
        </dialog>
      </div>
    </div>
  );
};

export default FarmMap;
