import { attack, effect, player, classs, } from "../const/types";

const rarityConvert: Array<string> = [
    "Starter",
    "Rare",
    "Epic",
    "Legendary"
]

const fighterAttack: Array<Array<attack>> = [
    //Rarity 0
    [
        {
            name: "Elbow Strike",
            rarity: 0,
            numDice: 2,
            dice: 4,
            hitChance: 5,
            range: 1,
            effect: {
                burning: 0,
                poison: 0,
                drain: 0,
                confuse: 0,
                heal: 0,
                dexterity: 0
            }
        },
        {
            name: "Low Kick",
            rarity: 0,
            numDice: 2,
            dice: 2,
            hitChance: 5,
            range: 1,
            effect: {
                burning: 0,
                poison: 0,
                drain: 0,
                confuse: 5,
                heal: 0,
                dexterity: 0
            }
        },
        {
            name: "Jab",
            rarity: 0,
            numDice: 2,
            dice: 2,
            hitChance: 3,
            range: 1,
            effect: {
                burning: 0,
                poison: 0,
                drain: 0,
                confuse: 0,
                heal: 0,
                dexterity: 2
            }
        }
    ]
]

export const fighterClass: classs = {
    name: "Monk",
    color: "#6F4E37",
    movement: 3,
    attacks: fighterAttack,
    currentAttacks: fighterAttack[0],
}