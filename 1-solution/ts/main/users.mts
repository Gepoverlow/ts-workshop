// Feel free to add a User interface to correctly type users

export interface Adult {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  height: number;
  hasDriversLicense: boolean;
  yearsOfDrivingExperience: number;
  placeOfBirth: Countries;
  nationalities: Countries[];
  children: Child[];
}

export interface Child {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  height?: number;
  birthPlace: Countries;
  nationalities: Countries[];
}

export enum Countries {
  BElGIUM = "BELGIUM",
  SPAIN = "SPAIN",
  FRANCE = "FRANCE",
  COLOMBIA = "COLOMBIA",
  CANADA = "CANADA",
  UK = "UK",
  MEXICO = "MEXICO",
  USA = "USA",
}

const users: Adult[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    gender: "Male",
    height: 1.8,
    hasDriversLicense: true,
    yearsOfDrivingExperience: 10,
    placeOfBirth: Countries.BElGIUM,
    nationalities: [Countries.SPAIN, Countries.BElGIUM, Countries.FRANCE],
    children: [
      {
        firstName: "Melissa",
        lastName: "Doe",
        age: 7,
        gender: "Female",
        height: 1.2,
        birthPlace: Countries.COLOMBIA,
        nationalities: [Countries.BElGIUM, Countries.SPAIN],
      },
      {
        firstName: "Ana",
        lastName: "Doe",
        age: 5,
        gender: "Female",
        height: 1.1,
        birthPlace: Countries.BElGIUM,
        nationalities: [Countries.BElGIUM],
      },
    ],
  },
  {
    firstName: "Emma",
    lastName: "Smith",
    age: 21,
    gender: "Female",
    height: 1.65,
    hasDriversLicense: false,
    yearsOfDrivingExperience: 0,
    placeOfBirth: Countries.CANADA,
    nationalities: [Countries.CANADA, Countries.UK],
    children: [
      {
        firstName: "Lisa",
        lastName: "Smith",
        age: 1,
        gender: "Female",
        birthPlace: Countries.BElGIUM,
        nationalities: [Countries.BElGIUM],
      },
    ],
  },
  {
    firstName: "Carlos",
    lastName: "Martinez",
    age: 45,
    gender: "Male",
    height: 1.9,
    hasDriversLicense: false,
    yearsOfDrivingExperience: 0,
    placeOfBirth: Countries.MEXICO,
    nationalities: [Countries.MEXICO],
    children: [
      {
        firstName: "Mateo",
        lastName: "Martinez",
        age: 7,
        gender: "Male",
        height: 1.2,
        birthPlace: Countries.MEXICO,
        nationalities: [Countries.MEXICO, Countries.USA],
      },
    ],
  },
];

export default users;
