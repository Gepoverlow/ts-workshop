import {
  canBeDrivingTutor,
  canDrinkBeer,
  childrenPassRollercoasterRequirements,
  isUserMale,
  logUserSummary,
  printIntroductionLine,
} from "../main/log-user-summary.mts";
import users from "../main/users.mts";

describe("logUserSummary", () => {
  users.forEach((user, index) => {
    describe(`User #${index + 1} - ${user.firstName} ${user.lastName}`, () => {
      let summary;

      beforeAll(() => {
        summary = logUserSummary(user);
      });
      test("summary contains user name, lastname and age line", () => {
        expect(summary).toContain(`${user.firstName} ${user.lastName}`);
        expect(summary).toContain(`Age: ${user.age}`);
      });

      test("summary contains user height line", () => {
        expect(summary).toContain(`Height: ${user.height}`);
      });

      test("summary contains user driving tutor line", () => {
        const expected = canBeDrivingTutor(user) ? "Yes" : "No";
        expect(summary).toContain(`Driving Tutor: ${expected}`);
      });

      test("summary contains user gender line", () => {
        const expected = isUserMale(user) ? "Male" : "Female";
        expect(summary).toContain(`Gender: ${expected}`);
      });

      test("summary contains user children meet rollercoaster requirements line", () => {
        const expected = childrenPassRollercoasterRequirements(user)
          ? "Yes"
          : "No";
        expect(summary).toContain(
          `Children meet rollercoaster requirements: ${expected}`
        );
      });

      test("summary contains user can drink beer line", () => {
        const expected = canDrinkBeer(user) ? "Yes" : "No";
        expect(summary).toContain(`Can drink beer: ${expected}`);
      });

      test("summary contains user introduction line", () => {
        const expected = printIntroductionLine(user);
        expect(summary).toContain(expected);
      });
    });
  });
});
