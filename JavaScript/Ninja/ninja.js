
class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;

    }

    sayName() {
        console.log(this.name); 
    }
    showStats(){
        console.log("my name is: " + this.name +", my health: " + this.health +", my speed:  " + this.speed +", my strength: " + this.strength); 
    }

    drinkSake(){
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
