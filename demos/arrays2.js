"use strict";

//          0           1           2          3         4       5       6
//let kids = ["Natalie", "Brittany", "Zachary", "David", "Jane", "John" , "Sally"];
//          0           1              2    3          4

let kids = ["Natalie", "Zachary", "David", "John", "Sally"];

kids[3] = "Johnny"

//displayKids(kids);

// console.log(kids[0]);
// console.log(kids[1]);
// console.log(kids[2]);
// console.log(kids[3]);
// console.log(kids[4]);
// console.log(kids[5]);

// console.log(kids.length);

// for (let j = 1 ; j < 100 ; j+=2){
//     console.log(j);
// }


//  while (i < totalKids){
//      console.log(i + " " + kids[i]);
//      i++;
//  }



function displayKids(kidArray) {
    // let totalKids = kidArray.length;
    // for (let i = 0; i < totalKids; i = i + 1) {
    //     console.log(i + " " + kidArray[i]);
    // }

    for (let i = 0; i < kidArray.length; i = i + 1) {
        console.log(i + " " + kidArray[i]);
    }
}



displayKids(getKids("Barb"));

function getKids(nameOfMother){
    if(nameOfMother == "Barb"){
        return ["Matt", "Jennifer", "Elizabeth"];
    }
    else if (nameOfMother =="Elizabeth"){
        return ["Andrew"];
    }
    else{
        return [];
    }
   
}