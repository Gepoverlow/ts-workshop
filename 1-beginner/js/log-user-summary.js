import User from "../models/User.js";

// Return a users First Name.
function getFirstName(user) {

    // Your code

}

// Return a users Last Name.
function getLastname(user) {

    // Your code

}

// Return a users Age.
function getAge(user) {

    // Your code

}

// Return a users Height.
function getHeight(user) {

    // Your code

}

// Return if user is Male.
function isUserMale(user) {

    // Your code

}

// Return if user can be a driving tutor (has drivers license + has at least 3 years driving experience).
function canBeDrivingTutor(user) {

    // Your code

}

// Return if user is Adult.
function isAdult(user) {
    
    // Your code

}

// Return if user can drink beer. Use the isAdult function.
function canDrinkBeer() {
    const isAdult = isAdult(User);

    // Your code

}

// Return the users introduction (Hey I'm ... including FirstName, LastName, age, and birthPlace).
function printIntroductionLine(user) {

    // Your code

}

// To be able to join a rollercoaster, all children must be at least 5 years of age and have
// a height of 1.10 or higher. Return if the users children pass these requirements.
function childrenPassRollercoasterRequirements(user) {

    // Your code

}

function logUserSummary(user) {
    const summary = `
        👤 ${getFirstName(user)} ${getLastname(user)} (Age: ${getAge(user)})
        📏 Height: ${getHeight(user)}m
        🚘 Driving Tutor: ${canBeDrivingTutor(user) ? 'Yes' : 'No'}
        🧔 Gender: ${isUserMale(user) ? 'Male' : 'Female'}
        🧒 Children meet rollercoaster requirements: ${childrenPassRollercoasterRequirements(user) ? 'Yes' : 'No'}
        🍺 Can drink beer: ${canDrinkBeer(user) ? 'Yes' : 'No'}
        📍 Introduction: ${printIntroductionLine(user)}
        `;

    console.log(summary);
}

logUserSummary();