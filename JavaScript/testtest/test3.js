// class Deck {
//     constructor() {
//       const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//       const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//       const deck = [];
    //   for (const suit of suits) {
    //     for (const face of faces) {
    //       deck.push([suit,face]);
    //     }
    //   }
    //   this.deck = deck;
//     }
//   }
//   class Deck {
//         constructor() {
//             const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//             const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//             const deck = [];
//             suits.forEach(function(suit) {
//                 faces.forEach(function(face) {
//                     deck.push((suit, face));
//                 });
//                 });
//             this.deck = deck;
//             }
//     }
    
    

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push((suit, face));
            });
        });
      this.deck = deck;
    }
  }
  
  




 let d1 = new Deck();

 console.log(d1);


// class Deck {
//         constructor() {
//           const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//           const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//           const deck = [];
//           suits.forEach(function(suit) {
//             faces.forEach(function(face) {
//               deck.push(suit, face);
//             });
//           });
//           this.deck = deck;
//         }
//     }
    
    