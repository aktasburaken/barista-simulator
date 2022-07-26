var day = 1;
console.log("------------------------ Day 1 --------------------------");
setInterval(function () {
    day += 1;
    console.log("------------------------ Day ".concat(day, " --------------------------"));
}, 10000);
// const items = [{ name: 'shoe', price: 30 }, { name: 'shirt', price: 50 }, { name: 'Company stock', price: 40 }, { name: "Violin", price: 300 }, { name: "Tango Lesson", price: 40 }]
var Barista = /** @class */ (function () {
    function Barista(name, speed, communication, skill) {
        this.level = 1; // all skills increase when level up
        this.madeCoffees = 0;
        this.money = 0;
        this.name = name;
        if ((speed < 10 && communication < 10 && skill < 10) && (0 < speed && 0 < communication && 0 < skill)) {
            this.speed = speed;
            this.communication = communication;
            this.skill = skill;
        }
        else {
            console.log('Any property can not be less than 0 or more than 10.');
        }
    }
    Barista.prototype.coffeePrepared = function () {
        var _this = this;
        setInterval(function () {
            console.log("".concat(_this.name, "'s coffee ").concat(_this.madeCoffees));
            if (_this.madeCoffees !== 0 && _this.madeCoffees % 10 === 0 && _this.level !== 10) {
                _this.level += 1;
                if (_this.speed <= 10) {
                    _this.speed += 1;
                    console.log("".concat(_this.name, "'s speed property is ").concat(_this.speed, " from now on."));
                }
                if (_this.communication <= 10) {
                    _this.communication += 1;
                    console.log("".concat(_this.name, "'s communication property is ").concat(_this.communication, " from now on."));
                }
                if (_this.skill <= 10) {
                    _this.skill += 1;
                    console.log("".concat(_this.name, "'s skill property is ").concat(_this.skill, " from now on."));
                }
                console.log("".concat(_this.name, " level upped to ").concat(_this.level));
            }
            else if (_this.level === 10) {
                return;
            }
            _this.money += 0.10 * _this.communication;
            console.log("".concat(_this.name, " prepared Coffee \u2615 ^^ \n").concat(_this.name, " has ").concat(_this.money.toFixed(2)));
            _this.madeCoffees += 1;
        }, 10000 / this.speed);
        setInterval(function () {
            console.log("".concat(_this.name, " broke a glass."));
            _this.money -= 10 / _this.skill;
            console.log("".concat(_this.name, " has ").concat(_this.money.toFixed(2)));
        }, 10000);
    };
    return Barista;
}());
var TalkativeBarista = new Barista('Jack', 3, 7, 5);
var HighSkillBarista = new Barista('Emir', 4, 2, 8);
var QuickBarista = new Barista('Burak', 8, 1, 4);
TalkativeBarista.coffeePrepared();
HighSkillBarista.coffeePrepared();
QuickBarista.coffeePrepared();
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
