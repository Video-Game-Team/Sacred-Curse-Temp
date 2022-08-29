import React, { useEffect, useState, useRef } from 'react';
import '.././demoMap.css';
import DemonObjects from '.././demonObjects.js'
import Enemies from '.././enemies.js'
import DragonImage from ".././assets/demonSprites/even-more-retro-dragonite-dragonite-sprite-gen-1212525.png"
import Heart from '.././assets/battleMapAssets/heart-e1403272720870.png'
import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals';


//default for every component is a loading screen until the component did mount properly, thae


const DemoMap = (prop) => {
  //this sets the x Cordinate to transform the map and character location
  const updates = useRef(4);
const [randomTrigger, setRandomTrigger]= useState(1);
const [endTurn, setEndTurn]= useState(false)
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
const [playerCoodinates, setPlayerCoordinates]=useState([2,6])
const [staticDemonsList, setStaticDemonsList]= useState(prop.demonList);
const [activeDemonsList, setActiveDemonsList]= useState([prop.demonList[0],prop.demonList[1]]);

const [currentActionButton, setCurrentActionButton]= useState();
const [playerOptions, setPlayerOptions]= useState()
const [activeEnemyList, setActiveEnemyList]=useState([Enemies.BlueMegaTank, Enemies.GreenInfantry])


const [mapState, setMapState]= useState([[0,0,0,demons[6],activeEnemyList[0],demons[2],0,0],[0,0,0,0,demons[1],0,1,0],[0,0,0,0,0,0,demons[0],0],[0,0,0,0,1,0,0,0],[0,1,0,0,0,0,0,activeEnemyList[1]],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],)

const [curseMap, setCurseMap]= useState([[0,0,0,0,"Haunting",0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],)


const actionButtons= [<button className='actionButton' onClick={()=>moveButton()} style={{borderColor: "lime", 
}}><b>MOVE</b></button>,<button className='actionButton'   onClick={()=>attackButton()} style={{borderColor: "red"}} ><b>ATTACK</b></button>,<button className='actionButton'  onClick={()=>curseButton()} style={{borderColor: "darkorchid"}}><b>CURSE</b></button>,<button className='actionButton'  onClick={()=>summonButton()}style={{borderColor: "gold"}}><b>SUMMON</b></button>]


useEffect(()=>{

setPlayerOptions([[<div className="playerStats" style={{borderColor: "lime", backgroundImage: `${demons[0].image}`
}}>{demons[0].name}</div>,<div  className="playerStats"  style={{borderColor: "lime",
}}>Attack:{demons[0].attack}</div>,<div  className="playerStats" style={{borderColor: "lime", 
}}> Health: {demons[0].health}/{demons[0].defense}</div>,<div className="playerStats" style={{borderColor: "lime", 
}}>Move:{demons[0].move}</div>,<div className="playerStats" style={{borderColor: "lime", backgroundImage: `${demons[0].image}`
}}>{soulBank}</div>,<button className='actionButton'  onClick={()=>{ setEndTurn(x=>x === true ? false : true)}} style={{borderColor: "silver", backgroundImage: `${demons[0].image}`
}}>End Turn</button>]])

},[demons])
//loads initial summon List
useEffect(()=>{

    let summonsList=[]
for (let i=2; i<demons.length; i++){
    summonsList.push(<button id={demons[i].name} style={{backgroundImage: `url(${demons[i].image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundColor: 'transparent', border: 'none'}} onClick={()=>setCurrent(demons[i])}>  </button>)

    // summonsList.push(<button style={{color: "white"}}> {" ."} {demons[i].name} {" "} </button>)

}
setSummoningList(summonsList)
},[randomTrigger])


//turn Loopc
// console.log(activeEnemyList)
//
useEffect(()=>{

   let tempDemonsList=demons;
   let tempEnemiesList=activeEnemyList;
   let tempMap=mapState
 
    for (let i=0; i<mapState.length; i++){
        for (let j=0; j<mapState.length; j++)
        if (mapState[i][j] != 0 && mapState[i][j] !=1){
            if (curseMap[i][j]===0){
                mapState[i][j].type === "Demon" ? tempDemonsList.push(mapState[i][j]) : tempEnemiesList.push(mapState[i][j])
            }
            if (curseMap[i][j]=="Blessing" && mapState[i][j].type==="Demon"){
                
                let newDemon=mapState[i][j];
                newDemon.defense=(newDemon.defense+1);
                if (newDemon.defense>newDemon.health){
                    newDemon.defense=newDemon.health
                } 
                tempDemonsList.push(newDemon)
            }
            if (curseMap[i][j]=="Haunting" && mapState[i][j].type!="Demon"){
                
                let newEnemy=mapState[i][j];
                newEnemy.defense=(newEnemy.defense-1);
                if (newEnemy.defense<=0){
                    tempMap[i][j]=0
                }
                else{
                    tempEnemiesList.push(mapState[i][j])
                }
               

            }
        }
    }

    setMapState(tempMap)
    setActiveDemonsList(tempDemonsList)
    setActiveEnemyList(tempEnemiesList)

},[endTurn])

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
    if (mapState[y][x].type != 0){
        buttonArr.push(<button id={`${y}${x}`} onClick={()=> {active(y,x); move(y,x); summonSpot(y,x); curse(y,x);attack(y,x)}} className="demon" style={{
            gridColumn: x+1,
            gridRow: y+1,
            color: "white",
            backgroundImage: `url(${mapState[y][x].image})`,
            backgroundSize: '100%'
        }}
        >
        </button>)
            }
}
}

function active(y,x){
    
 if (mapState[y][x] != 0 && mapState[y][x]!=1) {
setCurrent(mapState[y][x]);
    }
    if (mapState[y][x] ===0 || mapState[y][x] ===1) {
        //load player card
        //reveal available tiles
        
        setCurrent(null);
        
            }
    setCurrentCoordinates(`${y}${x}`)
    setXCord(x);
    setYCord(y);

}



//setsDisplay and cancel all array buttons
useEffect(()=>{

if(current){
    if (current.type==="Demon"){

setDisplay([<div style={{backgroundImage:`url(${current.image})`, backgroundPosition: 'center', gridColumnStart: '1', gridRowStart: '2', backgroundSize: '73%', backgroundRepeat: 'no-repeat',}}></div>, <b style={{color: "black", gridColumnStart:"1", gridRowStart: "1", justifySelf: 'start', alignSelf: 'center' }}>{current.name}</b>,  <b style={{color: "black", gridColumnStart:"5", gridRowStart: "1", justifySelf: 'start', alignSelf: 'center' }}>{current.cost}</b>, <b style={{color: "black", gridColumnStart:"1", gridColumnEnd: "5", gridRowStart: "3", justifySelf: 'start', alignSelf: 'center', size: "100%" }}>{current.description}</b>, <b style={{color: "black", gridColumnStart:"1", gridColumnEnd: "5", gridRowStart: "3", justifySelf: 'start', alignSelf: 'center' }}>{current.description}</b>, <b style={{color: "black", gridColumnStart:"1", gridColumnEnd: "5", gridRowStart: "4", justifySelf: 'start', alignSelf: 'center' }}> {current.ability ? `Ability:${current.ability}` : current.curse ? current.curse : null} {current.curseCost ? current.curseCost : null}</b>, <b style={{color: "black", gridColumnStart:"2", gridColumnEnd: "5", gridRowStart: "4", justifySelf: 'start', alignSelf: 'center' }}> {current.abilityDescription ? current.abilityDescription : current.curseDescription ? current.curseDescription : null}</b>,  <b style={{color: "black", gridColumnStart:"2", gridRowStart: "2", justifySelf: 'start', alignSelf: 'center' }}>Attack:{current.attack}</b>, <b style={{color: "black", gridColumnStart:"3", gridRowStart: "2", justifySelf: 'start', alignSelf: 'center' }}>Health:{current.defense}/{current.health}</b>, <b style={{color: "black", gridColumnStart:"4", gridRowStart: "2", justifySelf: 'start', alignSelf: 'center' }}>Move:{current.move}</b>])

    }
    if (current.type==="LandUnit"){
        

        setDisplay([<div style={{backgroundImage:`url(${current.image})`, backgroundPosition: 'center', gridColumnStart: '1', gridRowStart: '2', backgroundSize: '73%', backgroundRepeat: 'no-repeat',}}></div>, <b style={{color: "black", gridColumnStart:"1", gridRowStart: "1", justifySelf: 'start', alignSelf: 'center' }}>{current.name}</b>, <b style={{color: "black", gridColumnStart:"1", gridColumnEnd: "5", gridRowStart: "3", justifySelf: 'start', alignSelf: 'center', size: "100%" }}>{current.description}</b>,<b style={{color: "black", gridColumnStart:"2", gridRowStart: "2", justifySelf: 'start', alignSelf: 'center' }}>Attack:{current.attack}</b>, <b style={{color: "black", gridColumnStart:"3", gridRowStart: "2", justifySelf: 'start', alignSelf: 'center' }}>Health:{current.defense}/{current.health}</b>, <b style={{color: "black", gridColumnStart:"4", gridRowStart: "2", justifySelf: 'start', alignSelf: 'center' }}>Move:{current.move}</b>])
        
   }
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
    if (activeDemonsList.includes(current)&& current.active){
        setCurrentActionButton("move")
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
    if (current && current.active){
    if (current.curse && soulBank-current.curseCost>0 && activeDemonsList.includes(current)){

        setSoulBank(prev=>prev-current.curseCost)
        document.getElementById(`${currentCoordinates}`).style.borderColor="purple";
        let newMap= curseMap;
        newMap[yCord][xCord]=current.curse
        setCurseMap(newMap)
        let tempDemon=null;
    for(let i=0; i<activeDemonsList.length;i++){
        if (activeDemonsList[i]===current){
             tempDemon=activeDemonsList[i];
            tempDemon.active=false;
        }
    }
setActiveDemonsList(e=>e.map(el=> el === current ? tempDemon : el))




        }
    }
    

}

function attackButton(){
    setAttackTrigger(true)
    let tempButton=null;

    //logic gate to set
let upI=yCord-1;
let downI=yCord+1;
let rightI=xCord+1;
let leftI=xCord-1;
let moveIterator=0;
let legalSpaces=[];
if (current.attackType=="melee" && current.active){
    if (upI>=0){

       
    while(mapState[upI][xCord]===0 && moveIterator<current.move) {
    
        tempButton= document.getElementById(`${upI}${xCord}`);
        tempButton.style.backgroundColor= "red";
        moveIterator++;
        legalSpaces.push(`${upI}${xCord}`)
    
        upI-=1;
    
        if (upI<0) break;
    }
    if (upI>=0 && moveIterator<=current.move  && mapState[upI][xCord].type==="LandUnit"){

        tempButton= document.getElementById(`${upI}${xCord}`);
    tempButton.style.backgroundColor= "red";
    moveIterator++;
    legalSpaces.push(`${upI}${xCord}`)
    }
        
    }
moveIterator=0;
if (downI<mapState.length){

while(mapState[downI][xCord]===0 && moveIterator<current.move){

    tempButton= document.getElementById(`${downI}${xCord}`);
    tempButton.style.backgroundColor= "red";

    legalSpaces.push(`${downI}${xCord}`)
    moveIterator++;

    downI++;
    if (downI>mapState.length-1) break;

}

if (downI<mapState.length && moveIterator<=current.move  && mapState[downI][xCord].type==="LandUnit"){

    tempButton= document.getElementById(`${downI}${xCord}`);
tempButton.style.backgroundColor= "red";

legalSpaces.push(`${downI}${xCord}`)
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
if (leftI>=0 && moveIterator<=current.move  && mapState[yCord][leftI].type==="LandUnit"){
    tempButton= document.getElementById(`${yCord}${leftI}`);
tempButton.style.backgroundColor= "red";

legalSpaces.push(`${yCord}${leftI}`)
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
    if (rightI<=mapState.length && moveIterator<=current.move  && mapState[yCord][rightI].type==="LandUnit"){
        tempButton= document.getElementById(`${yCord}${rightI}`);
    tempButton.style.backgroundColor= "red";
    
    legalSpaces.push(`${yCord}${rightI}`)
    }
    
                   
    setLegalMovesArray(legalSpaces)
   
}
    
}

//endTurn


useEffect(()=>{
    {
        let tempArray=[];
        let tempDemon=null;

        for(let i=0; i<activeDemonsList.length;i++){
           
                 tempDemon=activeDemonsList[i];
                tempDemon.active=true;
                tempArray.push(tempDemon)
        
        }
    setActiveDemonsList(tempArray)   }
    setCurrent(null);
},[endTurn])

function summonButton(){

    if (current){
        if (!activeDemonsList.includes(current)){
            let tempSummonArray=[];
            setCurrentActionButton("summon")
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
    let tempDemon=null;
    for(let i=0; i<activeDemonsList.length;i++){
        if (activeDemonsList[i]===current){
             tempDemon=activeDemonsList[i];
            tempDemon.active=false;
        }
    }
setDemons(e=>e.map(el=> el === current ? tempDemon : el))

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

function attack(y,x){
//initiate battle loop
if (attackTrigger){

    let enemy=mapState[y][x];
    if(current.active){
    if(enemy.type){
        if(enemy.type==="LandUnit"){
            if(current.ability!=="Void"){

                let newDefense= enemy.attackType === "Direct" ? (current.defense-enemy.attack) : current.defense;
            
                let newEnemyDefense=enemy.defense-current.attack;

                if (newEnemyDefense<=0 && newDefense>0){           
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;
                    tempMap[y][x]=current;
                    setMapState(tempMap);
                }
                if (newDefense<=0 && newEnemyDefense>0){
                    let tempDemonsList=activeDemonsList.filter(el=> el.name != current.name);
    
                    setActiveDemonsList(tempDemonsList);
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;

                    setMapState(tempMap);
                }
                if (newDefense<0 && newEnemyDefense<0){
                    let tempDemonsList=activeDemonsList.filter(el=> el.name != current.name);
                    let tempActiveEnemiesList=activeEnemyList.filter(el=>el.name===enemy.name)
                    setActiveDemonsList(tempDemonsList);
                    setActiveEnemyList(tempActiveEnemiesList)
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;
                    tempMap[y][x]=0;
                    setMapState(tempMap);
                    
                }

                if (newDefense>0){

                    let tempDemonsList=[];
                    for (let i=0; i<activeDemonsList.length; i++){
                        if (activeDemonsList[i].name===current.name){
                            let tempObject=current;
                            tempObject.defense=newDefense;
                            tempObject.active=false;
                            tempDemonsList.push(tempObject);
                        }
                        else {
                            tempDemonsList.push(activeDemonsList[i])
                        }
                        // console.log(tempDemonsList)
                        
                    }
                    setActiveDemonsList(tempDemonsList)


                }
                if (newEnemyDefense>0){

                    let tempEnemiesList=[];
                    for (let i=0; i<activeEnemyList.length; i++){
                        if (activeEnemyList[i].name===enemy.name){
                            let tempObject=enemy;
                            tempObject.defense=newEnemyDefense;
                            tempObject.active=false;
                            tempDemonsList.push(tempObject);
                        }
                        else {
                            tempDemonsList.push(activeDemonsList[i])
                        }
                 
                        
                    }
                    setActiveEnemyList(tempEnemiesList)


                }


                // if (newEnemyDefense>0){
                //     let tempEnemiesList=[];
                //     for (let i=0; i<activeEnemyList.length; i++){
                //         if (activeEnemyList[i].name===enemy.name){
                //             let tempObject=enemy;
                //             tempObject.defense=newEnemyDefense;
                //             tempEnemiesList.push(tempObject);
                //         }
                //         else {
                //             tempEnemiesList.push(activeEnemyList[i])
                //         }
                     
                        
                //     }
                //     setActiveEnemyList(tempEnemiesList);
                //     tempMap=mapState;
                //     tempMap.map(el=>el.name===tempObject.name ? tempObject : el)
                //     setMapState(tempMap)


                // }
                for(let i=0; i<activeDemonsList.length;i++){
        // if (activeDemonsList[i]===current){
        //      tempDemon=activeDemonsList[i];
        //     tempDemon.active=false;
        // }
    }


            }
            if (current.ability!="Stealth"){


            }

setCurrent(null);

        }
    }
    }
    if (mapState[y][x].type != "LandUnit"){
        setMoveTrigger(false);
        setAttackTrigger(false);
        setCurseTrigger(false);
        setSummonTrigger(false);
        setCurrent(null);
    }
}
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


useEffect(()=>{

    const keyDownHandler = (event) => {
    if (event.key==='Escape'){
        setMoveTrigger(false);
        setAttackTrigger(false);
        setCurseTrigger(false);
        setSummonTrigger(false);
        setCurrent(null);
        setCurrentCoordinates(null);
        setLegalMovesArray([])
    }

         };
    
    window.addEventListener('keydown', keyDownHandler);
    
    
    
        return () => {
          window.removeEventListener('keydown', keyDownHandler);
        };
    
    
    
    //when the key is lifted it sets the current key to null to stop map movement and the walker to false to stop the animation
    
    },[])
    

  return (
    <div className="camera">
        <div className="battleMap">
    {buttonArr}
       </div>
       <div className='sidePanel'>
<div className='displayCard'>{display}</div>

<div className='summonsList'>{summoningList}</div>

<div className='actionButtonContainer'> {actionButtons}</div>
<div className='playerContainer'>{playerOptions}</div>
</div>

      </div>
  );
};

export default DemoMap;


