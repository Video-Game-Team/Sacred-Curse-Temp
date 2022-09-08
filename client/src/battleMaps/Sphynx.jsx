import React, { useEffect, useState, useRef } from 'react';
import '.././sphynxBM.css';
import DemonObjects from '../demonObjects.js'
import Enemies from '../enemies.js'
import DragonImage from ".././assets/demonSprites/even-more-retro-dragonite-dragonite-sprite-gen-1212525.png"
import Heart from '.././assets/battleMapAssets/heart-e1403272720870.png'
import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals';



//default for every component is a loading screen until the component did mount properly, thae


const SphynxBM = (prop) => {
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
const [playerCoodinates, setPlayerCoordinates]=useState([12,6])
const [staticDemonsList, setStaticDemonsList]= useState(prop.demonList);
const [activeDemonsList, setActiveDemonsList]= useState([prop.demonList[0],prop.demonList[1]]);
const [enemyTurn, setEnemyTurn]= useState(0);
const [cursedSummoningSpots, setCursedSummoningSpots]=useState([]);

const [currentActionButton, setCurrentActionButton]= useState();
const [activeEnemyList, setActiveEnemyList]=useState([Enemies.BlueMegaTank, Enemies.GreenInfantry, Enemies.BlueMech, Enemies.GreenRecon, Enemies.BlueMediumTank, Enemies.BlueMech, Enemies.BlueRecon, Enemies.BlueRecon])

//desert logic
// const [mapState, setMapState]= useState([[activeEnemyList[6],activeEnemyList[6],0,1,1,7,0,0],[1,0,activeEnemyList[6],1,1,activeEnemyList[6],0,0],[0,1,0,0,activeEnemyList[0],0,1,0],[0,1,0,0,activeEnemyList[5],0,1,0],[0,1,activeEnemyList[4],1,1,activeEnemyList[6],0,0],[0,1,activeEnemyList[2],1,1,activeEnemyList[6],1,0],[0,0,activeEnemyList[2],0,0,0,0,activeEnemyList[1]],[0,0,0,0,0,0,0,0]],)

// ice logic
const [mapState, setMapState]= useState([[1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,0,1,0,1,0,1,0,1,1,1,1],[0,1,0,1,0,1,activeEnemyList[0],1,0,1,0,1,0],[0,0,0,0,0,activeEnemyList[3],0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,activeEnemyList[3],0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,activeEnemyList[3],0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,activeEnemyList[1],0,0]])


//fountain logic
// const [mapState, setMapState]= useState([[0,0,0,0,0,0,0,0],[0,1,0,1,1,demons[0],1, 0],[0,0,1,1,1,1,activeEnemyList[0],0],[0,0,1,1,1,1,0,0],[0,activeEnemyList[3],1,1,1,1,activeEnemyList[4],0],[0,activeEnemyList[2],1,1,1,1,0,0],[0,1,demons[1],1,1,0,1,0],[0,0,0,0,0,activeEnemyList[1],0,0]],)

const [curseMap, setCurseMap]= useState([[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]])

//sets action buttons
const actionButtons= [<button className='actionButton' onClick={()=>moveButton()} style={{borderColor: "lime", 
}}><b>MOVE</b></button>,<button className='actionButton'   onClick={()=>attackButton()} style={{borderColor: "red"}} ><b>ATTACK</b></button>,<button className='actionButton '  onClick={()=>curseButton()} style={{borderColor: "darkorchid"}}><b>CURSE</b></button>,<button className='actionButton '  onClick={()=>summonButton()}style={{borderColor: "gold"}}><b>SUMMON</b></button>]

//sets player card
const playerOptions=[[<div className="playerStats" style={{borderColor: "lime", backgroundImage: `${demons[0].image}`
}}>{demons[0].name}</div>,<div  className="playerStats"  style={{borderColor: "lime",
}}>Attack:{demons[0].attack}</div>,<div  className="playerStats" style={{borderColor: "lime", 
}}> Health: {demons[0].health}/{demons[0].defense}</div>,<div className="playerStats" style={{borderColor: "lime", 
}}>Move:{demons[0].move}</div>,<div className="playerStats" style={{borderColor: "lime", backgroundImage: `${demons[0].image}`
}}>{soulBank}</div>,<button className='actionButton glow-on-hover'  onClick={()=>{ enemyTrigger(), setEndTurn(x=>x === true ? false : true)}} style={{borderColor: "silver", backgroundImage: `${demons[0].image}`
}}>End Turn</button>]]

//loads initial summon List
useEffect(()=>{

    let summonsList=[]
for (let i=2; i<demons.length; i++){

    summonsList.push(<button id={demons[i].name} style={{backgroundImage: `url(${demons[i].image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundColor: 'transparent', border: 'none'}} onClick={()=>setCurrent(demons[i])}>  </button>)

    // summonsList.push(<button style={{color: "white"}}> {" ."} {demons[i].name} {" "} </button>)

}
setSummoningList(summonsList)
},[randomTrigger])


function enemyTrigger(){

    let tempCordsArr=[];
    let enemiesMoveList=[]
    let tempScore=0;
    let moveValueArray=[]
    let currentEnemiesArray=[]
    let originalEnemiesCoordinates=[];
    let originalEnemiesCoordinatesSubArray=[];
    let tempEnemyOGCords;

    // for (let k=1; k<=mapState[i][j].move; k++){
    //     k-i>=0 ? tempCordsArr.push(mapState[k-i]) : null;
    //     k+i<mapState.length ? tempCordsArr.push(mapState[k+1] : )
    // } 

    //logic gate to set

let moveIterator=0;


let upI;
let downI;
let rightI;
let leftI;


//legal enemy moves array builder
for (let i=0; i<mapState.length; i++){
    for (let j=0; j<mapState[i].length; j++){
       

        if (mapState[i][j].type==="LandUnit"){
            currentEnemiesArray.push(mapState[i][j]);

                    tempEnemyOGCords=`${i}${j}`

            if (tempEnemyOGCords.length ===2){
                originalEnemiesCoordinatesSubArray.push(tempEnemyOGCords[0],tempEnemyOGCords[1])
                originalEnemiesCoordinates.push(originalEnemiesCoordinatesSubArray);
                originalEnemiesCoordinatesSubArray=[]
                
            }
            if (tempEnemyOGCords.length ===3){
                if (tempEnemyOGCords[0]<2){

                originalEnemiesCoordinatesSubArray.push(`${tempEnemyOGCords[0]}${tempEnemyOGCords[1]}`,tempEnemyOGCords[2])
                originalEnemiesCoordinates.push(originalEnemiesCoordinatesSubArray);
                originalEnemiesCoordinatesSubArray=[]
                }
                if (tempEnemyOGCords[0]>=2){

                    originalEnemiesCoordinatesSubArray.push(tempEnemyOGCords[0],`${tempEnemyOGCords[1]}${tempEnemyOGCords[2]}`)
                    originalEnemiesCoordinates.push(originalEnemiesCoordinatesSubArray);
                    originalEnemiesCoordinatesSubArray=[]
                    }
                
            }
            if (tempEnemyOGCords.length ===4){
                
                originalEnemiesCoordinatesSubArray.push(`${tempEnemyOGCords[0]}${tempEnemyOGCords[1]}`,`${tempEnemyOGCords[2]}${tempEnemyOGCords[3]}`)
                originalEnemiesCoordinates.push(originalEnemiesCoordinatesSubArray);
                originalEnemiesCoordinatesSubArray=[]
                    
            }
            upI=i-1;
             downI=i+1;
             rightI=j+1;
             leftI=j-1;
             moveIterator=0;


            if (upI>=0){
    
                while(mapState[upI][j]===0 && moveIterator<mapState[i][j].move){

                    moveIterator++;
                    tempCordsArr.push(`${upI}${j}`)
                
                    upI--;

                
                    if (upI<0) break;
                }
                if (upI>=0 && moveIterator<mapState[i][j].move  && mapState[upI][j].type==="Demon"){
                    tempCordsArr.push(`${upI}${j}`)
                }
            }

               
                moveIterator=0;

                if (downI<mapState.length){
                
                while(mapState[downI][j]===0 && moveIterator<mapState[i][j].move){
                    

        
                    moveIterator++;
                    
                    tempCordsArr.push(`${downI}${j}`)
                
                    downI++;
                    if (downI>mapState.length-1) break;
                
                }
                if (downI<mapState.length && moveIterator<mapState[i][j].move && mapState[downI][j].type==="Demon"){
                    tempCordsArr.push(`${downI}${j}`)
                }

                }
                moveIterator=0;
                
                if (leftI>=0){
                while(mapState[i][leftI]===0 && moveIterator<mapState[i][j].move){
                 
                    moveIterator++;
                    tempCordsArr.push(`${i}${leftI}`)
                
                    leftI-=1;
                    if (leftI<0) break;
                
                }
                if (leftI>=0 && moveIterator<mapState[i][j].move && mapState[i][leftI].type==="Demon"){
                 
                
                    tempCordsArr.push(`${i}${leftI}`)
                }
                }
                moveIterator=0;
                if (rightI<mapState.length){
                    while(mapState[i][rightI]===0 && moveIterator<mapState[i][j].move){
                      
                        moveIterator++;
                        tempCordsArr.push(`${i}${rightI}`)
                
                        rightI++;
                        if (rightI>mapState.length-1) break;
                
                    }

                    //xxx
                    if (rightI<mapState.length && moveIterator<mapState[i][j].move  && mapState[i][rightI].type==="Demon"){
                       
                    
                        tempCordsArr.push(`${i}${rightI}`)
                    }
                    }
                  
                    
                        tempCordsArr.push(`${i}${j}`)
                    
                    enemiesMoveList.push(tempCordsArr);
                    tempCordsArr=[];

        }
        moveIterator=0
    }
    }

    let decidedMoves=[];
    let decidedMovesSubArray=[];
    let decidedMovesArray=[];
    let tempDecideMoves;

    let randomValue;
    let finalValues;
    let temp;
for (let i=0; i<enemiesMoveList.length; i++){
 
    for(let j=0; j<enemiesMoveList[i].length; j++){
        if (decidedMoves.includes(`${enemiesMoveList[i][j][0]}${enemiesMoveList[i][j][1]}`)){
            tempScore=0;
            moveValueArray.push(tempScore);
        continue;}
        if (mapState[enemiesMoveList[i][j][0]][enemiesMoveList[i][j][1]].type==="Demon"){
            if (mapState[enemiesMoveList[i][j][0]][enemiesMoveList[i][j][1]].name==="Shilo"){
                mapState[enemiesMoveList[i][j][0]][enemiesMoveList[i][j][1]].defense <= currentEnemiesArray[i].attack ? tempScore+=20 :tempScore+=15;
             
            }
            else if(mapState[enemiesMoveList[i][j][0]][enemiesMoveList[i][j][1]].defense<=currentEnemiesArray[i].attack){
                currentEnemiesArray[i].defense> mapState[enemiesMoveList[i][j][0]][enemiesMoveList[i][j][1]].attack ? tempScore+=15 :tempScore+=9;
            }
            else if(currentEnemiesArray[i].defense> mapState[enemiesMoveList[i][j][0]][enemiesMoveList[i][j][1]].attack){
                tempScore+=7
            }
            else if(currentEnemiesArray[i].defense<=mapState[enemiesMoveList[i][j][0]][enemiesMoveList[i][j][1]].attack){
                tempScore+=4
            }
           
         


        }
        if (tempScore===0){

            randomValue=Math.ceil(Math.random() * 5);
            tempScore+=randomValue;
        }

        moveValueArray.push(tempScore);
        tempScore=0;
      

    }

    finalValues=(Math.max(...moveValueArray));


//make sure it's not already taken
tempDecideMoves=enemiesMoveList[i][moveValueArray.indexOf(finalValues)]

    decidedMoves.push(tempDecideMoves);
    console.log(tempDecideMoves)
    console.log(tempDecideMoves)



    if (tempDecideMoves.length ===2){
        decidedMovesSubArray.push(tempDecideMoves[0],tempDecideMoves[1])
        decidedMovesArray.push(decidedMovesSubArray);
        decidedMovesSubArray=[]
        
    }
    if (tempDecideMoves.length ===3){

console.log("hit me")
        if (tempDecideMoves[0]<2){
        decidedMovesSubArray.push(`${tempDecideMoves[0]}${tempDecideMoves[1]}`,tempDecideMoves[2])
        decidedMovesArray.push(decidedMovesSubArray);
        console.log(decidedMovesSubArray)
        decidedMovesSubArray=[]
        }
        if (tempDecideMoves[0]>=2){

            decidedMovesSubArray.push(tempDecideMoves[0],`${tempDecideMoves[1]}${tempDecideMoves[2]}`)
            decidedMovesArray.push(decidedMovesSubArray);
            console.log(decidedMovesSubArray)

            decidedMovesSubArray=[]
            }
        }
    
    if (tempDecideMoves.length ===4){
        
            decidedMovesSubArray.push(`${tempDecideMoves[0]}${tempDecideMoves[1]}`,`${tempDecideMoves[2]}${tempDecideMoves[3]}`)
            decidedMovesArray.push(decidedMovesSubArray);
            decidedMovesSubArray=[]
            
    }


                
          

    moveValueArray=[];
   

}


let newDefense;
let newEnemyDefense;
let tempDemon;
let tempMap=mapState;
let tempDemonsList=activeDemonsList;
let currentSoldier;
let newSoulBank=soulBank;
console.log(originalEnemiesCoordinates)

for (let i=0; i < decidedMoves.length; i++){
    if(decidedMoves[i].length){
    
    currentSoldier=currentEnemiesArray[i]
    if(tempMap[decidedMovesArray[i][0]][decidedMovesArray[i][1]]===0){

        tempMap[decidedMovesArray[i][0]][decidedMovesArray[i][1]]=currentEnemiesArray[i];
      

        tempMap[originalEnemiesCoordinates[i][0]][originalEnemiesCoordinates[i][1]]=0;

    }
    else if(tempMap[decidedMovesArray[i][0]][decidedMovesArray[i][1]].type != "Demon"){
        continue;

    }
    }
else{
    tempDemon=tempMap[decidedMovesArray[i][0]][decidedMovesArray[i][1]];
        // console.log(currentSoldier)

     newDefense= tempDemon.defense-currentSoldier.attack;
     newEnemyDefense=currentSoldier.defense-tempDemon.attack
    
     //if soldier dies but demon lives
     if (newEnemyDefense<=0 && newDefense>0){    

        for (let k=0; k<activeDemonsList.length; k++){
            if (tempDemon.name===activeDemonsList[k].name){
                tempDemonsList[k].defense=newDefense

            }
        }
        tempMap[originalEnemiesCoordinates[i][0]][originalEnemiesCoordinates[i][1]]=0;
        newSoulBank+=currentSoldier.attack;

    
    };
    //if demon dies but soldier lives
    if (newDefense<=0 && newEnemyDefense>0){
        tempMap[decidedMovesArray[i][0]][decidedMovesArray[i][1]]=currentEnemiesArray[i];
        tempMap[originalEnemiesCoordinates[i][0]][originalEnemiesCoordinates[i][1]]=0;
        tempDemonsList=activeDemonsList.filter(el=> el.name != tempDemon.name)};
        currentSoldier.defense=newEnemyDefense;
    //if both die
    if (newEnemyDefense<=0 && newDefense<=0){
        tempDemonsList=activeDemonsList.filter(el=> el.name != tempDemon.name)
        tempMap[originalEnemiesCoordinates[i][0]][originalEnemiesCoordinates[i][1]]=0;
        tempMap[decidedMovesArray[i][0]][decidedMovesArray[i][1]]=0
        newSoulBank+=currentSoldier.attack;
    };
    if (newEnemyDefense>0 && newDefense>0){
        currentSoldier.defense=newEnemyDefense;
        for (let k=0; k<activeDemonsList.length; k++){
            if (tempDemon.name===activeDemonsList[k].name){
                tempDemonsList[k].defense=newDefense;
                
            }
        }
        
    }    

}
}
setMapState(tempMap)
setActiveDemonsList(tempDemonsList)
setSoulBank(newSoulBank)
setEnemyTurn(x=>x+1)


   
}
//turn Loopc
// console.log(activeEnemyList)
//
useEffect(()=>{

    let tempDemonsList=activeDemonsList;
    let tempEnemiesList=activeEnemyList;
    let tempMap=mapState;
    let newCurseMap=curseMap;
    let newSoulCount=soulBank
  
     for (let i=0; i<mapState.length; i++){
         for (let j=0; j<mapState.length; j++){
         if (mapState[i][j] != 0 && mapState[i][j] !=1){
            let newEnemy=mapState[i][j];
            let newDemon=mapState[i][j];


             if (curseMap[i][j]===0){
                 mapState[i][j].type === "Demon" ? tempDemonsList.push(mapState[i][j]) : tempEnemiesList.push(mapState[i][j])
             }
             if (curseMap[i][j]=="Blessing" && mapState[i][j].type==="Demon"){
                 
                 newDemon.defense=(newDemon.defense+1);
                 if (newDemon.defense>newDemon.health){
                     newDemon.defense=newDemon.health
                 } 
                 tempDemonsList.push(newDemon)
             }
             if (curseMap[i][j]=="Haunting" && mapState[i][j].type==="LandUnit"){
                 
                 newEnemy.defense=(newEnemy.defense-1);
                 if (newEnemy.defense<=0){
                    newSoulCount+=newEnemy.attack
                     tempMap[i][j]=0
                     
                 }
                 else{
                     tempEnemiesList.push(mapState[i][j])
                 }
             }

             if (curseMap[i][j]=="Petrify" && mapState[i][j].type==="LandUnit"){

                newEnemy.move=0;
                tempEnemiesList.push(mapState[i][j]);

             }
             if (curseMap[i][j]=="Traumatize" && mapState[i][j].type==="LandUnit"){

                newEnemy.attack=0;
                newCurseMap[i][j]=0
                tempEnemiesList.push(mapState[i][j]);

             }
             if (curseMap[i][j]=="Silent Night" && mapState[i][j].type==="LandUnit"){
                newSoulCount+=newEnemy.attack
 
                tempMap[i][j]=0;
                
                newCurseMap[i][j]=0



         }
        }
    }
     }
     setSoulBank(newSoulCount)
     setCurseMap(newCurseMap)
     setMapState(tempMap)
     setActiveDemonsList(tempDemonsList)
     setActiveEnemyList(tempEnemiesList)

 
 },[enemyTurn])


let buttonArr=[];
for (let y=0; y<mapState.length; y++){

  for (let x=0; x<mapState.length; x++){
 
//empty space and a curse
    if (mapState[y][x]===0 && curseMap[y][x] !=0){
buttonArr.push(<button id={`${y}${x}`} onClick={()=> {active(y,x); move(y,x); summonSpot(y,x); curse(y,x);attack(y,x)}} className="demon glow-on-hover" style={{
    gridColumn: x+1,
    gridRow: y+1,
 
    border: '2mm inset purple'
}}
>
    {y}-{x}
 {/* {current ? curseMap[y][x] : null}   */}
</button>)
    }
    //empty state and no curse
    if (mapState[y][x]===0 && curseMap[y][x] ==0){
        buttonArr.push(<button id={`${y}${x}`} onClick={()=> {active(y,x); move(y,x); summonSpot(y,x); curse(y,x);attack(y,x)}} className="demon glow-on-hover" style={{
            gridColumn: x+1,
            gridRow: y+1,
            color: "black"
        }}
        >
                {y}-{x}

        
        </button>)
            }
            //entity and curse
    if (mapState[y][x].type != 0 && curseMap[y][x] !=0){
        buttonArr.push(<button id={`${y}${x}`} onClick={()=> {active(y,x); move(y,x); summonSpot(y,x); curse(y,x);attack(y,x)}} className="demon glow-on-hover" style={{
            gridColumn: x+1,
            gridRow: y+1,
            color: "white",
            backgroundImage: `url(${mapState[y][x].image})`,
            backgroundSize: '100%',
             border: '2mm inset purple'

        }}
        >
                {y}-{x}

        </button>)
            }
            //entity and no curse
            if (mapState[y][x].type != 0  && curseMap[y][x] ==0){
                buttonArr.push(<button id={`${y}${x}`} onClick={()=> {active(y,x); move(y,x); summonSpot(y,x); curse(y,x);attack(y,x)}} className="demon glow-on-hover" style={{
                    gridColumn: x+1,
                    gridRow: y+1,
                    color: "white",
                    backgroundImage: `url(${mapState[y][x].image})`,
                    backgroundSize: '100%'
                }}
                >
                        {y}-{x}

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

    let classArray=document.getElementsByClassName(`demon`);
    for (let i=0; i<classArray.length; i++){
        classArray[i].classList.remove('move-glow', 'attack-glow', 'summon-glow')


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
    tempButton.classList.add('move-glow')
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
    tempButton.classList.add('move-glow')
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
    tempButton.classList.add('move-glow')
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
        tempButton.classList.add('move-glow')
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
        // document.getElementById(`${currentCoordinates}`).style.borderColor="purple";
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
    if(current.curse==="Seance"){
        let newSummonSpotsArray=cursedSummoningSpots;
        newSummonSpotsArray.push(`${yCord}${xCord}`)
        setCursedSummoningSpots(newSummonSpotsArray)
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
        tempButton.classList.add('attack-glow')
        moveIterator++;
        legalSpaces.push(`${upI}${xCord}`)
    
        upI-=1;
    
        if (upI<0) break;
    }
    if (upI>=0 && moveIterator<current.move  && mapState[upI][xCord].type==="LandUnit"){

        tempButton= document.getElementById(`${upI}${xCord}`);
        tempButton.classList.add('attack-glow')
    moveIterator++;
    legalSpaces.push(`${upI}${xCord}`)
    }
        
    }
moveIterator=0;
if (downI<mapState.length){

while(mapState[downI][xCord]===0 && moveIterator<current.move){

    tempButton= document.getElementById(`${downI}${xCord}`);
    tempButton.classList.add('attack-glow')

    legalSpaces.push(`${downI}${xCord}`)
    moveIterator++;

    downI++;
    if (downI>mapState.length-1) break;

}

if (downI<mapState.length && moveIterator<current.move  && mapState[downI][xCord].type==="LandUnit"){

    tempButton= document.getElementById(`${downI}${xCord}`);
    tempButton.classList.add('attack-glow')

legalSpaces.push(`${downI}${xCord}`)
}

}
moveIterator=0;

if (leftI>=0){
while(mapState[yCord][leftI]===0 && moveIterator<current.move){
    tempButton= document.getElementById(`${yCord}${leftI}`);
    tempButton.classList.add('attack-glow')
    moveIterator++;
    legalSpaces.push(`${yCord}${leftI}`)

    leftI-=1;
    if (leftI<0) break;

}
if (leftI>=0 && moveIterator<current.move  && mapState[yCord][leftI].type==="LandUnit"){
    tempButton= document.getElementById(`${yCord}${leftI}`);
    tempButton.classList.add('attack-glow')

legalSpaces.push(`${yCord}${leftI}`)
}


}
moveIterator=0;
if (rightI<mapState.length){
    while(mapState[yCord][rightI]===0 && moveIterator<current.move){
        tempButton= document.getElementById(`${yCord}${rightI}`);
        tempButton.classList.add('attack-glow')
        moveIterator++;
        legalSpaces.push(`${yCord}${rightI}`)

        rightI++;
        if (rightI>mapState.length-1) break;

    }
    }
    if (rightI<mapState.length && moveIterator<current.move  && mapState[yCord][rightI].type==="LandUnit"){
        tempButton= document.getElementById(`${yCord}${rightI}`);
        tempButton.classList.add('attack-glow')
    
    legalSpaces.push(`${yCord}${rightI}`)
    }
    
                   
    setLegalMovesArray(legalSpaces)
    
    //probably not neccesary but just in case
    //moveIterator=0;
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
                        document.getElementById(`${playerCoodinates[0]-1}${playerCoodinates[1]}`).classList.add("summon-glow")
                            tempSummonArray.push(`${playerCoodinates[0]-1}${playerCoodinates[1]}`)
                        ;}}
                if(playerCoodinates[0]<mapState.length-1){
                    if (mapState[playerCoodinates[0]+1][playerCoodinates[1]] ===0  ){
                        document.getElementById(`${playerCoodinates[0]+1}${playerCoodinates[1]}`).classList.add("summon-glow");
                        tempSummonArray.push(`${playerCoodinates[0]+1}${playerCoodinates[1]}`);
                    }


}
                if ( playerCoodinates[1]-1>=0){
                    if(mapState[playerCoodinates[0]][playerCoodinates[1]-1] ===0){
                        document.getElementById(`${playerCoodinates[0]}${playerCoodinates[1]-1}`).classList.add("summon-glow");
                        tempSummonArray.push(`${playerCoodinates[0]}${playerCoodinates[1]-1}`)}
                      

  }
                if ( playerCoodinates[1]<mapState.length-1 ){
                    if (mapState[playerCoodinates[0]][playerCoodinates[1]+1] ===0){

                        document.getElementById(`${playerCoodinates[0]}${playerCoodinates[1]+1}`).classList.add("summon-glow");
                        tempSummonArray.push(`${playerCoodinates[0]}${playerCoodinates[1]+1}`)
                    }

               
}


//adds the cursed spots to the array
for (let i=0; i<cursedSummoningSpots.length; i++){
    console.log("hittttt")
    if (mapState[cursedSummoningSpots[i][0]][cursedSummoningSpots[i][1]]===0){
    tempSummonArray.push(cursedSummoningSpots[i])
    document.getElementById(`${cursedSummoningSpots[i][0]}${cursedSummoningSpots[i][1]}`).classList.add("summon-glow")
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

let stringCords=`${y}${x}`;

if (attackTrigger){


    let enemy=mapState[y][x];
    if(current.active){
    if(enemy.type){
        if(enemy.type==="LandUnit"){
            if (legalMovesArray.includes(stringCords)){
            if(!current.ability){
                let newDefense= current.defense-enemy.attack;
            
                let newEnemyDefense=enemy.defense-current.attack;

                if (newEnemyDefense<=0 && newDefense>0){           
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;
                    tempMap[y][x]=current;
       
                    setMapState(tempMap);
                    setSoulBank(x=>x+enemy.attack)
                }
                if (newDefense<=0 && newEnemyDefense>0){
                    let tempDemonsList=activeDemonsList.filter(el=> el.name != current.name);
    
                    setActiveDemonsList(tempDemonsList);
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;

                    setMapState(tempMap);
                }
                if (newDefense<=0 && newEnemyDefense<=0){
                    let tempDemonsList=activeDemonsList.filter(el=> el.name != current.name);
                    let tempActiveEnemiesList=activeEnemyList.filter(el=>el.name===enemy.name)
                    setActiveDemonsList(tempDemonsList);
                    setActiveEnemyList(tempActiveEnemiesList)
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;
                    tempMap[y][x]=0;
                    setMapState(tempMap);
                    setSoulBank(x=>x+enemy.attack)

                    
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
                            tempEnemiesList.push(activeDemonsList[i])
                        }
                 
                        
                    }

                    

                    setActiveEnemyList(tempEnemiesList)


                }


            }
            if(current.ability==="Stealth"){

                if (current.attack>=enemy.defense){
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;
                    tempMap[y][x]=current;
       
                    setMapState(tempMap);
                    setSoulBank(x=>x+enemy.attack)

                }
                if(current.attack< enemy.defense){
                let newDefense= enemy.attackType === "Direct" ? (current.defense-enemy.attack) : current.defense;
            
                let newEnemyDefense=enemy.defense-current.attack;

                if (newEnemyDefense<=0 && newDefense>0){           
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;
                    tempMap[y][x]=current;
       
                    setMapState(tempMap);
                    setSoulBank(x=>x+enemy.attack)
                }
                if (newDefense<=0 && newEnemyDefense>0){
                    let tempDemonsList=activeDemonsList.filter(el=> el.name != current.name);
    
                    setActiveDemonsList(tempDemonsList);
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;

                    setMapState(tempMap);
                }
                if (newDefense<=0 && newEnemyDefense<=0){
                    let tempDemonsList=activeDemonsList.filter(el=> el.name != current.name);
                    let tempActiveEnemiesList=activeEnemyList.filter(el=>el.name===enemy.name)
                    setActiveDemonsList(tempDemonsList);
                    setActiveEnemyList(tempActiveEnemiesList)
                    let tempMap=mapState;
                    tempMap[yCord][xCord]=0;
                    tempMap[y][x]=0;
                    setMapState(tempMap);
                    setSoulBank(x=>x+enemy.attack)

                    
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
                            tempEnemiesList.push(activeDemonsList[i])
                        }
                 
                        
                    }

                    

                    setActiveEnemyList(tempEnemiesList)


                }


            }
        }
            
            
           

setCurrent(null);
setLegalMovesArray(null)

        }
    }
    }
    if (mapState[y][x].type != "LandUnit"){
        setMoveTrigger(false);
        setAttackTrigger(false);
        setCurseTrigger(false);
        setSummonTrigger(false);
        setCurrent(null);
        setLegalMovesArray(null)
    }
}
//set curent to null
}
}

function curse(){
//pay curse cost?
//set curent to null
}

function summonSpot(y,x){
    if (summonTrigger){
        if (legalSummoningArray.includes(`${y}${x}`)){
            console.log(legalSummoningArray)
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
        <div className="battleMapSphynx">
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

export default SphynxBM;


