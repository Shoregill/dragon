class Animal {
    constructor(name){
        this.name = name
        this.health = 50
        this.hunger = 50
        this.thirst = 50
        this.boredom = 100
    }
    drinks() {
        this.health += 5
        this.thirst += 10
        console.log(`${this.name} is feeling full!`)
        return this
    }
    eats() {
        this.health += 5
        this.hunger += 10
        this.boredom -= 10
        console.log(`${this.name} is feeling full!`)
        return this
    }
    gold() {
        this.health += 50
        this.hunger += 10
        this.boredom -= 50
        console.log(`${this.name} is counting their gold!`)
        return this
    }
    steal() {
        this.health -= 60
        this.hunger += 10
        this.boredom += 20
        console.log(`${this.name} has lost their gold!`)
        return this
    }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
            hunger: this.hunger,
            thirst: this.thirst,
            boredom: this.boredom
        })
    }
}

export default Animal