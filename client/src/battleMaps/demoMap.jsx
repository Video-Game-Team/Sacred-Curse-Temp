import React, { useEffect, useState, useRef } from 'react';
import '.././demoMap.css';
import DemonObjects from '.././demonObjects.js'
import Enemies from '.././enemies.js'
import DragonImage from ".././assets/demonSprites/even-more-retro-dragonite-dragonite-sprite-gen-1212525.png"






const DemoMap = (prop) => {
  //this sets the x Cordinate to transform the map and character location

  const updates = useRef(4);

const [moveTrigger, setMoveTrigger]= useState(false);
const [attackTrigger, setAttackTrigger]= useState(false);
const [curseTrigger, setCurseTrigger]= useState(false);
const [summonTrigger, setSummonTrigger]= useState(false);
const [demons, SetDemons]= useState(prop.demonList)  
const [soulBank, setSoulBank]= useState(0);
const [current, setCurrent]= useState();
const [currentCoordinates, setCurrentCoordinates]=useState();
const [xCord, setXCord]= useState();
const [yCord, setYCord]= useState();
const [display, setDisplay]= useState("Hi");
const [summoningList, setSummoningList]= useState();
const [legalMovesArray, setLegalMovesArray]= useState();



const [mapState, setMapState]= useState([[0,0,0,0,demons[0],1,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],)

const actionButtons= [<button className='actionButton' onClick={()=>moveButton()} style={{borderColor: "green",     opacity: ".6"
}}><b>MOVE</b></button>,<button className='actionButton'   onClick={()=>attackButton()} style={{borderColor: "red"}} ><b>ATTACK</b></button>,<button className='actionButton'  onClick={()=>curseButton()} style={{borderColor: "purple"}}><b>CURSE</b></button>,<button className='actionButton'  onClick={()=>summonButton()}style={{borderColor: "gold"}}><b>SUMMON</b></button>]




//loads initial summon List
useEffect(()=>{

    let summonsList=[]
for (let i=0; i<demons.length; i++){
    summonsList.push(<b style={{color: "white"}}>  { demons[i].name }  </b>)

    // summonsList.push(<button style={{color: "white"}}> {" ."} {demons[i].name} {" "} </button>)

}
setSummoningList(summonsList)
},[])

let buttonArr=[];
for (let y=0; y<mapState.length; y++){
  for (let x=0; x<mapState.length; x++){
    if (mapState[y][x]===0){
buttonArr.push(<button id={`${y}${x}`} onClick={()=> {active(y,x); move(y,x); summonSpot(y,x); curse(y,x);attack(y,x)}} className="demon" style={{
    gridColumn: x+1,
    gridRow: y+1,
    color: "white"
}}
>
    {y}-{x}
</button>)
    }
    if (mapState[y][x] !=0){
        buttonArr.push(<button id={`${y}${x}`} onClick={()=> {active(y,x); move(y,x); summonSpot(y,x); curse(y,x);attack(y,x)}} className="demon" style={{
            gridColumn: x+1,
            gridRow: y+1,
            color: "white",
            backgroundImage: `url(${mapState[y][x].image})` 
        }}
        >
            {y}-{x}
        </button>)
            }
}
}
function active(y,x){
    
 if (mapState[y][x] !=0 && mapState[y][x].active===true) {
setCurrent(mapState[y][x]);
    }
    if (mapState[y][x] ===0 || mapState[y][x].active !=true) {
        //load player card
        //reveal available tiles
        
        setCurrent(null);
        
            }
    setCurrentCoordinates(`${y}${x}`)
    setXCord(x);
    setYCord(y);



}

useEffect(()=>{


    if (current){

setDisplay([<div style={{backgroundImage:`url(${current.image})`, backgroundPosition: 'center', gridColumnStart: '1', gridRowStart: '1', backgroundSize: '70%', backgroundRepeat: 'no-repeat'}}></div> , <b style={{color: "black", gridColumnStart:"2", justifySelf: 'center', alignSelf: 'center' }}> Attack: {current.attack}</b>, <b style={{color: "black", gridColumnStart:"3", justifySelf: 'center', alignSelf: 'center'}}> Defense: {current.defense}</b>, <b style={{color: "black", gridColumnStart:"4", justifySelf: 'center', alignSelf: 'center'}}> Move: {current.move}</b>, <b style={{color: "black", gridColumn: "1 /span 4"}}> Description: {current.description}</b>, <b style={{color: "black", gridColumnStart: "4", gridRowStart: "3"}}>SOULS:{current.cost}</b>]);
   
    }
    if (!current){
        setDisplay()
    }
  

   
},[current])



function moveButton(){
    if (current){
        setMoveTrigger(true)
let tempButton=null;

    //logic gate to set
let upI=yCord-1;
let downI=yCord+1;
let rightI=xCord+1;
let leftI=xCord-1;
let moveIterator=0;
let legalSpaces=[];

if (upI>=0){

while(mapState[upI][xCord]===0 && moveIterator<current.move){

    tempButton= document.getElementById(`${upI}${xCord}`);
    tempButton.style.backgroundColor= "red";
    moveIterator++;
    legalSpaces.push(`${upI}${xCord}`)

    upI-=1;

    if (upI<0) break;
}
}
moveIterator=0;
if (downI<mapState.length){

while(mapState[downI][xCord]===0 && moveIterator<current.move){

    tempButton= document.getElementById(`${downI}${xCord}`);
    tempButton.style.backgroundColor= "red";
    moveIterator++;
    legalSpaces.push(`${downI}${xCord}`)

    downI++;
    if (downI>mapState.length-1) break;

}
}
moveIterator=0;

if (leftI>=0){
while(mapState[yCord][leftI]===0 && moveIterator<current.move){
    tempButton= document.getElementById(`${yCord}${leftI}`);
    tempButton.style.backgroundColor= "red";
    moveIterator++;
    legalSpaces.push(`${yCord}${leftI}`)

    leftI-=1;
    if (leftI<0) break;

}
}
moveIterator=0;
if (rightI<mapState.length){
    while(mapState[yCord][rightI]===0 && moveIterator<current.move){
        tempButton= document.getElementById(`${yCord}${rightI}`);
        tempButton.style.backgroundColor= "red";
        moveIterator++;
        legalSpaces.push(`${yCord}${rightI}`)

        rightI++;
        if (rightI>mapState.length-1) break;

    }
    }

                   
    setLegalMovesArray(legalSpaces)
    setMoveTrigger(true)
                        }

}
function curseButton(){
    setCurseTrigger(true)
}

function attackButton(){
    setAttackTrigger(true)

}

function summonButton(){
    setSummonTrigger(true)
}

function move(y,x){
if (moveTrigger){
    let tempButton=null;
    if(legalMovesArray.includes(`${y}${x}`)){
        console.log(legalMovesArray)
    let oldSpot= document.getElementById(`${currentCoordinates}`)
    oldSpot.style.backgroundImage= 'url(none)';
    let newSpot= document.getElementById(`${y}${x}`);
    newSpot.style.backgroundImage= `url(${current.image})`;
    let newMapArray= mapState;
    newMapArray[y][x]=current;
    newMapArray[yCord][xCord]=0;
    setMapState(newMapArray)
    setCurrent(null);
    setMoveTrigger(false);
    for (let i=0; i<legalMovesArray.length; i++){
        console.log(legalMovesArray[i])
        tempButton= document.getElementById(`${legalMovesArray[i]}`);
        tempButton.style.backgroundColor= "transparent";
    }
    } 
}
//is it 0?
//is it in the range?

   //temporary, this needs to be moved.
//    let variable = document.getElementById(`${y}${x}`);
//    variable.style.backgroundImage="url(none)";
//switch to inactive
//set curent to null
}

function attack(){
//initiate battle loop

//set curent to null

}

function curse(){
//pay curse cost?
//set curent to null


}

function summonSpot(){

}
  return (
    <div className="camera">
        <div className="battleMap">
    {buttonArr}
       </div>
       <div className='sidePanel'>
<div className='displayCard'>{display}</div>

<div className='summonsList'>{summoningList}</div>

<div className='actionButtonContainer'>{actionButtons}</div>
</div>

      </div>
  );
};

export default DemoMap;


// useEffect(()=>{
// //hot key event listener
//     window.addEventListener('keydown', (e)=>{
// //         if (e.key==='m'){
// //             setMoveTrigger(true);
// // console.log(current)

// //         }
// //         if (e.key==='a' && current){
// //             setAttackTrigger(true)

// //         }
// //         if (e.key==='c' && current){
// //             setCurseTrigger(true)

// //         }
// //         if (e.key==='s' && current){
// //             setSummonTrigger(true)

// //         }
//         if (e.key==='Escape'){
//             setMoveTrigger(false);
//             setAttackTrigger(false);
//             setCurseTrigger(false);
//             setSummonTrigger(false);
//             setCurrent(null);
//             setCurrentCoordinates(null);
//             setLegalMovesArray([])
//         }

//     })

// },[])