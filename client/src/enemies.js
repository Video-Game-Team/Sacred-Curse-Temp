


import BlueInfantry from './assets/SunKingArmy/Blue/BlueInfantry.png'
import BlueAA from './assets/SunKingArmy/Blue/BlueAA.png'
import BlueApc from './assets/SunKingArmy/Blue/BlueApc.png'
import BlueArtillery from './assets/SunKingArmy/Blue/BlueArtillery.png'
import BlueMech from './assets/SunKingArmy/Blue/BlueMech.png'
import BlueMegaTank from './assets/SunKingArmy/Blue/BlueMegaTank.png'
import BlueNeoTank from './assets/SunKingArmy/Blue/BlueNeoTank.png'
import BlueRecon from './assets/SunKingArmy/Blue/BlueRecon.png'
import BlueRocket from './assets/SunKingArmy/Blue/BlueRocket.png'
import BlueTank from './assets/SunKingArmy/Blue/BlueTank.png'
import BlueMediumTank from './assets/SunKingArmy/Blue/BlueTank2.png'
import BlueMissile from './assets/SunKingArmy/Blue/BlueMissile.png'
import GreenMediumTank from './assets/SunKingArmy/Green/GreeenMediumTank.png'
import GreenAA from './assets/SunKingArmy/Green/GreenAA.png'
import GreenApc from './assets/SunKingArmy/Green/GreenApc.png'
import GreenArtillery from './assets/SunKingArmy/Green/GreenArtillery.png'
import GreenInfantry from './assets/SunKingArmy/Green/GreenInfantry.png'
import GreenMech from './assets/SunKingArmy/Green/GreenMech.png'
import GreenMegaTank from './assets/SunKingArmy/Green/GreenMegaTank.png'
import GreenMissiles from './assets/SunKingArmy/Green/GreenMissiles.png'
import GreenRecon from './assets/SunKingArmy/Green/GreenRecon.png'
import GreenRocket from './assets/SunKingArmy/Green/GreenRocket.png'
import GreenTank from './assets/SunKingArmy/Green/GreenTank1.png'
import GreenNeoTank from './assets/SunKingArmy/Green/GreenNeoTank.png'
// import Green from './assets/SunKingArmy/Green/GreeenMediumTank.png'








