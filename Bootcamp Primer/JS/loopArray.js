// #1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;
for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] == 'computer') {
        count += 1
    }
}
console.log(count);

//#2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
          if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'female'){
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S is good to see Mad Max Fury Road.")
          } else {
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE'S is good to see Mad Max Fury Road.")
          }
      } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'female'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad MAx Fury Road, don't let HER in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad MAx Fury Road, don't let HIM in.")
        }
    }
}

// Optional Bonus challenge
var lightA = [2, 5, 435, 4, 3] // "The light is on"
var lightB = [1, 1, 1, 1, 3]   // "The light is on"
var lightC = [9, 3, 4, 2]      // "The light is off"

var count = 0;
for (var i = 0; i < lightC.length; i++){
    count += lightC[i];
}
if (count % 2 === 0) {
    console.log("The light is off")
} else {
    console.log("The light is on")
}