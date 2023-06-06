class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    increase(){
        this.power += this.magnitude;
    }

    decrease(){
        this.resilience += this.magnitude;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(objUnit){
        objUnit.resilience -= this.power;
    }
    show(){
        console.log("power: " + this.power + ", resilience: " + this.resilience);
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat ,magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    increase(objUnit){
        objUnit.power += this.magnitude;
    }

    decrease(objUnit){
        objUnit.resilience += this.magnitude;
    }
}

// ----------------------turn 1
let unit1 = new Unit(name = "Red Belt Ninja",cost=3,power=3,resilience=4);

let eff1 = new Effect(name = "Hard Algorithm", cost = 2, text  = "increase target's resilience by 3", stat = "resilience",magnitude= +3);

eff1.increase(unit1); // 1	Make an instance of "Red Belt Ninja"
unit1.show();  //1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"

// --------------------turn 2
let unit2 = new Unit(name = "Black Belt Ninja",cost=4,power=5,resilience=4);

let eff2 = new Effect(name = "Unhandled Promise Rejection", cost = 1, text  = "ireduce target's resilience by 2", stat = "resilience",magnitude= -2);

eff2.decrease(unit1);

unit1.show();

// -------------------turn 3
let eff3 = new Effect(name = "Pair Programming	", cost = 3, text  = "increase target's power by 2", stat = "power",magnitude= +2);

eff3.increase(unit1);
unit1.show();

// ----------------turn 4
unit2.show();
unit1.attack(unit2);
unit2.show();






