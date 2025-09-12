export interface attack{
    name: string,
    rarity: number,
    numDice: number,
    dice: number,
    hitChance: number,
    range: number,
    effect: effect
}

export interface effect{
    burning: number,
    poison: number,
    drain: number,
    confuse: number,
    heal: number,
    dexterity: number
}

export interface player{
    health: number,
    class: classs,
    position: number[],
    isMoving: boolean
}

export interface classs{
    name: string,
    color: string,
    movement: number,
    attacks: attack[][],
    currentAttacks: attack[]
}