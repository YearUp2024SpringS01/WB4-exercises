"use strict";

//          0          1            2
let kids = ["Natalie", "Brittany", "Zachary"];

//            0   1   2    3   4   5   6
let scores = [59, 99, 100, 24, 32, 76, 86]

let employees = [
    // 0 
    {
        name: "Matt",
        jobTitle: "Instructor"
    },
    // 1
    {
        name: "Sabrina",
        jobTitle: "Project Administrator"
    }
];


let students = [
    {
        name: "John",
        scores: [76, 45, 80, 100]
    }
    ,
    {
        name: "Jane",
        scores: [100,98,78, 86]
    }
]

kids[0] = "Nat"

let specificKid = kids[0];
console.log(specificKid);

let empName = employees[1].name;
console.log(empName);


console.log(kids);