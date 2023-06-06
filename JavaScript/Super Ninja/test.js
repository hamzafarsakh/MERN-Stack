
class Ninja{
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    // constructor(name,speed,strength,health){
    //     this.name = name;
    //     this.speed = speed;
    //     this.strength = strength;
    //     this.health = health;
    // }
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

class Sensei extends Ninja{
    constructor(name){
        super(name);
        super.health = 100;
        super.speed = 10;
        super.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
