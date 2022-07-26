
let day = 1
console.log(`------------------------ Day 1 --------------------------`)
setInterval(() => {
    day += 1
    console.log(`------------------------ Day ${day} --------------------------`)
}, 10000)

// const items = [{ name: 'shoe', price: 30 }, { name: 'shirt', price: 50 }, { name: 'Company stock', price: 40 }, { name: "Violin", price: 300 }, { name: "Tango Lesson", price: 40 }]

class Barista {

    private level: number = 1; // all skills increase when level up
    name: string;
    speed: number; // => quick coffees
    communication: number; // => make more money with tips
    skill: number; // => lose less money when break glass
    madeCoffees: number = 0;
    money: number = 0;

    constructor(name: string, speed: number, communication: number, skill: number) {

        this.name = name

        if ((speed < 10 && communication < 10 && skill < 10) && (0 < speed && 0 < communication && 0 < skill)) {
            this.speed = speed
            this.communication = communication
            this.skill = skill
        } else {
            console.log('Any property can not be less than 0 or more than 10.')
        }
    }

    coffeePrepared() {
        setInterval(() => {
            console.log(`${this.name}'s coffee ${this.madeCoffees}`)
            if (this.madeCoffees !== 0 && this.madeCoffees % 10 === 0 && this.level !== 10) {
                this.level += 1

                if (this.speed <= 10) {
                    this.speed += 1
                    console.log(`${this.name}'s speed property is ${this.speed} from now on.`)
                }
                if (this.communication <= 10) {
                    this.communication += 1
                    console.log(`${this.name}'s communication property is ${this.communication} from now on.`)
                }
                if (this.skill <= 10) {
                    this.skill += 1
                    console.log(`${this.name}'s skill property is ${this.skill} from now on.`)
                }

                console.log(`${this.name} level upped to ${this.level}`)
            } else if (this.level === 10) { return }

            this.money += 0.10 * this.communication
            console.log(`${this.name} prepared Coffee ☕ ^^ \n${this.name} has ${this.money.toFixed(2)}`)
            this.madeCoffees += 1
        }, 10000 / this.speed)

        setInterval(() => {
            console.log(`${this.name} broke a glass.`)
            this.money -= 10 / this.skill
            console.log(`${this.name} has ${this.money.toFixed(2)}`)
        }, 10000)
    }
}

const TalkativeBarista = new Barista('Jack', 3, 7, 5)
const HighSkillBarista = new Barista('Emir', 4, 2, 8)
const QuickBarista = new Barista('Burak', 8, 1, 4)

TalkativeBarista.coffeePrepared()
HighSkillBarista.coffeePrepared()
QuickBarista.coffeePrepared()

// class Customer {

//     wantToTip: number; // tip atmak isteme oranı max10
//     communication: number; //
//     escapeBeforePay: number; // 0 max 10 min

//     constructor(communication: number, wantToTip: number, escapeBeforePay: number) {
//         if ((wantToTip < 10 && communication < 10 && escapeBeforePay < 10) && (0 < wantToTip && 0 < communication && 0 < escapeBeforePay)) {
//             this.wantToTip = wantToTip
//             this.communication = communication
//             this.escapeBeforePay = escapeBeforePay
//         } else {
//             console.log('Any property can not be less than 0 or more than 10.')
//         }
//     }

//     boughtCoffee(baristaSpeed: number, baristaCommunication: number, baristaSkill: number) {

//         var coffeePreparingSpeed = baristaSpeed * this.communication
//         var tipProspect = baristaCommunication * this.wantToTip
//         var escapeProspect = baristaSkill * this.escapeBeforePay

//     }
// }
