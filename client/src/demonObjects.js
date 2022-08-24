import DragonImage from "./assets/demonSprites/even-more-retro-dragonite-dragonite-sprite-gen-1212525.png";
import GoldFish from './assets/demonSprites/clipart1852670.png';
import GrassMan from './assets/demonSprites/clipart937948.png';
import RedMan from './assets/demonSprites/clipart1352153.png';
import PlayerCard from './assets/demonSprites/Uchiha Sasuke by bebenciukas on DeviantArt.png';
import Hakara from './assets/demonSprites/Haku 2.png'

// const haku ={
//     attack: 5,
//     defesne: 2,
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
    cost: 5
},

    Dragonite: {
        name: '',
        attack: 4,
        defense: 4,
        move: 2,
        firstStrike: false,
        bloodLust: false,
        curse: "Love Me",
        curseCost: 2,
        curseDescription: "Lay a trap for your foolish prey. Curse the spot so that the next enemy will die if they begin their turn here",

        description: "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns. ",
        active: true,
        range: 1,
        image: DragonImage,
        summoned: true,
        cost: 5

    },
     Haku: {
        name: "KHak",    
        attack: 5,
            defesne: 2,
            move: 2,
            cost: 8,
            firstStrike: false,
            bloodLust: false,
            curse: "Mirror Dream",
            curseCost: 1,
            curseDescription: "Lay a trap for your foolish prey. Curse the spot so that the next enemy will die if they begin their turn here",

            description: "The demon of the mist's sidekick",
            active: false,
            range: 1,
            image: GoldFish,
            summoned: false,

            cost: 5,



        },
Zabuza: {
            name: "The Shadow Web",    

            attack: 6,
            defesne: 2,
            move: 2,
            cost: 9,
            firstStrike: true,
            bloodLust: true,
            curse: "Black Death",
            curseCost:4,
            curseDescription: "Lay a trap for your foolish prey. Curse the spot so that the next enemy will die if they begin their turn here",
            description: "Seven Layers into the depths of hell, lays the spider queen. A ravenous queen who lures her pray into her web.",
            active: false,
            range: 1,
            image: GrassMan,
            summoned: false,

            cost: 7


        },
Naruto:{
        name: 'Naruto',
            attack: 6,
            defesne: 3,
            move: 2,
            firstStrike: true,
            bloodLust: false,
            curse: "Nine tails",
            curseCost:4,
            curseDescription: "Lay a trap for your foolish prey. Curse the spot so that the next enemy will die if they begin their turn here",


            description: "The unloved. A demon who has never known love",
            active: false,
            range: 1,
            image: RedMan,
            summoned: false,

            cost: 5




        },
      
    }
        




export default DemonObjects;
