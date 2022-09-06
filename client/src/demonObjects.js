import DragonImage from "./assets/demonSprites/even-more-retro-dragonite-dragonite-sprite-gen-1212525.png";
import GoldFish from './assets/demonSprites/clipart1852670.png';
import GrassMan from './assets/demonSprites/clipart937948.png';
import RedMan from './assets/demonSprites/clipart1352153.png';
import PlayerCard from './assets/demonSprites/Uchiha Sasuke by bebenciukas on DeviantArt.png';
import Suki from './assets/demonSprites/Suki.png';
import Kipsie from './assets/demonSprites/Kipsie.png';
import Oro from './assets/demonSprites/Oro.png';
import Mishi from './assets/demonSprites/Mishi Mishi.png';
import Angelica from './assets/demonSprites/Angelica.png';
import Byako from './assets/demonSprites/Byako.png';
import Charlie from './assets/demonSprites/Charlie.png';
import CrawLord from './assets/demonSprites/CrawLord.png';
import Chidori from './assets/demonSprites/Chidori.png'
import Dewy from './assets/demonSprites/Dewy.png';
import Hakara from './assets/demonSprites/Hakara.png';
import Hashi from './assets/demonSprites/Hashi.png';
import Jeff from './assets/demonSprites/Jeff.png';
import Wal from './assets/demonSprites/Wal.png';
import Klarsfield from './assets/demonSprites/Klarsfield .png'
// const haku ={
//     attack: 5,
//     defense: 2,
//     move: 2,
//     cost: 8,
//     firstStrike: false,
//     bloodLust: false,
//     curse: null,
//     description: "The demon of the mist's sidekick"
// }


