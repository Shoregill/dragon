import Animal from "./animal.js";

class Girl extends Animal {
    constructor(name){
        super(name)
    }
    play() {
        this.boredom += 10
        this.hunger -= 10
        this.thirst -= 10
        console.log(`${this.name} is a happy girl dragon!`)
        return this
    }
    activity() {
        this.health += 10
        console.log(`counting ${this.name} 's gold makes them a happy girl dragon!`)
        return this
    }
}
export default Girl