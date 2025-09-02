import users from "./users.mjs";

// Return a users First Name.
function getFirstName(user) {
  return user.firstName;
}

// Return a users Last Name.
function getLastName(user) {
  return user.lastName;
}

// Return a users Age.
function getAge(user) {
  return user.age;
}

// Return a users Height.
function getHeight(user) {
  return user.height;
}

// Return if user is Adult.
function isAdult(user) {
  return user.age >= 18;
}

// Return if user is Male.
function isUserMale(user) {
  return user.gender === "Male" ? true : false;
}

// Return if user can be a driving tutor (has drivers license + has at least 3 years driving experience).
function canBeDrivingTutor(user) {
  return user.hasDriversLicense && user.yearsOfDrivingExperience >= 3;
}

// Return if user can drink beer. Use the isAdult function.
function canDrinkBeer(user) {
  const isOverage = isAdult(user);

  return isOverage;
}

// Return the users introduction (Hey I'm ... including FirstName, LastName, age, and birthPlace).
function printIntroductionLine(user) {
  return `Hey I'm ${user.firstName} ${user.lastName}. I am ${user.age} years old and my place of birth is ${user.placeOfBirth}.`;
}

// To be able to join a rollercoaster, all children must be at least 5 years of age and have
// a height of 1.10 or higher. Return if the users children pass these requirements.
function childrenPassRollercoasterRequirements(user) {
  return user.children.every((child) => child.age >= 5 && child.height >= 1.1);
}

// Return if the user has a nationality from the country he was born in
function hasBirthPlaceNationality(user) {
  return user.nationalities.includes(user.placeOfBirth);
}

// Return if all the children of a user have a nationality from the country they wre born in. Reuse 'hasBirthPlaceNationality'
function childrenHaveBirthPlaceNationality(user) {
  return user.children.every((child) => hasBirthPlaceNationality(child));
}

export function logUserSummary(user) {
  const summary = `
        👤 ${getFirstName(user)} ${getLastName(user)} (Age: ${getAge(user)})
        📏 Height: ${getHeight(user)}m
        🚘 Driving Tutor: ${canBeDrivingTutor(user) ? "Yes" : "No"}
        🧔 Gender: ${isUserMale(user) ? "Male" : "Female"}
        🧒 Children meet rollercoaster requirements: ${
          childrenPassRollercoasterRequirements(user) ? "Yes" : "No"
        }
        🍺 Can drink beer: ${canDrinkBeer(user) ? "Yes" : "No"}
        🌍 Has nationality from the country he was born in: ${
          hasBirthPlaceNationality(user) ? "Yes" : "No"
        }
        🚩 Children have nationality from the country they were born in: ${
          childrenHaveBirthPlaceNationality(user) ? "Yes" : "No"
        }
        📍 Introduction: ${printIntroductionLine(user)}
        `;

  return summary;
}

users.forEach((user) => {
  console.log(logUserSummary(user));
  console.log("-------");
});
