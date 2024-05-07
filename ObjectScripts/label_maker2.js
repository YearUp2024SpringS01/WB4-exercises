"use strict";



printContact({
    name: "Matt",
    address: "123 Sesamee",
    city: "Chicago",
    state: "IL",
    zip: "00000"
});



///-------------------------------------------------------------------------


function printContact(contact){
    console.log(contact.name);
    console.log(contact.address);
    console.log(`${contact.city}, ${contact.state}  ${contact.zip}`)
}


