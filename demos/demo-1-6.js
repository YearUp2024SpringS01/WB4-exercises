"use strict";


let emp1 = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate: 38.46
};



let emp2 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 43.27
};

emp2.startDate = "2024-05-07";

console.log(emp2.jobTitle);

let theInterestingProp = "payRate"

console.log(emp2[theInterestingProp]);

