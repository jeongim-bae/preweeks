// Preliminaries
// Write a for loop that prints to the console the numbers 0 through 9.
// Write a for loop that prints to the console 9 through 0.
// Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(i = 0; i < 10; i++){
//     console.log(i);
// }
// for(i = 9; i >=0; i--){
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

// Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
// Write a for loop that prints to the console only even numbers 0 through 100.
// Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// var firstList = []
// for(i = 0; i < 10; i++){
//     firstList.push(i);
// }
// console.log(firstList)

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var newFruit = []
// for(i = 0; i < fruit.length; i++){
//     if (i % 2 == 0 ){ 
//         newFruit.push(fruit[i]);
//     }
// }
// console.log(newFruit)

// Silver Medal
// Write a loop that will print out all the names of the people of the people array
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// Write a loop that pushes every other name to an array starting with the first person, 
//in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]


//   for(i = 0; i < peopleArray.length; i++){
//       console.log(peopleArray[i].name);
//   }
// var names = [];
// var occupations = [];
//   for(i = 0; i < peopleArray.length; i++){
//       names.push(peopleArray[i].name);
//       occupations.push(peopleArray[i].occupation);
//   }
// console.log(names);
// console.log(occupations);

// var everyOtherNames = [];
// var everyOtherOccupations = [];
//   for(i = 0; i < peopleArray.length; i++){
//       if ( i % 2 == 0) {
//           everyOtherNames.push(peopleArray[i].name);
//       } else { 
//             everyOtherOccupations.push(peopleArray[i].occupation);
//         }
//   }
// console.log(everyOtherNames);
// console.log(everyOtherOccupations);

// Gold Medal - Nesting
// Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]
// 2.Create an array that mimics a grid like the following using nested for loops:

// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]
// 3.Create an array that mimics a grid like the following using nested for loops:

// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]
// Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// var grid = [["x", ...], 
//             ["x", ...], 
//             ["x",...], ...] 

// var myList = [];
// for(i = 0; i < 3; i++){
//     var elemList = []
//     for(j = 0; j < 3; j++){
//         elemList.push(0);
//     }
//     myList.push(elemList);
// }

var myList2 = [];
 for(i = 0; i < 3; i++){
    myList2[i] = []
    for(j = 0; j < 3; j++){
        myList2[i][j] = 0;
    }
}

var myList3 = [];
 for(i = 0; i < 3; i++){
    myList3[i] = []
    for(j = 0; j < 3; j++){
        myList3[i][j] = i;
    }
}

var myList4 = [];
 for(i = 0; i < 3; i++){
    myList4[i] = []
    for(j = 0; j < 3; j++){
        myList4[i][j] = j;
    }
}

var grid = [[0, 1, 2], 
    [0, 1, 2], 
    [0, 1, 2]]

 for(i = 0; i < grid.length; i++){
    for(j = 0; j < grid.length; j++){
        grid[i][j] = "x";
    }
}
console.log(grid);