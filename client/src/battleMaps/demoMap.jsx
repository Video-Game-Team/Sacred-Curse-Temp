import React, { useEffect, useState, useRef } from 'react';
import '.././demoMap.css';
import DemonObjects from '.././demonObjects.js'
import Enemies from '.././enemies.js'
import DragonImage from ".././assets/demonSprites/even-more-retro-dragonite-dragonite-sprite-gen-1212525.png"






const DemoMap = (prop) => {
  //this sets the x Cordinate to transform the map and character location

const updates = useRef(4);
const [randomTrigger, setRandomTrigger]= useState(1)
const [moveTrigger, setMoveTrigger]= useState(false);
const [attackTrigger, setAttackTrigger]= useState(false);
const [curseTrigger, setCurseTrigger]= useState(false);
const [summonTrigger, setSummonTrigger]= useState(false);
const [demons, setDemons]= useState(prop.demonList);  
const [soulBank, setSoulBank]= useState(20);
const [current, setCurrent]= useState();
const [currentCoordinates, setCurrentCoordinates]=useState();
const [xCord, setXCord]= useState();
const [yCord, setYCord]= useState();
const [display, setDisplay]= useState("Hi");
const [summoningList, setSummoningList]= useState();
const [legalMovesArray, setLegalMovesArray]= useState();
const [legalSummoningArray, setLegalSummoningArray]= useState();
const [playerCoodinates, setPlayerCoordinates]=useState([0,4])
const [staticDemonsList, setStaticDemonsList]= useState(prop.demonList);
const [activeDemonsList, setActiveDemonsList]= useState([prop.demonList[0],prop.demonList[1]])



const [mapState, setMapState]= useState([[0,0,0,0,demons[0],0,0,0],[0,0,0,0,demons[1],0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0],[0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],)

const actionButtons= [<button className='actionButton' onClick={()=>moveButton()} style={{borderColor: "green", 
}}><b>MOVE</b></button>,<button className='actionButton'   onClick={()=>attackButton()} style={{borderColor: "red"}} ><b>ATTACK</b></button>,<button className='actionButton'  onClick={()=>curseButton()} style={{borderColor: "purple"}}><b>CURSE</b></button>,<button className='actionButton'  onClick={()=>summonButton()}style={{borderColor: "gold"}}><b>SUMMON</b></button>]
console.log(activeDemonsList)

//loads initial summon List
useEffect(()=>{

    let summonsList=[]
for (let i=2; i<demons.length; i++){
    summonsList.push(<button id={demons[i].name} style={{backgroundImage: `url(${demons[i].image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundColor: 'transparent', border: 'none'}} onClick={()=>setCurrent(demons[i])}>  </button>)

    // summonsList.push(<button style={{color: "white"}}> {" ."} {demons[i].name} {" "} </button>)

}
setSummoningList(summonsList)
},[randomTrigger])



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
</button>)
    }
    if (mapState[y][x] !=0){
        buttonArr.push(<button id={`${y}${x}`} onClick={()=> {active(y,x); move(y,x); summonSpot(y,x); curse(y,x);attack(y,x)}} className="demon" style={{
            gridColumn: x+1,
            gridRow: y+1,
            color: "white",
            backgroundImage: `url(${mapState[y][x].image})`,
            backgroundSize: '70%'
        }}
        >
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

function summoningListButton(){

}


//setsDisplay and cancel all array buttons
useEffect(()=>{


    if (current){

setDisplay([<div style={{backgroundImage:`url(${current.image})`, backgroundPosition: 'center', gridColumnStart: '1', gridRowStart: '1', backgroundSize: '70%', backgroundRepeat: 'no-repeat'}}></div> , <b style={{color: "black", gridColumnStart:"2", justifySelf: 'center', alignSelf: 'center' }}> Attack: {current.attack}</b>, <b style={{color: "black", gridColumnStart:"3", justifySelf: 'center', alignSelf: 'center'}}> Defense: {current.defense}</b>, <b style={{color: "black", gridColumnStart:"4", justifySelf: 'center', alignSelf: 'center'}}> Move: {current.move}</b>, <b style={{color: "black", gridColumn: "1 /span 4"}}> Description: {current.description}</b>, <b style={{color: "black", gridColumnStart: "4", gridRowStart: "3"}}>SOULS:{current.cost}</b>]);


    }
    if (!current){
        setDisplay()
      
    }
  
    const array=document.getElementsByClassName(`demon`);

    for (let i=0; i<array.length; i++){
        array[i].style.backgroundColor='transparent'
    }
    setSummonTrigger(false);
    setMoveTrigger(false);
    setAttackTrigger(false);
    setCurseTrigger(false)
   
},[current])



function moveButton(){
    if (activeDemonsList.includes(current)){
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

    if (current){
        if (!activeDemonsList.includes(current)){
            let tempSummonArray=[];
            if (soulBank>=current.cost){
                setSummonTrigger(true);
                if( playerCoodinates[0]-1>=0){
                    if(mapState[playerCoodinates[0]-1][playerCoodinates[1]] === 0){
                        document.getElementById(`${playerCoodinates[0]-1}${playerCoodinates[1]}`).style.backgroundColor="red"
                            tempSummonArray.push(`${playerCoodinates[0]-1}${playerCoodinates[1]}`)
                        ;}}
                if(playerCoodinates[0]<mapState.length-1){
                    if (mapState[playerCoodinates[0]+1][playerCoodinates[1]] ===0  ){
                        document.getElementById(`${playerCoodinates[0]+1}${playerCoodinates[1]}`).style.backgroundColor="red";
                        tempSummonArray.push(`${playerCoodinates[0]+1}${playerCoodinates[1]}`);
                    }


}
                if ( playerCoodinates[1]-1>=0){
                    if(mapState[playerCoodinates[0]][playerCoodinates[1]-1] ===0){
                        document.getElementById(`${playerCoodinates[0]}${playerCoodinates[1]-1}`).style.backgroundColor="red";
                        tempSummonArray.push(`${playerCoodinates[0]}${playerCoodinates[1]-1}`)}
                      

  }
                if ( playerCoodinates[1]<mapState.length-1 ){
                    if (mapState[playerCoodinates[0]][playerCoodinates[1]+1] ===0){

                        document.getElementById(`${playerCoodinates[0]}${playerCoodinates[1]+1}`).style.backgroundColor="red";
                        tempSummonArray.push(`${playerCoodinates[0]}${playerCoodinates[1]+1}`)
                    }

               
}
setLegalSummoningArray(tempSummonArray)

}
}
}
if (activeDemonsList.includes(current)){

    const array=document.getElementsByClassName(`demon`);

    for (let i=0; i<array.length; i++){
        array[i].style.backgroundColor='transparent'
    }
    setSummonTrigger(false);
    setMoveTrigger(false);
    setAttackTrigger(false);
    setCurseTrigger(false)
}
}

function move(y,x){
if (moveTrigger){
    let tempButton=null;
    if(legalMovesArray.includes(`${y}${x}`)){

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
    if (current.name=="Shilo"){
        setPlayerCoordinates([y,x])
    }

    for (let i=0; i<legalMovesArray.length; i++){

        tempButton= document.getElementById(`${legalMovesArray[i]}`);
        tempButton.style.backgroundColor= "transparent";
    }
    } 
}

}

function attack(){
//initiate battle loop

//set curent to null

}

function curse(){
//pay curse cost?
//set curent to null


}

function summonSpot(y,x){
    if (summonTrigger){
        if (legalSummoningArray.includes(`${y}${x}`)){
            let tempMapState=mapState;
            document.getElementById(`${y}${x}`).style.backgroundImage=`url(${current.image})`;
            for (let i=0; i<legalSummoningArray.length; i++){
                document.getElementById(`${legalSummoningArray[i]}`).style.backgroundColor='transparent';
            }
            tempMapState[y][x]=current;
            setMapState(tempMapState)
            setDemons(x=>x.filter(el=> el != current));
            setRandomTrigger(x=>x+1);
            setSummonTrigger(false)
            setSoulBank(prev=>prev-current.cost)
            setActiveDemonsList(x=>x.concat(current))


        }





    }



}
  return (
    <div className="camera">
        <div className="battleMap">
    {buttonArr}
       </div>
       <div className='sidePanel'>
<div className='displayCard'>{display}</div>

<div className='summonsList'>{summoningList}</div>

<div className='actionButtonContainer'>{soulBank} {actionButtons}</div>
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