import Animal from "./animal.js";

class Boy extends Animal {
    constructor(name) {
        super(name)
    }
    play() {
        this.boredom += 10
        this.hunger -= 10
        this.thirst -= 10
        console.log(`${this.name} is a happy boy dragon!`)
        return this
    }
    activity() {
        console.log(`counting ${this.name} 's gold makes them a happy boy dragon!`)
        this.health += 10
        return this
    }
}

export default Boy
