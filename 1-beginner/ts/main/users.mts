// Feel free to add a User interface to correctly type users

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    gender: "Male",
    height: 1.8,
    hasDriversLicense: true,
    yearsOfDrivingExperience: 10,
    placeOfBirth: "Belgium",
    nationalities: ["Belgium", "Spain", "France"],
    children: [
      {
        firstname: "Melissa",
        lastname: "Doe",
        age: "7",
        gender: "Female",
        height: 1.2,
        birthPlace: "Colombia",
        nationalities: ["Colombia", "Belgium"],
      },
      {
        firstname: "Ana",
        lastname: "Doe",
        age: 5,
        gender: "Female",
        birthPlace: "Belgium",
        nationalities: ["Belgium"],
      },
    ],
  },
  {
    firstName: "Emma",
    lastName: "Smith",
    age: 21,
    gender: "Female",
    heigth: 1.65,
    hasDriversLicense: false,
    yearsOfDrivingExperience: 0,
    placeOfBirth: "Canada",
    nationalities: ["Canada", "UK"],
    children: [
      {
        firstname: "Lisa",
        lastname: "Smith",
        age: 1,
        gender: "Female",
        birthPlace: "Belgium",
        nationalities: ["Belgium"],
      },
    ],
  },
  {
    firstName: "Carlos",
    lastName: "Martinez",
    age: 45,
    gender: "Male",
    heigth: 1.9,
    hasDriversLicense: false,
    yearsOfDrivingExperience: 0,
    placeOfBirth: "Mexico",
    nationalities: ["Mexico"],
    children: [
      {
        firstname: "Mateo",
        lastname: "Martinez",
        age: "7",
        gender: "Male",
        height: 1.2,
        birthPlace: "Mexico",
        nationalities: ["Mexico", "USA"],
      },
    ],
  },
];

export default users;
