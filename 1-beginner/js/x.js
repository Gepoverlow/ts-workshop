import User from "../models/User.js";

// Return a users First Name.
function getFirstName(user) {

}

// Return a users Last Name.
function getLastname(user) {

}

// Return a users Age.
function getAge(user) {

}

// Return a users Height.
function getHeight(user) {

}

// Return if user is Male.
function isUserMale(user) {

}

// Return if user can be a driving tutor (has drivers license + has at least 3 years driving experience).
function canBeDrivingTutor(user) {

}

// Return if user is Adult.
function isAdult(user) {

}

// Return the users introduction (Hey I'm ... including FirstName, LastName, age, and birthPlace).
function printIntroductionLine(user) {

}

// To be able to join a rollercoaster, all children must be at least 5 years of age and have
// a height of 1.10 or higher. Return if the users children pass these requirements.
function childrenPassRollercoasterRequirements(user) {

}

function logUserSummary(user) {
    const summary = `
        👤 ${getFirstName(user)} ${getLastname(user)} (Age: ${getAge(user)})
        📏 Height: ${getHeight(user)}m
        🚘 Driving Tutor: ${canBeDrivingTutor(user) ? 'Yes' : 'No'}
        🧔 Gender: ${isUserMale(user) ? 'Male' : 'Female'}
        🧒 Children meet rollercoaster requirements: ${childrenPassRollercoasterRequirements(user) ? 'Yes' : 'No'}
        📍 Introduction: ${printIntroductionLine(user)}
        `;

    console.log(summary);
}

logUserSummary();