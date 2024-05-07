"use strict";


let mgr = {
        name: "Luci Ponder",
        company: "Year Up",
        address: "332 Other Rd",
        city: "New York",
        state: "NY",
        zip: "22222"
    }


let employee = {
    name: "Adama",
    address: "567 Main St",
    city: "Atlanta",
    state: "GA",
    zip: "11111",
    jobTitle: "Customer Service Rep",
    payRate: "60",
    manager: mgr

}

let customer = {
    name: "Matt",
    address: "123 Sesamee",
    city: "Chicago",
    state: "IL",
    zip: "00000"
};

printContact(customer);
printContact(employee);
printContact(mgr);



///-------------------------------------------------------------------------


function printContact(contact){
    console.log("--------------------------")
    console.log(contact.name);
    console.log(contact.address);
    console.log(`${contact.city}, ${contact.state}  ${contact.zip}`)
}