const enemies={ 
RedInfantry: { attack: 1, defense: 3, health: 3, move: 3, image: 'RedInfantry', description: 'description', name: 'Infantry', type: 'LandUnit', attackType: 'Direct', reach: null },

RedMech: { attack: 2, defense: 3, health: 3, move: 2, image: 'RedMech', description: 'description', name: 'Mech', type: 'LandUnit', attackType: 'Direct', reach: null },

RedRecon: { attack: 1, defense: 1, health: 1, move: 5, image: 'RedRecon', description: 'description', name: 'Recon', type: 'LandUnit', attackType: 'Direct', reach: null }, 

RedTank: { attack: 3, defense: 4, health: 4, move: 4, image: 'RedTank', description: 'description', name: 'Tank', type: 'LandUnit', attackType: 'Direct', reach: null },

RedArtillery: { attack: 3, defense: 2, health: 2, move: 3, image: 'RedArtillery', description: 'description', name: 'Artillery', type: 'LandUnit', attackType: 'Range', reach: 2 },

RedApc: { attack: 0, defense: 6, health: 6, move: 4, image: 'RedApc', description: 'description', name: 'Apc', type: 'LandUnit', attackType: 'Direct', reach: null },

RedMediumTank: { attack: 4, defense: 6, health: 6, move: 4, image: 'RedMediumTank', description: 'description', name: 'MediumTank', type: 'LandUnit', attackType: 'Direct', reach: null }, 

RedRockets: { attack: 4, defense: 3, health: 3, move: 3, image: 'RedRockets', description: 'description', name: 'Rockets', type: 'LandUnit', attackType: 'Range', reach: 2 },

RedAA: { attack: 1, defense: 2, health: 2, move: 5, image: 'RedAA', description: 'description', name: 'AA', type: 'LandUnit', attackType: 'Direct', reach: null }, 

RedMissiles: { attack: 6, defense: 4, health: 4, move: 2, image: 'RedMissiles', description: 'description', name: 'Missiles', type: 'LandUnit', attackType: 'Range', reach: 3 },

RedNeoTank: { attack: 6, defense: 8, health: 8, move: 5, image: 'RedNeoTank', description: 'description', name: 'NeoTank', type: 'LandUnit', attackType: 'Direct', reach: null },

RedMegaTank: { attack: 9, defense: 12, health: 12, move: 3, image: 'RedMegaTank', description: 'description', name: 'MegaTank', type: 'LandUnit', attackType: 'Direct', reach: null }, 

GreenInfantry: { attack: 2, defense: 2, health: 2, move: 2, image: GreenInfantry, description: 'description', name: 'Infantry', type: 'LandUnit', attackType: 'Direct', reach: null }, 

GreenMech: { attack: 3, defense: 2, health: 2, move: 1, image: GreenMech, description: 'description', name: 'Mech', type: 'LandUnit', attackType: 'Direct', reach: null }, 

GreenRecon: { attack: 2, defense: 1, health: 1, move: 4, image: GreenRecon, description: 'description', name: 'Recon', type: 'LandUnit', attackType: 'Direct', reach: null },

GreenTank: { attack: 4, defense: 3, health: 3, move: 3, image: GreenTank, description: 'description', name: 'Tank', type: 'LandUnit', attackType: 'Direct', reach: null }, 

GreenArtillery: { attack: 5, defense: 1, health: 1, move: 2, image: GreenArtillery, description: 'description', name: 'Artillery', type: 'LandUnit', attackType: 'Range', reach: 2 },

GreenApc: { attack: 1, defense: 5, health: 5, move: 3, image: GreenApc, description: 'description', name: 'Apc', type: 'LandUnit', attackType: 'Direct', reach: null }, 

GreenMediumTank: { attack: 5, defense: 5, health: 5, move: 3, image: GreenMediumTank, description: 'description', name: 'MediumTank', type: 'LandUnit', attackType: 'Direct', reach: null },

GreenRockets: { attack: 6, defense: 2, health: 2, move: 2, image: GreenRocket, description: 'description', name: 'Rockets', type: 'LandUnit', attackType: 'Range', reach: 2 }, 

GreenAA: { attack: 2, defense: 1, health: 1, move: 4, image: GreenAA, description: 'description', name: 'AA', type: 'LandUnit', attackType: 'Direct', reach: null }, 

GreenMissiles: { attack: 8, defense: 3, health: 3, move: 1, image: GreenMissiles, description: 'description', name: 'Missiles', type: 'LandUnit', attackType: 'Range', reach: 3 }, 

GreenNeoTank: { attack: 7, defense: 7, health: 7, move: 4, image: GreenNeoTank, description: 'description', name: 'NeoTank', type: 'LandUnit', attackType: 'Direct', reach: null }, 

GreenMegaTank: { attack: 10, defense: 11, health: 11, move: 2, image: GreenMegaTank, description: 'description', name: 'MegaTank', type: 'LandUnit', attackType: 'Direct', reach: null }, 

YellowInfantry: { attack: 4, defense: 3, health: 3, move: 2, image: 'YellowInfantry', description: 'description', name: 'Infantry', type: 'LandUnit', attackType: 'Direct', reach: null }, 
           YellowMech: { attack: 5, defense: 3, health: 3, move: 1, image: 'YellowMech', description: 'description', name: 'Mech', type: 'LandUnit', attackType: 'Direct', reach: null }, 
           YellowRecon: { attack: 2, defense: 1, health: 1, move: 4, image: 'YellowRecon', description: 'description', name: 'Recon', type: 'LandUnit', attackType: 'Direct', reach: null }, 
           YellowTank: { attack: 4, defense: 4, health: 4, move: 3, image: 'YellowTank', description: 'description', name: 'Tank', type: 'LandUnit', attackType: 'Direct', reach: null }, 
           YellowArtillery: { attack: 4, defense: 2, health: 2, move: 2, image: 'YellowArtillery', description: 'description', name: 'Artillery', type: 'LandUnit', attackType: 'Range', reach: 2 }, 
           YellowApc: { attack: 1, defense: 6, health: 6, move: 3, image: 'YellowApc', description: 'description', name: 'Apc', type: 'LandUnit', attackType: 'Direct', reach: null }, 
           YellowMediumTank: { attack: 5, defense: 6, health: 6, move: 3, image: 'YellowMediumTank', description: 'description', name: 'MediumTank', type: 'LandUnit', attackType: 'Direct', reach: null }, 
           YellowRockets: { attack: 5, defense: 3, health: 3, move: 2, image: 'YellowRockets', description: 'description', name: 'Rockets', type: 'LandUnit', attackType: 'Range', reach: 2 },
            YellowAA: { attack: 2, defense: 2, health: 2, move: 4, image: 'YellowAA', description: 'description', name: 'AA', type: 'LandUnit', attackType: 'Direct', reach: null },
             YellowMissiles: { attack: 7, defense: 4, health: 4, move: 1, image: 'YellowMissiles', description: 'description', name: 'Missiles', type: 'LandUnit', attackType: 'Range', reach: 3 },
              YellowNeoTank: { attack: 7, defense: 8, health: 8, move: 4, image: 'YellowNeoTank', description: 'description', name: 'NeoTank', type: 'LandUnit', attackType: 'Direct', reach: null }, 
              YellowMegaTank: { attack: 10, defense: 12, health: 12, move: 2, image: 'YellowMegaTank', description: 'description', name: 'MegaTank', type: 'LandUnit', attackType: 'Direct', reach: null }, 
              
              GreyInfantry: { attack: 1, defense: 4, health: 4, move: 2, image: 'GreyInfantry', description: 'description', name: 'Infantry', type: 'LandUnit', attackType: 'Direct', reach: null }, 
              
              GreyMech: { attack: 2, defense: 4, health: 4, move: 1, image: 'GreyMech', description: 'description', name: 'Mech', type: 'LandUnit', attackType: 'Direct', reach: null },
              
              GreyRecon: { attack: 2, defense: 2, health: 2, move: 4, image: 'GreyRecon', description: 'description', name: 'Recon', type: 'LandUnit', attackType: 'Direct', reach: null }, GreyTank: { attack: 4, defense: 5, health: 5, move: 3, image: 'GreyTank', description: 'description', name: 'Tank', type: 'LandUnit', attackType: 'Direct', reach: null }, GreyArtillery: { attack: 4, defense: 3, health: 3, move: 2, image: 'GreyArtillery', description: 'description', name: 'Artillery', type: 'LandUnit', attackType: 'Range', reach: 2 }, GreyApc: { attack: 1, defense: 7, health: 7, move: 3, image: 'GreyApc', description: 'description', name: 'Apc', type: 'LandUnit', attackType: 'Direct', reach: null }, GreyMediumTank: { attack: 5, defense: 7, health: 7, move: 3, image: 'GreyMediumTank', description: 'description', name: 'MediumTank', type: 'LandUnit', attackType: 'Direct', reach: null }, GreyRockets: { attack: 5, defense: 4, health: 4, move: 2, image: 'GreyRockets', description: 'description', name: 'Rockets', type: 'LandUnit', attackType: 'Range', reach: 2 }, GreyAA: { attack: 2, defense: 3, health: 3, move: 4, image: 'GreyAA', description: 'description', name: 'AA', type: 'LandUnit', attackType: 'Direct', reach: null }, GreyMissiles: { attack: 7, defense: 5, health: 5, move: 1, image: 'GreyMissiles', description: 'description', name: 'Missiles', type: 'LandUnit', attackType: 'Range', reach: 3 }, GreyNeoTank: { attack: 7, defense: 9, health: 9, move: 4, image: 'GreyNeoTank', description: 'description', name: 'NeoTank', type: 'LandUnit', attackType: 'Direct', reach: null }, GreyMegaTank: { attack: 10, defense: 13, health: 13, move: 2, image: 'GreyMegaTank', description: 'description', name: 'MegaTank', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueInfantry: { attack: 3, defense: 3, health: 3, move: 1, image: BlueInfantry, description: 'description', name: 'Infantry', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueMech: { attack: 4, defense: 3, health: 3, move: 1, image: BlueMech, description: 'description', name: 'Mech', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueRecon: { attack: 3, defense: 1, health: 1, move: 3, image: BlueRecon, description: 'description', name: 'Recon', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueTank: { attack: 5, defense: 4, health: 4, move: 2, image: BlueTank, description: 'description', name: 'Tank', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueArtillery: { attack: 4, defense: 2, health: 2, move: 1, image: BlueArtillery, description: 'description', name: 'Artillery', type: 'LandUnit', attackType: 'Range', reach: 2 }, BlueApc: { attack: 2, defense: 6, health: 6, move: 2, image: BlueApc, description: 'description', name: 'Apc', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueMediumTank: { attack: 6, defense: 6, health: 6, move: 2, image: BlueMediumTank, description: 'description', name: 'MediumTank', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueRockets: { attack: 5, defense: 3, health: 3, move: 1, image: BlueRocket, description: 'description', name: 'Rockets', type: 'LandUnit', attackType: 'Range', reach: 2 }, BlueAA: { attack: 3, defense: 2, health: 2, move: 3, image: BlueAA, description: 'description', name: 'AA', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueMissiles: { attack: 7, defense: 4, health: 4, move: 1, image: BlueMissile, description: 'description', name: 'Missiles', type: 'LandUnit', attackType: 'Range', reach: 3 }, BlueNeoTank: { attack: 8, defense: 8, health: 8, move: 3, image: BlueNeoTank, description: 'description', name: 'NeoTank', type: 'LandUnit', attackType: 'Direct', reach: null }, BlueMegaTank: { attack: 11, defense: 12, health: 12, move: 1, image: BlueMegaTank, description: 'description', name: 'MegaTank', type: 'LandUnit', attackType: 'Direct', reach: null } }

export default enemies;
