describe('processData', () => {
  test('filters positive numbers and doubles them', () => {
    // Input: [1, -2, 3, 0, "5", null, undefined, {}, []]
    // Expected: 
    //   valid: [2, 6]
    //   invalid: [-2, 0, "5", null, undefined, {}, []]
  });

  test('filters even numbers and transforms them into booleans', () => {
    // Input: [2, 3, 4, 5, "6", {}, true, null]
    // Expected:
    //   valid: [true, true]
    //   invalid: [3, 5, "6", {}, true, null]
  });

  test('filters strings with even length and counts words', () => {
    // Input: ["hello world", "hi", "typescript", "", 123, null]
    // Expected:
    //   valid: [2]
    //   invalid: ["hi", "typescript", "", 123, null]
  });

  test('filters strings with whitespace and trims them', () => {
    // Input: ["  hello  ", "world", "  ", "flower", 42, false]
    // Expected:
    //   valid: ["hello", ""]
    //   invalid: ["world", "flower", 42, false]
  });

  test('filters strings with minimum length and capitalizes them', () => {
    // Input: ["ts", "type", "script", "js", 123, null]
    // Expected:
    //   valid: ["Type", "Script"]
    //   invalid: ["ts", "js", 123, null]
  });

  test('filters strings with max length and uppercases them', () => {
    // Input: ["hi", "code", "typescript", "JS", true, []]
    // Expected:
    //   valid: ["HI", "CODE", "JS"]
    //   invalid: ["typescript", true, []]
  });

  test('filters numbers in range and stringifies them', () => {
    // Input: [1, 10, 5, -1, "5", 15, 8, null]
    // Range: 5–10
    // Expected:
    //   valid: ["10", "5", "8"]
    //   invalid: [1, -1, "5", 15, null]
  });

  test('filters objects with name property and prints them', () => {
    // Input: [{ name: "TypeScript" }, { title: "JS" }, {}, null, "name", { name: "Alice" }]
    // Expected:
    //   valid: [
    //     "Im printing this property value!: TypeScript",
    //     "Im printing this property value!: Alice"
    //   ]
    //   invalid: [{ title: "JS" }, {}, null, "name"]
  });

  test('filters objects that have a specific property and prints them', () => {
    // Input: [{ id: 1 }, { title: "Book" }, { id: 2, name: "A" }, 42, null, {}, { title: "Golang" }]
    // Property: "title"
    // Expected:
    //   valid: [
    //     "Im printing this property value!: Book",
    //     "Im printing this property value!: Golang"
    //   ]
    //   invalid: [{ id: 1 }, { id: 2, name: "A" }, 42, null, {}]
  });

  test('filters strings with whitespace and returns word count', () => {
    // Input: ["hello world", "single", "this is a test", 123, {}, false]
    // Expected:
    //   valid: [2, 4]
    //   invalid: ["single", 123, {}, false]
  });

  test('filters numbers that are even and positive, then stringifies them', () => {
    // Input: [2, 4, -4, 3, "2", 0, {}, null]
    // Expected:
    //   valid: ["2", "4"]
    //   invalid: [-4, 3, "2", 0, {}, null]
  });

  test('filters strings with even length and no whitespace, then capitalizes them', () => {
    // Input: ["hello", "flower", "   spaced  ", "code", "TS", 42]
    // Expected:
    //   valid: ["Flower", "Code"]
    //   invalid: ["hello", "   spaced  ", "TS", 42]
  });

  test('filters objects with name property and a name length > 4, then prints them', () => {
    // Input: [{ name: "JS" }, { name: "Carlos" }, {}, { name: "Code" }, null]
    // Expected:
    //   valid: ["Im printing this property value!: Carlos"]
    //   invalid: [{ name: "JS" }, {}, { name: "Code" }, null]
  });

  test('filters strings that are exactly 5 characters long and uppercases them', () => {
    // Input: ["apple", "pear", "grape", "fruit", "fig", "melon", 123]
    // Expected:
    //   valid: ["APPLE", "GRAPE", "FRUIT"]
    //   invalid: ["pear", "fig", "melon", 123]
  });

  test('filters strings that have even length and have whitespace, then trims them', () => {
    // Input: ["hello ", "hi  ", "  world", "TS", "typescript", {}, null]
    // Expected:
    //   valid: ["hello", "world"]
    //   invalid: ["hi  ", "TS", "typescript", {}, null]
  });

    test('filters arrays with even length and returns their lengths', () => {
    // Input:
    // [ [1, 2], [1], "not an array", [], [1, 2, 3, 4], {}, null ]

    // Expected:
    // valid: [2, 0, 4]
    // invalid: [[1], "not an array", {}, null]
  });

  test('filters arrays of numbers and returns the sum', () => {
    // Input:
    // [ [1, 2], [1, "2"], [], ["a", "b"], [10, 5], {}, null ]

    // Expected:
    // valid: [3, 0, 15]
    // invalid: [ [1, "2"], ["a", "b"], {}, null ]
  });

  test('filters objects with "title" property and capitalizes its value', () => {
    // Input:
    // [ { title: "hello" }, { name: "world" }, { title: 42 }, {}, null ]

    // Expected:
    // valid: ["Hello"]
    // invalid: [{ name: "world" }, { title: 42 }, {}, null]
  });

  test('returns no valid results when all fail type guard', () => {
    // Input: ["1", {}, null, undefined, "two", []]
    // Expected:
    // valid: []
    // invalid: ["1", {}, null, undefined, "two", []]
  });

  test('returns no valid results when all validations fail', () => {
    // Input:
    // ["abc", "nospace", "short", 123, {}, null]

    // Explanation:
    // None of these strings have both even length **and** whitespace,
    // and the non-string inputs should fail the guard entirely.

    // Expected:
    // valid: []
    // invalid: ["abc", "nospace", "short", 123, {}, null]
  });
});