import React, { useEffect, useState, useRef } from 'react';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map40x40wgrid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';
import '../../saintAnnaHidden.css';

const SaintAnnaHidden = (props) => {
  //this sets the x Cordinate to transform the map and character location
  const [xTransformVar, setXTransformVar] = useState(-796);
  //this sets the y Cordinate to transform the map and character location
  const [yTransformVar, setYTransformVar] = useState(-2004);
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
  const yPlayerIndex = useRef(36);
  const xPlayerIndex = useRef(22);
  const [gridArray, setGridArray] = useState([]);

  // let currentMap2 = [
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  // ];

  let currentMap = [
    [
      127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127,
      128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128, 127, 128,
      127, 128, 127, 128, 127, 128, 127
    ],
    [
      79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79,
      80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79
    ],
    [
      95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95,
      96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95
    ],
    [
      111, 112, 111, 112, 111, 32, 32, 32, 32, 32, 111, 112, 111, 112, 111, 112, 111, 112, 111, 112,
      111, 112, 111, 112, 111, 112, 111, 112, 111, 112, 111, 112, 111, 112, 111, 112, 111, 112, 111,
      112, 111, 112, 111, 112, 111
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
      40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 147, 4098, 4099, 0, 147, 147, 4098, 4099, 0, 147,
      147, 4098, 4099, 0, 147, 147, 4098, 4099, 0, 147, 147, 4098, 4099, 0, 4101, 40, 40, 32, 32,
      32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 158, 4113, 4114, 4115, 4116, 4117, 4113, 4114, 4115,
      4116, 4117, 4113, 4114, 4115, 4116, 4117, 4113, 4114, 4115, 4116, 4117, 4113, 4114, 4115,
      4116, 4117, 32, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 4129, 4130, 4131, 4132, 4133, 4129, 4130, 4131,
      4132, 4133, 4129, 4130, 4131, 4132, 4133, 4129, 4130, 4131, 4132, 4133, 4129, 4130, 4131,
      4132, 4133, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 4145, 4146, 4147, 4148, 4149, 4145, 4146, 4147,
      4148, 4149, 4145, 4146, 4147, 4148, 4149, 4145, 4146, 4147, 4148, 4149, 4145, 4146, 4147,
      4148, 1, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 0, 0, 4163, 4164, 0, 0, 0, 4163, 4164, 0, 0, 0,
      4163, 4164, 0, 0, 0, 4163, 4164, 0, 0, 0, 4163, 4164, 1, 32, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 4098, 4099, 0, 4101, 4092, 0, 4098, 4099, 0, 4101, 0,
      0, 4098, 4099, 0, 4101, 0, 4098, 4099, 0, 4101, 0, 0, 4098, 4099, 0, 4101, 32, 32, 32, 32, 32,
      32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4113, 4114, 4115, 4116, 4117, 0, 4113, 4114, 4115, 4116,
      4117, 0, 4113, 4114, 4115, 4116, 4117, 4113, 4114, 4115, 4116, 4117, 0, 4113, 4114, 4115,
      4116, 4117, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4129, 4130, 4131, 4132, 4133, 0, 4129, 4130, 4131, 4132,
      4133, 0, 4129, 4130, 4131, 4132, 4133, 4129, 4130, 4131, 4132, 4133, 0, 4129, 4130, 4131,
      4132, 4133, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4145, 4146, 4147, 4148, 4149, 0, 4145, 4146, 4147, 4148,
      4149, 0, 4145, 4146, 4147, 4148, 4149, 4145, 4146, 4147, 4148, 4149, 0, 4145, 4146, 4147,
      4148, 4149, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 4163, 4164, 0, 0, 0, 0, 4163, 4164, 0, 5281, 0,
      5283, 4163, 4164, 0, 0, 0, 4163, 4164, 0, 0, 0, 0, 4163, 4164, 0, 32, 32, 32, 32, 32, 32, 32,
      32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 4210, 4211, 4212, 0, 4101, 0, 4210, 4211, 4212, 4101,
      5297, 5298, 5299, 5300, 5301, 0, 4098, 4090, 4091, 4092, 0, 4098, 4099, 4210, 4211, 1, 40, 32,
      32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 4113, 4114, 4115, 4116, 4117, 4113, 4114, 4115, 4116,
      4117, 5313, 5314, 5315, 5316, 5317, 4113, 4114, 4115, 4116, 4117, 4113, 4114, 4115, 4116,
      4117, 1, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 4129, 4130, 4131, 4132, 4133, 4129, 4130, 4131, 4132,
      4133, 5329, 5330, 5331, 5332, 5333, 4129, 4130, 4131, 4132, 4133, 4129, 4130, 4131, 4132,
      4133, 1, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 4145, 4146, 4147, 4148, 4149, 4145, 4146, 4147, 4148,
      4149, 5345, 5346, 5347, 5348, 5349, 4145, 4146, 4147, 4148, 4149, 4145, 4146, 4147, 4148,
      4149, 1, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 0, 4163, 4164, 0, 0, 0, 4163, 4164, 0, 5361, 5362,
      5363, 5364, 5365, 0, 0, 4163, 4164, 0, 0, 0, 4163, 4164, 309, 1, 40, 32, 32, 32, 32, 32, 32,
      32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 0, 54, 4098, 4099, 0, 4101, 4098, 4099, 4090, 4091, 4092, 0,
      5377, 5309, 5310, 5311, 5381, 0, 4210, 4211, 4212, 0, 4101, 4090, 4091, 309, 4101, 1, 32, 32,
      32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4113, 4114, 4115, 4116, 4117, 4114, 4115, 4116, 4117, 0,
      0, 5393, 5325, 5326, 5327, 5397, 0, 4113, 4114, 4115, 4116, 4117, 4114, 4115, 4116, 4117, 1,
      32, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4129, 4130, 4131, 4132, 4133, 4130, 4131, 4132, 4133, 0,
      0, 5409, 5410, 5411, 0, 5413, 0, 4129, 4130, 4131, 4132, 4133, 4130, 4131, 4132, 4133, 1, 40,
      32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4145, 4146, 4147, 4148, 4149, 4146, 4147, 4148, 4149, 0,
      0, 0, 0, 0, 0, 0, 0, 4145, 4146, 4147, 4148, 4149, 4146, 4147, 4148, 4149, 1, 40, 32, 32, 32,
      32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 4163, 4164, 0, 0, 4163, 4164, 0, 0, 9677, 9678, 0,
      0, 0, 0, 0, 0, 0, 4163, 4164, 0, 0, 4163, 4164, 0, 1, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 4090, 4091, 4092, 0, 4090, 4091, 4092, 0, 0, 9798,
      9799, 0, 0, 0, 0, 0, 4068, 4069, 4091, 4092, 4089, 4090, 4091, 4092, 4093, 1, 40, 32, 32, 32,
      32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 4101, 0, 4098, 4099, 0, 4101, 4068, 4069, 9919, 0,
      0, 0, 0, 0, 0, 0, 0, 4098, 4099, 0, 4101, 0, 0, 0, 1, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 0, 4113, 4114, 4115, 4116, 4117, 0, 0, 9430, 3669,
      0, 0, 0, 3669, 3669, 0, 4113, 4114, 4115, 4116, 4117, 0, 0, 0, 1, 40, 32, 32, 32, 32, 32, 32,
      32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 0, 4129, 4130, 4131, 4132, 4133, 0, 0, 25, 3635,
      233, 0, 235, 2684354561, 106, 0, 4129, 4130, 4131, 4132, 4133, 0, 0, 0, 1, 40, 32, 32, 32, 32,
      32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 0, 4145, 4146, 4147, 4148, 4149, 0, 0, 1, 3651,
      217, 0, 219, 3635, 3221225473, 0, 4145, 4146, 4147, 4148, 4149, 0, 0, 0, 1, 32, 32, 32, 32,
      32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 0, 0, 0, 0, 4163, 4164, 0, 0, 0, 1, 3635, 233, 0, 235,
      3651, 72, 107, 0, 0, 4163, 4164, 0, 309, 0, 0, 1, 32, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 4098, 4099, 0, 4210, 4211, 4098, 4099, 0, 4101, 3635,
      3651, 217, 0, 219, 3635, 72, 3635, 107, 4210, 4211, 4212, 4213, 0, 4101, 0, 1, 32, 32, 32, 32,
      32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4113, 4114, 4115, 4116, 4117, 4113, 4114, 4115, 4116,
      4117, 3651, 3635, 233, 0, 235, 3651, 72, 3651, 158, 0, 4113, 4114, 4115, 4116, 4117, 0, 1, 32,
      32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4129, 4130, 4131, 4132, 4133, 4129, 4130, 4131, 4132,
      4133, 40, 3651, 217, 0, 219, 40, 72, 158, 0, 0, 4129, 4130, 4131, 4132, 4133, 0, 1, 32, 32,
      32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 4145, 4146, 4147, 4148, 4149, 4145, 4146, 4147, 4148,
      4149, 3635, 40, 233, 0, 235, 3669, 3221225473, 0, 0, 0, 4145, 4146, 4147, 4148, 4149, 0, 1,
      32, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 4194, 4195, 4196, 0, 0, 0, 4163, 4164, 0, 3651, 3666,
      217, 0, 219, 40, 3635, 121, 0, 0, 4193, 4194, 4195, 4196, 0, 0, 1, 32, 32, 32, 32, 32, 32, 32,
      32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 3875, 0, 4098, 4099, 0, 0, 4098, 4099, 0, 4101, 4098,
      4099, 0, 0, 4098, 4099, 0, 4101, 4098, 4099, 0, 0, 4098, 4099, 0, 4101, 32, 32, 32, 32, 32,
      32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 40, 40, 54, 3875, 4113, 4114, 4115, 4116, 4113, 4114, 4115, 4116,
      4117, 4114, 4115, 4116, 4113, 4114, 4115, 4116, 4117, 4114, 4115, 4116, 4113, 4114, 4115,
      4116, 4117, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 40, 32, 54, 3875, 4129, 4130, 4131, 4132, 4129, 4130, 4131, 4132,
      4133, 4130, 4131, 4132, 4129, 4130, 4131, 4132, 4133, 4130, 4131, 4132, 4129, 4130, 4131,
      4132, 4133, 32, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 40, 40, 54, 3875, 4145, 4146, 4147, 4148, 4145, 4146, 4147, 4148,
      4149, 4146, 4147, 4148, 4145, 4146, 4147, 4148, 4149, 4146, 4147, 4148, 4145, 4146, 4147,
      4148, 4149, 40, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 40, 54, 3875, 0, 0, 4163, 4164, 0, 0, 4163, 4164, 0, 0, 4163,
      4164, 0, 0, 4163, 4164, 0, 0, 4163, 4164, 0, 0, 4163, 4164, 0, 40, 32, 32, 32, 32, 32, 32, 32,
      32
    ],
    [
      32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 126, 0, 4210, 4211, 4212, 4213, 4210, 4211, 4212,
      4213, 4210, 4211, 4212, 4213, 4210, 4211, 4212, 4213, 4210, 4211, 4212, 4213, 4210, 4211,
      4212, 4213, 32, 32, 32, 32, 32, 32, 32, 32, 32
    ],
    [
      32, 96, 32, 32, 32, 96, 95, 96, 95, 96, 95, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97,
      97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 95, 96, 95, 96, 95, 32, 95, 96, 95, 96, 95
    ],
    [
      23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
      24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23
    ],
    [
      23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
      24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23
    ],
    [
      23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
      24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23
    ],
    [
      23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
      24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23
    ],
    [
      23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
      24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23
    ],
    [
      23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
      24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23
    ],
    [
      23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
      24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23
    ]
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
    if (props.previousMap === 'secretIndoorLakeHouse') {
      //setYCord
      yPlayerIndex.current = 23;
      //setXcord
      xPlayerIndex.current = 23;
      //set xTransform
      setXTransformVar(-860);
      //set yTransform
      setYTransformVar(-1172);
      facing.current = 'down';
    }
  }, []);

  // //  // UseEffect Keeping track of player conditions
  useEffect(() => {
    //secretIndoorLakeHouse
    if (
      (yPlayerIndex.current === 22 && xPlayerIndex.current === 22) ||
      (yPlayerIndex.current === 22 && xPlayerIndex.current === 23) ||
      (yPlayerIndex.current === 22 && xPlayerIndex.current === 24)
    ) {
      props.active('secretIndoorLakeHouse', 'saintAnnaHidden');
    }
  }, [yPlayerIndex.current]);

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
            className="mapSAH pixel-art"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaintAnnaHidden;
