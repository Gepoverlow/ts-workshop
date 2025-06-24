import { processData } from "../main/process-data.mts";
import * as g from "../main/guards.mts"
import * as t from "../main/transformers.mts";
import * as v  from "../main/validators.mts";

describe('processData', () => {
  test('1. filters positive numbers and doubles them', () => {
    const data = [1, -2, 3, 0, "5", null, undefined, {}, []];

    // Use processData here

    const expectedValid = [2, 6];
    const expectedInvalid = [-2, 0, "5", null, undefined, {}, []];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('2. filters even numbers and transforms them into booleans', () => {
    const data = [2, 3, 4, 5, "6", {}, true, null];

    // Use processData here

    const expectedValid = [true, true];
    const expectedInvalid = [3, 5, "6", {}, true, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('3. filters strings with even length and counts words', () => {
    const data = ["hello world", "hi", "typescript", "", 123, null];

    // Use processData here

    const expectedValid = [1, 1, 0];
    const expectedInvalid = ["hello world", 123, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('4. filters strings with whitespace and trims them', () => {
    const data = ["  hello  ", "world", "  ", "flower", 42, false];

    // Use processData here

    const expectedValid = ["hello", ""];
    const expectedInvalid = ["world", "flower", 42, false]

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('5. filters strings with minimum length and capitalizes them', () => {
    const data = ["ts", "type", "script", "js", 123, null];

    // Use processData here

    const expectedValid = ["Type", "Script"];
    const expectedInvalid = ["ts", "js", 123, null]

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('6. filters strings with max length and uppercases them', () => {
    const data = ["hi", "code", "typescript", "JS", true, []];

    // Use processData here

    const expectedValid = ["HI", "CODE", "JS"];
    const expectedInvalid = ["typescript", true, []];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('7. filters numbers in range and stringifies them', () => {
    const data = [1, 10, 5, -1, "5", 15, 8, null];

    // Use processData here

    const expectedValid = ["10", "5", "8"];
    const expectedInvalid = [1, -1, "5", 15, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('8. filters objects with name property and prints them', () => {
    const data = [{ name: "TypeScript" }, { title: "JS" }, {}, null, "name", { name: "Alice" }];

    // Use processData here

    const expectedValid = ["I'm printing this property value!: TypeScript", "I'm printing this property value!: Alice"];
    const expectedInvalid = [{ title: "JS" }, {}, null, "name"];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('9. filters objects that have a specific property and prints them', () => {
    const data = [ { id: 1 }, { title: "Harry Potter" }, { id: 2, name: "Harry Potter" }, 42, null, {}, { title: "Harry Potter" }, { title: "Lord of the Rings" }];

    // Use processData here

    const expectedValid = ["I'm printing this property value!: Harry Potter", "I'm printing this property value!: Harry Potter"];
    const expectedInvalid = [{ id: 1 }, { id: 2, name: "Harry Potter" }, 42, null, {}, { title: "Lord of the Rings" }];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('10. filters strings with whitespace and returns word count', () => {
    const data = ["hello world", "single", "this is a test", 123, {}, false];

    // Use processData here

    const expectedValid = [2, 4];
    const expectedInvalid = ["single", 123, {}, false];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('11. filters numbers that are even and positive, then stringifies them', () => {
    const data = [2, 4, -4, 3, "2", 0, {}, null];

    // Use processData here

    const expectedValid = ["2", "4"];
    const expectedInvalid = [-4, 3, "2", 0, {}, null]

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('12. filters strings with even length and no whitespace, then capitalizes them', () => {
    const data = ["hello", "flower", "   spaced  ", "code", "TS", 42];

    // Use processData here

    const expectedValid = ["Flower", "Code", "TS"];
    const expectedInvalid = ["hello", "   spaced  ", 42]

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('13. filters objects with name property and a name length > 4, then prints them', () => {
    const data = [{ name: "JS" }, { name: "Carlos" }, {}, { name: "Code" }, null];

    // Use processData here

    const expectedValid = ["I'm printing this property value!: Carlos"];
    const expectedInvalid = [{ name: "JS" }, {}, { name: "Code" }, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('14. filters strings that are exactly 5 characters long and uppercases them', () => {
    const data = ["apple", "pear", "grape", "fruit", "fig", "melon", 123];

    // Use processData here

    const expectedValid = ["APPLE", "GRAPE", "FRUIT", "MELON"];
    const expectedInvalid = ["pear", "fig", 123];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('15. filters strings that have even length and have whitespace, then trims them', () => {
    const data = ["hello ", "hi  ", "  world", "TS", "typescript", {}, null];

    // Use processData here

    const expectedValid = ["hello", "hi"];
    const expectedInvalid = ["  world", "TS", "typescript", {}, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('16. filters arrays with even length and returns their lengths', () => {
    const data = [[1, 2], [1], "not an array", [], [1, 2, 3, 4], {}, null];

    // Use processData here

    const expectedValid = [2, 0, 4];
    const expectedInvalid = [[1], "not an array", {}, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('17. filters arrays of numbers and returns the sum', () => {
    const data = [[1, 2], [1, "2"], [], ["a", "b"], [10, 5], {}, null];

    // Use processData here

    const expectedValid = [3, 0, 15];
    const expectedInvalid = [[1, "2"], ["a", "b"], {}, null]

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('18. filters objects with "title" property and capitalizes its value', () => {
    const data = [{ title: "hello" }, { title: 123 }, { name: "test" }, null];

    // Use processData here

    const expectedValid = [{ title: "Hello" }];
    const expectedInvalid = [{ title: 123 }, { name: "test" }, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('19. returns no valid results when all fail type guard', () => {
    const data = ["a", {}, null, false];

    // Use processData here

    const expectedValid = [];
    const expectedInvalid = ["a", {}, null, false];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('20. returns no valid results when all validations fail', () => {
    const data = ["odd", "nomatch", "nospace", 123, {}, null];
    
    // Use processData here

    const expectedValid = [];
    const expectedInvalid = ["odd", "nomatch", "nospace", 123, {}, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });
});