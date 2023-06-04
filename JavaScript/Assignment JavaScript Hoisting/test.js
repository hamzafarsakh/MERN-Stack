// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// // AFTER HOISTING BY THE INTERPRETER
// // var example;
// // console.log(example); // logs undefined
// // example = "I'm the example!";

// console.log(example);
// let example = "I'm the example!";    

// // -----------------------1
// console.log(hello);       //world                            
// var hello = 'world';                                 
// // ----------------------------

// // -----------------------------2
// var needle = 'haystack';  //magnet
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// // -----------------------------------

// // --------------------------------3
// var brendan = 'super cool';   //only okay
// function print(){             //
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// // -----------------------------------------

// // --------------------------------4
// var food = 'chicken';  //chicken
// console.log(food);
// eat();   //half-chicken'
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// // ---------------------------------

// // ------------------------------5++++++++++++++++
// mean();
// console.log(food);  //error
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// // ----------------------------

// // ------------------------------6
// console.log(genre);  //undefined
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre); //rock
//     var genre = "r&b";
//     console.log(genre);  //r&b
// }
// console.log(genre);  //disco
// // --------------------------------

// // ------------------------------7
// dojo = "san jose";
// console.log(dojo);  //san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);  //seattle
//     var dojo = "burbank";
//     console.log(dojo);  //burbank
// }
// console.log(dojo);  //san jose

// // ----------------------------------

// // ---------------------------8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";  //error
//     }
//     return dojo;
// }

// // --------------------------------