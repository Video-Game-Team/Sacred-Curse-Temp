import DragonImage from "./assets/demonSprites/even-more-retro-dragonite-dragonite-sprite-gen-1212525.png"


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
    Dragonite: {
        name: 'dragonite',
        attack: 4,
        defense: 4,
        move: 3,
        firstStrike: false,
        bloodLust: false,
        curse: null,
        description: "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns. ",
        active: true,
        range: 1,
        image: DragonImage,
        cost: 5

    },
     Haku: {
        name: "Haku",    
        attack: 5,
            defesne: 2,
            move: 2,
            cost: 8,
            firstStrike: false,
            bloodLust: false,
            curse: null,
            description: "The demon of the mist's sidekick",
            active: false,
            range: 1,
            image: "",
            cost: 5,



        },
Zabuza: {
            name: "Zabuza",    

            attack: 6,
            defesne: 2,
            move: 2,
            cost: 9,
            firstStrike: true,
            bloodLust: true,
            curse: null,
            description: "The demon of the mist",
            active: true,
            range: 1,
            image: "",
            cost: 7


        },
Naruto:{
        name: 'Naruto',
            attack: 6,
            defesne: 3,
            move: 2,
            firstStrike: true,
            bloodLust: false,
            curse: null,
            description: "The unloved. A demon who has never known love",
            active: true,
            range: 1,
            cost: 5




        },
      
    }
        




export default DemonObjects;
