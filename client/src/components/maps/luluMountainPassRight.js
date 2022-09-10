import React, { useEffect, useState, useRef } from 'react';
import LeftWalker from '../../assets/images/leftWalker.png';
import RightWalker from '../../assets/images/rightWalker.png';
import UpWalker from '../../assets/images/upWalker.png';
import DownWalker from '../../assets/images/downWalker.png';
import EmptyCanvas from '../../assets/images/newone.png';
import BackgroundImage1 from '../../assets/maps/map 40x 40 w grid.png';
import PlayerSpriteSheet from '../../assets/images/AjFP5.png';
import '../../luluMountainPassRight.css';

const LuluMountainPassRight = (props) => {
  //this sets the x Cordinate to transform the map and character location
  const [xTransformVar, setXTransformVar] = useState(-2328);
  //this sets the y Cordinate to transform the map and character location
  const [yTransformVar, setYTransformVar] = useState(-792);
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
  const yPlayerIndex = useRef(17);
  const xPlayerIndex = useRef(46);
  const [gridArray, setGridArray] = useState([]);

  // let currentMap2 = [
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  // ];

  let currentMap = [
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6212,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 6207, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6207, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220,
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6228, 6228,
      6228, 6228, 6228, 6228, 0, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6228, 0, 0, 0, 6228, 6228, 6228,
      6228, 6228, 6228, 6228, 6228, 6228, 6228, 6220, 6220, 6220, 6220, 6220,
      6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 283, 284, 285, 181, 182, 179, 179, 179,
      180, 0, 283, 284, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 308, 309, 310, 311, 207, 208, 205, 205, 205,
      206, 308, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 333, 334, 335, 336, 337, 233, 234, 231, 231,
      231, 232, 334, 335, 336, 337, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 361, 362, 363, 181, 182, 179, 179, 179,
      180, 0, 361, 362, 363, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 387, 388, 389, 207, 208, 205, 205, 205,
      206, 0, 387, 388, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 283, 284, 285, 233, 234, 231, 231, 231,
      232, 0, 413, 414, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 308, 309, 310, 311, 181, 182, 179, 179, 179,
      180, 0, 439, 440, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220,
    ],
    [
      5206, 5204, 5205, 5206, 5204, 5205, 5206, 5204, 5205, 5206, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 333, 334, 335, 336, 337, 207, 208, 205, 205,
      205, 0, 0, 283, 284, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 5204, 5205, 5206, 5204, 5205, 5206, 5204, 5205, 5206, 5204,
    ],
    [
      5222, 5220, 5221, 5222, 5220, 5221, 5222, 5220, 5221, 5222, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 361, 362, 363, 233, 234, 231, 231, 231,
      0, 308, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 5220, 5221, 5222, 5220, 5221, 5222, 5220, 5221, 5222, 5220,
    ],
    [
      5238, 5236, 5237, 5238, 5236, 5237, 5238, 5236, 5237, 5238, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 387, 388, 389, 181, 182, 179, 179, 179,
      333, 334, 335, 336, 337, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 5236, 5237, 5238, 5236, 5237, 5238, 5236, 5237, 5238, 5236,
    ],
    [
      5254, 5252, 5253, 5254, 5252, 5253, 5254, 5252, 5253, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 413, 414, 0, 207, 208, 205, 205, 205, 0, 0,
      361, 362, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      5253, 5254, 5252, 5253, 5254, 5252, 5253, 5254, 5252,
    ],
    [
      5270, 5268, 5269, 5270, 5268, 5269, 5270, 5268, 5269, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 439, 440, 0, 233, 234, 231, 231, 231, 0, 0,
      387, 388, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      5269, 5270, 5268, 5269, 5270, 5268, 5269, 5270, 5268,
    ],
    [
      5286, 5284, 5285, 5286, 5284, 5285, 5286, 5284, 5285, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 283, 284, 285, 181, 182, 179, 179, 179, 411,
      0, 413, 414, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 5285, 5286, 5284, 5285, 5286, 5284, 5285, 5286, 5284,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 0,
      308, 309, 310, 311, 207, 208, 205, 205, 205, 437, 0, 439, 440, 441, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 6220, 6220, 6220, 6220, 6220, 6220,
      6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      333, 334, 335, 336, 337, 233, 234, 231, 231, 231, 333, 334, 335, 336, 337,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 6220, 6220, 6220, 6220, 6220,
      6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 0,
      0, 361, 362, 363, 181, 182, 179, 179, 179, 0, 0, 361, 362, 363, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 6220, 6220, 6220, 6220, 6220, 6220,
      6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 0,
      0, 387, 388, 389, 207, 208, 205, 205, 205, 0, 0, 387, 388, 389, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 6220, 6220, 6220, 6220, 6220, 6220,
      6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      411, 0, 413, 414, 415, 233, 234, 231, 231, 231, 411, 0, 413, 414, 415,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 6220, 6220, 6220, 6220, 6220,
      6220, 6220, 6220, 6220, 6220,
    ],
    [
      6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 6220, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      437, 0, 439, 440, 441, 259, 260, 257, 257, 257, 437, 0, 439, 440, 441,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160, 5160,
      5160, 5160, 5160, 5160, 5160, 5160, 5160, 6220, 6220, 6220, 6220, 6220,
      6220, 6220, 6220, 6220, 6220,
    ],
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

  //create an array. If the current array does not contain the value. shift it.

  // console.log(yPlayerIndex.current, xPlayerIndex.current)
  // console.log(newMap[yPlayerIndex.current][xPlayerIndex.current])

  useEffect(() => {
    if (props.previousMap === 'crystalCavernsRight') {
      //setYCord
      yPlayerIndex.current = 17;
      //setXcord
      xPlayerIndex.current = 46;
      //set xTransform
      setXTransformVar(-2328);
      //set yTransform
      setYTransformVar(-792);
      facing.current = 'down';
    }

    if (props.previousMap === 'trainTracksToSaintAnna') {
      //setYCord
      yPlayerIndex.current = 28;
      //setXcord
      xPlayerIndex.current = 57;
      //set xTransform
      setXTransformVar(-3024);
      //set yTransform
      setYTransformVar(-1488);
      facing.current = 'left';
    }
  }, []);

  useEffect(() => {
    //yPlayerIndex up and down values
    // Manson Map check conditions
    if (
      (yPlayerIndex.current === 27 && xPlayerIndex.current === 9) ||
      (yPlayerIndex.current === 28 && xPlayerIndex.current === 9) ||
      (yPlayerIndex.current === 29 && xPlayerIndex.current === 9)
    ) {
      props.active('trainTracksToTortous', 'luluMountainPassRight');
    }

    if (
      (yPlayerIndex.current === 27 && xPlayerIndex.current === 58) ||
      (yPlayerIndex.current === 28 && xPlayerIndex.current === 58) ||
      (yPlayerIndex.current === 29 && xPlayerIndex.current === 58)
    ) {
      props.active('trainTracksToSaintAnna', 'luluMountainPassRight');
    }
  }, [xPlayerIndex.current]);

  // UseEffect Keeping track of player conditions
  useEffect(() => {
    //yPlayerIndex up and down values
    // TheWall Map check conditions
    if (yPlayerIndex.current === 16 && xPlayerIndex.current === 16) {
      props.active('crystalCavernsRight', 'luluMountainPassRight');
    }

    if (
      (yPlayerIndex.current === 16 && xPlayerIndex.current === 45) ||
      (yPlayerIndex.current === 16 && xPlayerIndex.current === 46) ||
      (yPlayerIndex.current === 16 && xPlayerIndex.current === 47)
    ) {
      props.active('crystalCavernsRight', 'luluMountainPassRight');
    }
  }, [yPlayerIndex.current]);

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
            className="mapLMP pixel-art"
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
      </div>
    </div>
  );
};

export default LuluMountainPassRight;
