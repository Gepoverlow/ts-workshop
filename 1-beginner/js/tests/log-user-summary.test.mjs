import { logUserSummary } from "../main/log-user-summary.mjs";
import users from "../main/users.mjs";

const expectedResults = [
  {
    name: "👤 John Doe (Age: 40)",
    height: "📏 Height: 1.8m",
    tutor: "🚘 Driving Tutor: Yes",
    gender: "🧔 Gender: Male",
    requirements: "🧒 Children meet rollercoaster requirements: Yes",
    beer: "🍺 Can drink beer: Yes",
    nationality: "🌍 Has nationality from the country he was born in: Yes",
    children:
      "Children have nationality from the country they were born in: No",
    intro:
      "📍 Introduction: Hey I'm John Doe. I am 40 years old and my place of birth is Belgium.",
  },
  {
    name: "👤 Emma Smith (Age: 21)",
    height: "📏 Height: 1.65m",
    tutor: "🚘 Driving Tutor: No",
    gender: "🧔 Gender: Female",
    requirements: "🧒 Children meet rollercoaster requirements: No",
    beer: "🍺 Can drink beer: Yes",
    nationality: "🌍 Has nationality from the country he was born in: Yes",
    children:
      "Children have nationality from the country they were born in: Yes",
    intro:
      "📍 Introduction: Hey I'm Emma Smith. I am 21 years old and my place of birth is Canada.",
  },
  {
    name: "👤 Carlos Martinez (Age: 45)",
    height: "📏 Height: 1.9m",
    tutor: "🚘 Driving Tutor: No",
    gender: "🧔 Gender: Male",
    requirements: "🧒 Children meet rollercoaster requirements: Yes",
    beer: "🍺 Can drink beer: Yes",
    nationality: "🌍 Has nationality from the country he was born in: Yes",
    children:
      "Children have nationality from the country they were born in: Yes",
    intro:
      "📍 Introduction: Hey I'm Carlos Martinez. I am 45 years old and my place of birth is Mexico.",
  },
];

describe("logUserSummary", () => {
  users.forEach((user, index) => {
    describe(`User #${index + 1} - ${user.firstName} ${user.lastName}`, () => {
      let summary;
      let expectedResult;

      beforeAll(() => {
        summary = logUserSummary(user);
        expectedResult = expectedResults[index];
      });

      test("summary contains user name, lastname and age line", () => {
        expect(summary).toContain(expectedResult.name);
      });

      test("summary contains user height line", () => {
        expect(summary).toContain(expectedResult.height);
      });

      test("summary contains user driving tutor line", () => {
        expect(summary).toContain(expectedResult.tutor);
      });

      test("summary contains user gender line", () => {
        expect(summary).toContain(expectedResult.gender);
      });

      test("summary contains user children meet rollercoaster requirements line", () => {
        expect(summary).toContain(expectedResult.requirements);
      });

      test("summary contains user can drink beer line", () => {
        expect(summary).toContain(expectedResult.beer);
      });

      test("summary contains user has nationality of place of birth line", () => {
        expect(summary).toContain(expectedResult.nationality);
      });

      test("summary contains children have nationality of place of birth line", () => {
        expect(summary).toContain(expectedResult.children);
      });

      test("summary contains user introduction line", () => {
        expect(summary).toContain(expectedResult.intro);
      });
    });
  });
});
