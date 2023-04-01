// //UC1 create contact
// const contacts = new Map();
// contacts.set('Person1',{ Name: 'Shital',LastName: "Karad",Phone: "7822814632",Address: "Parali", City: "Beed" })
// console.log(contacts.get('Person1'));


// UC_2
// Ability to add a new Contact to Address Book
let x = 0;
const setContacts = new Map();
const inputContact = require('readline-sync');
do {
    let information = Number(inputContact.question('\nIf you want to add records press 1 \n'
        + 'If you want to remove records press 2\n'
        + 'If you want to print records press 3\n'
        + 'If you want to update records press 4\n'
        + 'If you want to exit press 5\n\n'));
    switch (information) {
        case 1:
            let information1 = Number(inputContact.question('how many contacts you want to add \n'));
            for (i = 0; i < information1; i++) {
                const details = [];
                details[0] = "Name: " + String(inputContact.question('Enter Name \n'));
                details[1] = "LastName: " + String(inputContact.question('Enter LastName \n'));
                details[2] = "Phone: " + Number(inputContact.question('Enter phone \n'));
                details[3] = "Email: " + inputContact.questionEMail('Enter email \n');
                details[4] = "Address: " + String(inputContact.question('Enter Address \n'));
                details[5] = "Zip code: " + Number(inputContact.question('Enter Zip code \n'));
                details[6] = "City: " + String(inputContact.question('Enter City \n'));
                setContacts.set("contact" + (i + 1), details);
                console.log("Record is inserted success fully ...!");
            }
            break;
        case 2:
            const deleteContact = Number(inputContact.question('Which record u wont to delete ex: 1 2 3 etc.\n'));
            setContacts.delete("contact" + deleteContact);
            console.log("contact" + deleteContact + " this record is deleted")
            break;

        case 3:
            console.log(setContacts);
            break;
        case 4:

            const contact = String(inputContact.question("Which contact  u wont to edit\n"));
            const key = String(inputContact.question("Which key  u wont to edit\n"));
            const newKey = String(inputContact.question("Enter your correct information\n"));
            let newArray = [];
            newArray = setContacts.get(contact);
            for (i = 0; i <= 6; i++) {
                console.log("Array ->", newArray[i]);
                console.log("MyKey", key,);
                console.log("if condition is " + key.includes(newArray));
                if (key.includes(newArray[i])) {
                    newArray[i] = key + ": " + newKey;
                    console.log("Array in if ->", newArray[i]);

                }
            }
            setContacts.set(contact, newArray);
            break;
        case 5:
            x = 3;
            break;

        default:
            console.log("Enter correct operaion as mention bellow");



    }
}
while (x != 3);