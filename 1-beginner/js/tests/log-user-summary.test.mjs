import { logUserSummary } from "../main/log-user-summary.mjs";
import users from "../main/users.mjs";

const expectedResults = [
  {
    name: "",
    height: "",
    tutor: "",
    gender: "",
    requirements: "",
    beer: "",
    intro: "",
    nationality: "",
  },
  {
    name: "",
    height: "",
    tutor: "",
    gender: "",
    requirements: "",
    beer: "",
    intro: "",
    nationality: "",
  },
  {
    name: "",
    height: "",
    tutor: "",
    gender: "",
    requirements: "",
    beer: "",
    intro: "",
    nationality: "",
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

      test("summary contains user introduction line", () => {
        expect(summary).toContain(expectedResult.intro);
      });
      test("summary contains user has nationality of place of birth line", () => {
        expect(summary).toContain(expectedResult.nationality);
      });
    });
  });
});
