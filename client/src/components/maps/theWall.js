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

import '../../theWall.css';

const TheWall = (props) => {
  //this sets the x Cordinate to transform the map and character location
  const [xTransformVar, setXTransformVar] = useState(-662);

  //this sets the y Cordinate to transform the map and character location
  const [yTransformVar, setYTransformVar] = useState(-1428);
  //
  const requestRef = useRef();
  //this sets the speed for the map to move. bigger number goes faster
  const speedRef = useRef(4);

  const [tick, setTick] = useState(1);
  //correpsondds with a css class to tell it which version of the sprite to load. ie "left", "right"
  // const [facing.current, setFacing] = useState("right");
  const facing = useRef('up');
  //corresponds with a css class. determiines if the sprite gets animated or not
  const [walker, setWalker] = useState('false');
  // const [walkerArr, setWalkerkArr]= useState([])
  const dirArr = useRef([]);

  const xBank = useRef(0);
  const yBank = useRef(0);
  const yPlayerIndex = useRef(27);
  const xPlayerIndex = useRef(20);
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
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  //   [
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ],
  // ];

  let currentMap = [
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000,
      4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000,
      4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000,
      4000, 891, 892, 893, 894, 895, 896, 897, 898, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000,
      4000, 907, 908, 909, 910, 911, 912, 913, 914, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 660, 661, 4000, 4000,
      4000, 4000, 923, 924, 925, 926, 927, 928, 929, 930, 632, 633, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 676, 677, 4000, 4000,
      4000, 4000, 939, 940, 941, 942, 943, 944, 945, 946, 648, 649, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 691, 692, 693, 4000, 4000,
      4000, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      492, 0, 0, 0, 0, 492, 0, 0, 0, 0, 0, 492, 0, 0, 0, 0, 0, 1340, 4000, 4000,
      4000, 4000, 0, 1340, 0, 0, 0, 0, 0, 492, 0, 0, 0, 0, 0, 492, 0, 0, 0, 0,
      0, 492,
    ],
    [
      508, 576, 577, 575, 576, 508, 575, 576, 577, 575, 576, 508, 575, 576, 577,
      575, 576, 508, 575, 576, 575, 576, 577, 508, 575, 576, 577, 575, 576, 508,
      575, 576, 577, 575, 576, 508, 575, 576, 577, 575, 576, 508,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1328,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      996,
      997,
      4000,
      4000,
      4000,
      4000,
      1129,
      1130,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      691,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      1015,
      1016,
      0,
      4000,
      4000,
      4000,
      1148,
      1149,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      691,
      1034,
      1035,
      0,
      1137,
      1138,
      0,
      1167,
      1168,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      678,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1344,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1156,
      1157,
      0,
      0,
      0,
      0,
      691,
      692,
      693,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      691,
      692,
      693,
      1343,
      1327,
      1175,
      1176,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      691,
      692,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1344,
      692,
      0,
      0,
      0,
      691,
      692,
      693,
      0,
      0,
      0,
      0,
      0,
      1327,
      1328,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      1373,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1343,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      691,
      692,
      693,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      1340,
      0,
      1341,
      0,
      0,
      0,
      0,
      1340,
      1340,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      678,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      1344,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      1337,
      1338,
      1356,
      0,
      0,
      0,
      0,
      1337,
      1338,
      0,
      0,
      694,
      0,
      0,
      1437,
      1438,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      1353,
      1354,
      0,
      0,
      0,
      0,
      0,
      1353,
      1354,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      4000,
      0,
      4000,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      'Barrier',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      691, 691, 691, 691, 691, 691, 691, 691, 691, 691, 691, 691, 691, 691, 691,
      691, 691, 691, 0, 1889, 1890, 4000, 1, 691, 691, 691, 691, 691, 691, 691,
      691, 691, 691, 691, 691, 691, 691, 691, 691, 691, 691, 691,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1720, 4000, 1555, 1889,
      1890, 4000, 4000, 4000, 1717, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000, 1889,
      1890, 4000, 4000, 4000, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000, 1889,
      1812, 4000, 4000, 4000, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000, 1889,
      4000, 4000, 4000, 4000, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000, 1889,
      4000, 4000, 4000, 4000, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000, 1889,
      4000, 4000, 4000, 4000, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
  ];

  console.log(yPlayerIndex.current, xPlayerIndex.current);
  console.log(currentMap[yPlayerIndex.current][xPlayerIndex.current]);

  // useEffect(()=>{
  //   let tempGrid=[]
  //   for (let i=0; i<currentMap.length; i++){
  //     for (let j=0; j<currentMap[i].length; j++){
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
  // setGridArray(tempGrid)
  // },[])

  // useEffect(() => {
  //   if (props.previousMap === 'townMap1') {
  //     //setYCord
  //     yPlayerIndex.current = 27;
  //     //setXcord
  //     xPlayerIndex.current = 20;
  //     //set xTransform
  //     setXTransformVar(-662);
  //     //set yTransform
  //     setYTransformVar(-1428);
  //     facing.current = 'up';
  //   }
  // }, []);

  // // UseEffect Keeping track of player conditions
  useEffect(() => {
    // yPlayerIndex up and down values
    // TheWall Map check conditions
    if (yPlayerIndex.current === 28 && xPlayerIndex.current === 20) {
      props.active('townMap1', 'theWall');
    }
  }, [yPlayerIndex.current]);

  //CHARACTER DIALOGUE USE EFFECT
  useEffect(() => {
    const dialogueAction = (event) => {
      if (event.key === 'a') {
        //Facing up
        if (facing.current === 'up') {
          //Guard 1 Lower left NPC
          if (
            (yPlayerIndex.current === 14 && xPlayerIndex.current === 19) ||
            (yPlayerIndex.current === 14 && xPlayerIndex.current === 20)
          ) {
             setNpcFace('faceMainGuardTW');
             setTextValue('Eat lead villager!');
             clickAudio2();
          }
          // //YO Mama NPC
          // if (
          //   (yPlayerIndex.current === 35 && xPlayerIndex.current === 38) ||
          //   (yPlayerIndex.current === 35 && xPlayerIndex.current === 39)
          // ) {
          //   console.log("Hi I'm Guard 2");
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
          // if (
          //   (yPlayerIndex.current === 10 && xPlayerIndex.current === 19) ||
          //   (yPlayerIndex.current === 10 && xPlayerIndex.current === 20)
          // ) {
          //    setNpcFace('faceMainGuardTW');
          //    setTextValue('My dad is mad at me');
          //    clickAudio2();
          // }
          // //YO Mama NPC
          // if (
          //   (yPlayerIndex.current === 32 && xPlayerIndex.current === 38) ||
          //   (yPlayerIndex.current === 32 && xPlayerIndex.current === 39)
          // ) {
          //   console.log("Hi I'm Guard 2");
          // }
          // //Hot Girl
          // // if (
          // //   (yPlayerIndex.current === 34 && xPlayerIndex.current === 14) ||
          // //   (yPlayerIndex.current === 34 && xPlayerIndex.current === 15)
          // // ) {
          // //   console.log("Hi I'm Guard 3");
          // // }
          // //Hot Girl
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
            (yPlayerIndex.current === 13 && xPlayerIndex.current === 21) ||
            (yPlayerIndex.current === 12 && xPlayerIndex.current === 21)
          ) {
            setNpcFace('faceMainGuardTW');
            setTextValue('Eat lead villager!');
            clickAudio2();
          }
          // //YO Mama NPC
          // if (
          //   (yPlayerIndex.current === 33 && xPlayerIndex.current === 40) ||
          //   (yPlayerIndex.current === 34 && xPlayerIndex.current === 40)
          // ) {
          //   console.log("Hi I'm Guard 2");
          // }
          // //Hot Girl
          // // if (
          // //   (yPlayerIndex.current === 35 && xPlayerIndex.current === 16) ||
          // //   (yPlayerIndex.current === 36 && xPlayerIndex.current === 16)
          // // ) {
          // //   console.log("Hi I'm Guard 3");
          // // }
          // //Hot Girl
          // if (
          //   (yPlayerIndex.current === 22 && xPlayerIndex.current === 34) ||
          //   (yPlayerIndex.current === 23 && xPlayerIndex.current === 34)
          // ) {
          //   console.log("Hi I'm guard 4");
          // }
        }

        //Facing right
        if (facing.current === 'right') {
          // if (
          //   (yPlayerIndex.current === 11 && xPlayerIndex.current === 18) ||
          //   (yPlayerIndex.current === 12 && xPlayerIndex.current === 18)
          // ) {
          //   setNpcFace('faceGirl2');
          //   setTextValue('My dad is mad at me');
          //   clickAudio2();
          // }
          // //YO Mama NPC
          // if (
          //   (yPlayerIndex.current === 33 && xPlayerIndex.current === 37) ||
          //   (yPlayerIndex.current === 34 && xPlayerIndex.current === 37)
          // ) {
          //   console.log("Hi I'm Guard 2");
          // }
          // //Hot Girl
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

  //OVERWOLRD ITEM CHECK LOGIC
  useEffect(() => {
    const dialogueAction = (event) => {
      if (event.key === 'b') {
        //Facing right
        if (facing.current === 'left') {
          if (
            (yPlayerIndex.current === 25 && xPlayerIndex.current === 19) ||
            (yPlayerIndex.current === 26 && xPlayerIndex.current === 19) ||
            (yPlayerIndex.current === 27 && xPlayerIndex.current === 19)
          ) {
            clickAudio2();
            setTextValue('Welcome to The Wall');
          }
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
      <div className="camera fade-in">
        <div>
          <div
            className="mapTW pixel-art"
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
              className="mech1TW pixel-art"
              style={{
                transform: `translate3d( ${1355}px, ${475}px, 0 )`,
              }}
            >
              <div className="mech1TW_spritesheet pixel-art"></div>
            </div>

            <div
              className="mech2TW pixel-art"
              style={{
                transform: `translate3d( ${1035}px, ${285}px, 0 )`,
              }}
            >
              <div className="mech2TW_spritesheet pixel-art"></div>
            </div>

            <div
              className="mainGuardTW pixel-art"
              style={{
                transform: `translate3d( ${1235}px, ${275}px, 0 )`,
              }}
            >
              <div className="mainGuardTW_spritesheet pixel-art"></div>
            </div>

            {/* <div
              className="shots1TW pixel-art"
              style={{
                transform: `translate3d( ${1310}px, ${150}px, 0 )`,
              }}
            >
              <div className="shots1TW_spritesheet pixel-art"></div>
            </div> */}


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

export default TheWall;
