import { processData } from "../main/process-data.mts";
import * as g from "../main/guards.mts"
import * as t from "../main/transformers.mts";
import * as v  from "../main/validators.mts";

describe('processData', () => {
  test('1. filters positive numbers and doubles them', () => {
    // Hint: Guard: isNumber
    // Hint: Validator: isPositive
    // Hint: Transformer: double

    const data = [1, -2, 3, 0, "5", null, undefined, {}, []];

    const [valid, invalid] = processData(data, g.isNumber, [v.isPositive], t.double);

    const expectedValid = [2, 6];
    const expectedInvalid = [-2, 0, "5", null, undefined, {}, []];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('2. filters even numbers and transforms them into booleans', () => {
    // Hint: Guard: isNumber
    // Hint: Validator: isEven
    // Hint: Transformer: numberToBoolean

    const data = [2, 3, 4, 5, "6", {}, true, null];

    const [valid, invalid] = processData(data, g.isNumber, [v.isEven], t.numberToBoolean);

    const expectedValid = [true, true];
    const expectedInvalid = [3, 5, "6", {}, true, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('3. filters strings with even length and counts words', () => {
    // Hint: Guard: isString
    // Hint: Validator: hasEvenLength
    // Hint: Transformer: countWords

    const data = ["hello world", "hi", "typescript", "", 123, null];

    const [valid, invalid] = processData(data, g.isString, [v.hasEvenLength], t.countWords);

    const expectedValid = [1, 1, 0];
    const expectedInvalid = ["hello world", 123, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('4. filters strings with whitespace and trims them', () => {
    // Hint: Guard: isString
    // Hint: Validator: hasWhitespace
    // Hint: Transformer: trimWhitespace

    const data = ["  hello  ", "world", "  ", "flower", 42, false];

    const [valid, invalid] = processData(data, g.isString, [v.hasWhitespace], t.trimWhitespace);

    const expectedValid = ["hello", ""];
    const expectedInvalid = ["world", "flower", 42, false];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('5. filters strings with minimum length and capitalizes them', () => {
    // Hint: Guard: isString
    // Hint: Validator: hasMinLength
    // Hint: Transformer: capitalize

    const data = ["ts", "type", "script", "js", 123, null];

    const [valid, invalid] = processData(data, g.isString, [v.hasMinLength(4)], t.capitalize);

    const expectedValid = ["Type", "Script"];
    const expectedInvalid = ["ts", "js", 123, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('6. filters strings with max length and uppercases them', () => {
    // Hint: Guard: isString
    // Hint: Validator: hasMaxLength
    // Hint: Transformer: toUpperCase

    const data = ["hi", "code", "typescript", "JS", true, []];

    const [valid, invalid] = processData(data, g.isString, [v.hasMaxLength(4)], t.toUpperCase);

    const expectedValid = ["HI", "CODE", "JS"];
    const expectedInvalid = ["typescript", true, []];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('7. filters numbers in range and stringifies them', () => {
    // Hint: Guard: isNumber
    // Hint: Validator: isInRange
    // Hint: Transformer: stringify

    const data = [1, 10, 5, -1, "5", 15, 8, null];

    const [valid, invalid] = processData(data, g.isNumber, [v.isInRange(5, 10)], t.stringify);

    const expectedValid = ["10", "5", "8"];
    const expectedInvalid = [1, -1, "5", 15, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('8. filters objects with name property and prints them', () => {
    // Hint: Guard: hasNameProperty
    // Hint: No additional validators needed
    // Hint: Transformer: print

    const data = [{ name: "TypeScript" }, { title: "JS" }, {}, null, "name", { name: "Alice" }];

    const [valid, invalid] = processData(data, g.hasNameProperty, [], t.print('name'));

    const expectedValid = ["I'm printing this property value!: TypeScript", "I'm printing this property value!: Alice"];
    const expectedInvalid = [{ title: "JS" }, {}, null, "name"];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('9. filters objects that have a specific property and prints them', () => {
    // Hint: Guard: hasProperty
    // Hint: Validator: hasPropertyValue
    // Hint: Transformer: print

    const data = [ { id: 1 }, { title: "Harry Potter" }, { id: 2, name: "Harry Potter" }, 42, null, {}, { title: "Harry Potter" }, { title: "Lord of the Rings" }];

    const [valid, invalid] = processData(data, g.hasProperty('title'), [v.hasPropertyValue('title', 'Harry Potter')], t.print('title'));

    const expectedValid = ["I'm printing this property value!: Harry Potter", "I'm printing this property value!: Harry Potter"];
    const expectedInvalid = [{ id: 1 }, { id: 2, name: "Harry Potter" }, 42, null, {}, { title: "Lord of the Rings" }];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('10. filters strings with whitespace and returns word count', () => {
    // Hint: Guard: isString
    // Hint: Validator: hasWhitespace
    // Hint: Transformer: countWords

    const data = ["hello world", "single", "this is a test", 123, {}, false];

    const [valid, invalid] = processData(data, g.isString, [v.hasWhitespace], t.countWords);

    const expectedValid = [2, 4];
    const expectedInvalid = ["single", 123, {}, false];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('11. filters numbers that are even and positive, then stringifies them', () => {
    // Hint: Guard: isNumber
    // Hint: Validators: isEven, isPositive
    // Hint: Transformer: stringify

    const data = [2, 4, -4, 3, "2", 0, {}, null];

    const [valid, invalid] = processData(data, g.isNumber, [v.isEven, v.isPositive], t.stringify);

    const expectedValid = ["2", "4"];
    const expectedInvalid = [-4, 3, "2", 0, {}, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('12. filters strings with even length and no whitespace, then capitalizes them', () => {
    // Hint: Guard: isString
    // Hint: Validators: hasEvenLength, NOT hasWhitespace
    // Hint: Transformer: capitalize

    const data = ["hello", "flower", "   spaced  ", "code", "TS", 42];

    const [valid, invalid] = processData(data, g.isString, [v.hasEvenLength, (value): boolean => !v.hasWhitespace(value)], t.capitalize);

    const expectedValid = ["Flower", "Code", "TS"];
    const expectedInvalid = ["hello", "   spaced  ", 42];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('13. filters objects with name property and a name length > 4, then prints them', () => {
    // Hint: Guard: hasNameProperty
    // Hint: Validators: hasMinLength
    // Hint: Transformer: print

    const data = [{ name: "JS" }, { name: "Carlos" }, {}, { name: "Code" }, null];

    const [valid, invalid] = processData(data, g.hasNameProperty, [(value): boolean => v.hasMinLength(5)(value.name)], t.print('name'));

    const expectedValid = ["I'm printing this property value!: Carlos"];
    const expectedInvalid = [{ name: "JS" }, {}, { name: "Code" }, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('14. filters strings that are exactly 5 characters long and uppercases them', () => {
    // Hint: Guard: isString
    // Hint: Validators: hasLength
    // Hint: Transformer: toUpperCase

    const data = ["apple", "pear", "grape", "fruit", "fig", "melon", 123];

    const [valid, invalid] = processData(data, g.isString, [v.hasLength(5)], t.toUpperCase);

    const expectedValid = ["APPLE", "GRAPE", "FRUIT", "MELON"];
    const expectedInvalid = ["pear", "fig", 123];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('15. filters strings that have even length and have whitespace, then trims them', () => {
    // Hint: Guard: isString
    // Hint: Validators: hasEvenLength, hasWhitespace
    // Hint: Transformer: trimWhitespace

    const data = ["hello ", "hi  ", "  world", "TS", "typescript", {}, null];

    const [valid, invalid] = processData(data, g.isString, [v.hasEvenLength, v.hasWhitespace], t.trimWhitespace);

    const expectedValid = ["hello", "hi"];
    const expectedInvalid = ["  world", "TS", "typescript", {}, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('16. filters arrays with even length and returns their lengths', () => {
    // Guard: isArray
    // Validator: hasEvenLength
    // Transformer: getLength

    const data: unknown[] = [[1, 2], [1], "not an array", [], [1, 2, 3, 4], {}, null];

    const [valid, invalid] = processData(data, g.isArray, [v.hasEvenLength], t.getLength);

    const expectedValid = [2, 0, 4];
    const expectedInvalid = [[1], "not an array", {}, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('17. filters arrays of positive numbers with even length and returns the sum', () => {
    // Guard: isNumberArray
    // Validator: isAllPositiveArray, hasEvenLength
    // Transformer: sumArray

    const data = [[1, 2], [1, -2], [1, 2, 3], [], ["a", "b"], [10, 5, 0], [10, 5, 6, 4], {}, null];

    const [valid, invalid] = processData(data, g.isNumberArray, [v.isAllPositiveArray, v.hasEvenLength], t.sumArray);

    const expectedValid = [3, 0, 25];
    const expectedInvalid = [[1, -2], [1, 2, 3], ["a", "b"], [10, 5, 0], {}, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('18. filters objects with "title" property and capitalizes its value', () => {
    // Guard: hasProperty
    // Validator: hasStringProperty
    // Transformer: capitalizeProperty

    const data = [{ title: "hello" }, { title: 123 }, { name: "test" }, null];

    const [valid, invalid] = processData(data, g.hasProperty('title'), [v.hasStringProperty('title')], t.capitalizeProperty('title'));

    const expectedValid = [{ title: "Hello" }];
    const expectedInvalid = [{ title: 123 }, { name: "test" }, null];

    expect(valid).toEqual(expectedValid);
    expect(invalid).toEqual(expectedInvalid);
  });

  test('19. returns no valid results when all fail type guard', () => {
    // Guard: isNumber
    // Validator: isPositive
    // Transformer: double

    const data = ["a", {}, null, false];

    const [valid, invalid] = processData(data, g.isNumber, [v.isPositive], t.double);

    expect(valid).toEqual([]);
    expect(invalid).toEqual(data);
  });

  test('20. returns no valid results when all validations fail', () => {
    // Guard: isString
    // Validators: hasEvenLength, hasWhitespace
    // Transformer: trimWhitespace

    const data = ["odd", "nomatch", "nospace", 123, {}, null];
    
    const [valid, invalid] = processData(data, g.isString, [v.hasEvenLength, v.hasWhitespace], t.trimWhitespace);

    expect(valid).toEqual([]);
    expect(invalid).toEqual(data);
  });
});