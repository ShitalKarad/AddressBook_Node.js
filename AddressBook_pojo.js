let name;
let lastName;
let phone;
let address;
 

function contacts(name,lastName,phone,address){
    this.name = name;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
}
module.exports = {contacts};