const DemonObjects={
Player:{
    name: 'Shilo',
    attack: 2,
    defense: 2,
    move: 3,
    firstStrike: false,
    bloodLust: false,
    curse: null,
    curseCost: null,
    curseDescription: "Lay a trap for your foolish prey. Curse the spot so that the next enemy will die if they begin their turn here",

    description: "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns. ",
    active: true,
    range: 1,
    image: PlayerCard,
    summoned: true,
    cost: 5,
    type: "Demon",
    health: 2,

},

   



Suki:{
    name: "Suki",
    attack: 3,
    defense: 6,
    health: 6,
    move: 2,
    firstStrike: false,
    bloodLust: false,
    curse: "Traumatize",
    ability: null,
    abilityDescription: null,

    curseCost:2,
    curseDescription: "Bless your current tile. Any demon occupying that tile heals 1 health at the start of your turn.",
    description: "A demon who shines brightest in the moonlight. She promised her dear love that she would wait till the moon fell each night for him to return. Her only true curse; she kept her word.",

    attackType: "melee",
    range: null,
    image: Suki,
    summoned: true,
    active: true,
    cost: 0,
    type: "Demon"


 
},
Kipsie:{
    name: "Kipsie",
    attack: 4,
    defense: 3,
    health: 3,
    move: 2,
    firstStrike: true,
    bloodLust: false,
    curse: null,
    ability: "Stealth",
    abilityDescription: "Can attack before your opponent can do damage. If your opponent is killed, they will not you.",
    curseCost: null,
    curseDescription: null,
    description: "A demon who was shunned before he took his first step. Feared by all. Cursed to wonder reality, seeking the love he has never known.",
    active: true,
    attackType: "melee",
    range: null,
    image: Kipsie,
    summoned: true,
    cost: 0,
    type: "Demon"


},
Mishi:{
    name: "Mishi Mishi",
    attack: 7,
    defense: 5,
    health: 5,
    move: 2,
    firstStrike: false,
    bloodLust: false,
    curse: null,
    ability: null,
    abilityDescription: null,
    curseCost: null,
    curseDescription: null,
    description: "Worshipped as a fallen angel since birth. Loved by all, and revered as a prophetic. Until the world was taken from him. Now he seeks revenge to fill the scurge of pain in his heart ",
    active: true,
    attackType: "melee",
    range: null,
    image: Mishi,
    summoned: true,
    cost: 0,
    type: "Demon"


},
Oro:{
    name: "Oro",
    attack: 2,
    defense: 6,
    health: 6,
    move: 3,
    firstStrike: false,
    bloodLust: false,
    curse: null,
    ability: null,
    abilityDescription: null,
    curseCost: null,
    curseDescription: null,
    description: "Hidden away since birth. Oro has learned protect itself at cost. It runs fast, and defends well.",
    active: false,
    attackType: "melee",
    range: null,
    image: Oro,
    summoned: false,
    cost: 3,
    type: "Demon"


  
    },
  Angelica:{
    name: "Angelica",
    attack: 3,
    defense: 3,
    health: 3,
    move: 2,
    firstStrike: true,
    bloodLust: false,
    curse: null,
    ability: "Stealth",
    abilityDescription: "Can attack before your opponent can do damage. If your opponent is killed, they will not you.",
    curseCost: null,
    curseDescription: null,
    description: "Never hesitates to act. She saw the power and took it without looking back. Now she's a monster willing to kill without a second thought",
    active: false,
    attackType: "melee",
    range: null,
    image: Angelica,
    summoned: false,
    cost: 3,
    type: "Demon"

  },
  Byako:{
    name: "Byako",
    attack: 2,
    defense: 2,
    health: 2,
    move: 3,
    firstStrike: false,
    bloodLust: false,
    curse: "Webbing",
    ability: null,
    abilityDescription: null,
    curseCost: 3,
    curseDescription: "Curse the tile you are on and trap the next enemy to end their turn on it.",
    description: "A lost soul forever seeking a child. She is caught in an infinite samsara of trapping prey for her non existent children.",
    active: false,
    attackType: "melee",
    range: null,
    image: Byako,
    summoned: false,
    cost: 3,
    type: "Demon"

  },

  Charlie:{
    name: "Charlie",
    attack: 6,
    defense: 5,
    health: 5,
    move: 1,
    firstStrike: false,
    bloodLust: true,
    curse: null,
    ability: "Blood Lust",
    abilityDescription: "An evil soul with a bloodlust. Active immediately upon summoning.",
    curseCost: null,
    curseDescription: null,
    description: "A monster from birth. With or without his curse, he would bring havok on everyone he encounters. A warlord with the sleepless desire to conquer.",
    active: true,
    attackType: "melee",
    range: null,
    image: Charlie,
    summoned: false,
    cost: 4,
    type: "Demon"

  },

  CrawLord:{
    name: "Craw Lord",
    attack: 2,
    defense: 4,
    health: 4,
    move: 1,
    firstStrike: false,
    bloodLust: true,
    curse: "Haunting",
    ability: "Blood Lust",
    abilityDescription: "An evil soul with a bloodlust. Active immediately upon summoning.",
    curseCost: 4,
    curseDescription: "Haunt your current tile. Any enemy occupying that tile loses 1 health at the start of your turn.",
    description: "A monster from birth. With or without his curse, he would bring havok on everyone he encounters. A warlord with the sleepless desire to conquer.",
    active: true,
    attackType: "melee",
    range: null,
    image: CrawLord,
    summoned: false,
    cost: 4,
    type: "Demon"


  },
        
  Dewy:{
    name: "Dewy",
    attack: 1,
    defense: 3,
    health: 3,
    move: 2,
    firstStrike: false,
    bloodLust: false,
    curse: null,
    ability: null,
    abilityDescription: null,
    curseCost: null,
    curseDescription: null,
    description: "A musician and artist at heart, but was forced to trade his harp for a bow and arrow to defend his home. He uses his power to protect those he holds most dear. For all of eternity.",
    active: false,
    attackType: "Range",
    range: 3,
    image: Dewy,
    summoned: false,
    cost: 3,
    type: "Demon"


  },
  Hakara:{
    name: "Hakara",
    attack: 1,
    defense: 7,
    health: 7,
    move: 1,
    firstStrike: false,
    bloodLust: false,
    curse: "Silent Night",
    ability: null,
    abilityDescription: null,
    curseCost: 8,
    curseDescription: "A dreadful and evil power. Curse the tile you occupy. The next opponent to end their turn on it will die before morning.",
    description: "Nothing is known about this demon. Her past is vanishes as quickly as her victims.",
    active: false,
    attackType: "melee",
    range: null,
    image: Hakara,
    summoned: false,
    cost: 3,
    type: "Demon"

  },

  Hashi:{

        name: "Hashi",
        attack: 1,
        defense: 6,
        health: 7,
        move: 1,
        firstStrike: false,
        bloodLust: false,
        curse: null,
        ability: "Absorb",
        abilityDescription: "Capture the attacking power of the first enemy you kill with this creature.",
        curseCost: null,
        curseDescription: null,
        description: "A leech all of their lives. Simply stayed alive as long he could, and took what others had for his own",
        active: false,
        attackType: "melee",
        range: null,
        image: Hashi,
        summoned: false,
        cost: 4,
        type: "Demon"

    
  },

  Jeff:{

    name: "Jeff",
    attack: 7,
    defense: 3,
    health: 3,
    move: 1,
    firstStrike: false,
    bloodLust: true,
    curse: null,
    ability: "Blood Lust",
    abilityDescription: "An evil soul with a bloodlust. Active immediately upon summoning.",
    curseCost: null,
    curseDescription: null,
    description: "Some monster are simply understood. Other monsters are simply monsters. An evil soul, with an evil power.",
    active: false,
    attackType: "melee",
    range: null,
    image: Jeff,
    summoned: false,
    cost: 4,
    type: "Demon"


},
Chidori:{

    name: "Chidori",
    attack: 6,
    defense: 1,
    health: 1,
    move: 2,
    firstStrike: true,
    bloodLust: false,
    curse: null,
    ability: "Stealth",
    abilityDescription: "Can attack before your opponent can do damage. If your opponent is killed, they will not you.",
    curseCost: null,
    curseDescription: null,
    description: "XXX",
    active: false,
    attackType: "melee",
    range: null,
    image: Chidori,
    summoned: false,
    cost: 6,
    type: "Demon"


},
Wal:{

    name: "Wal",
    attack: 1,
    defense: 2,
    health: 2,
    move: 2,
    firstStrike: false,
    bloodLust: false,
    curse: null,
    ability: null,
    abilityDescription: null,
    curseCost: null,
    curseDescription: null,
    description: "XXX",
    active: false,
    attackType: "range",
    range: 100,
    image: Wal,
    summoned: false,
    cost: 3,
    type: "Demon"


},
Klarsfield:{

    name: "Klarsfield",
    attack: 7,
    defense: 7,
    health: 7,
    move: 1,
    firstStrike: false,
    bloodLust: false,
    curse: null,
    ability: null,
    abilityDescription: null,
    curseCost: null,
    curseDescription: null,
    description: "XXX",
    active: false,
    attackType: "melee",
    range: null,
    image: Klarsfield,
    summoned: false,
    cost: 6,
    type: "Demon"

}


}

export default DemonObjects;
