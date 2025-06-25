# TypeScript Workshop

Welcome to the TypeScript Workshop!

These set of exercises will help you appreciate the value of TypeScript by first working in **vanilla JavaScript**, and then re-implementing the same solution in **TypeScript**.

## 🛠 Setup

To get started:

1. Clone the repository to your local machine.
2. Navigate into the project folder.
3. Run `npm install` to install all dependencies.

Scripts at your disposal:

1. Use `npm test` to run all tests (JavaScript and TypeScript versions).
2. Use `npm lint` to run the linter on all .mts files.

You can also run the JavaScript and TypeScript tests separately — see the instructions below.

---

## 🚀 Getting Started - Beginner Level

### 1. Complete the JavaScript Exercise

Open the file `1-beginner/js/main/log-user-summary.mjs`.

Complete all the functions using the provided `User` object.

---

### 2. Run the JavaScript Tests

To check your progress, run the test file with:

`npm run 1-beginner/js/tests/log-user-summary.test.mjs`

Once **all tests pass**, move on to the TypeScript version.

---

### 3. Complete the TypeScript Version

Open the file `1-beginner/ts/main/log-user-summary.mts`.

Re-implement the same functions using TypeScript features like types, interfaces, and type annotations.

---

### 4. Run the TypeScript Tests

Run the test file with:

`npm run 1-beginner/ts/tests/log-user-summary.test.mts`

Make sure all tests pass, just like in the JavaScript version.

---

### ✅ Goal

By completing this exercise in both JavaScript and TypeScript, you’ll learn to:

- Define and use static types
- Model data structures using interfaces
- Catch bugs earlier through type checking
- Write clearer and more maintainable code

---

### 🧠 Tips

- Reuse your working JavaScript solution as a base for the TypeScript version.
- Add types to function parameters and return values.
- Create interfaces for the `User` object and its `children`.
- Use the TypeScript compiler or test runner to check your code.

---

## 🧩 Intermediate Level

In this intermediate-level exercise, you’ll build on your TypeScript skills by working with **type guards**, **validators**, **transformers**, and **higher-order functions**.

Just like in the beginner section, you’ll start with a JavaScript version and then re-implement the logic in TypeScript — but this time using more advanced TypeScript features such as:

- Type guards
- Generics
- Type inference
- Currying and functional utilities
- Narrowing unknown values

---

### 1. Complete the JavaScript Exercise

Open the file:  
`2-intermediate/js/main/process-data.mjs`

Follow the instructions in the file and write the logic for the `processData` function.

You’ll need to make use of the helper files:

- `guards.mjs` – contains type guard functions
- `validators.mjs` – contains validation functions
- `transformers.mjs` – contains transformation functions

Check the unit tests for input/output examples and expected behavior.

---

### 2. Run the JavaScript Tests

Run the test file located at:  
`2-intermediate/js/tests/process-data.test.mjs`

Ensure all the tests pass before moving on to the TypeScript version.

---

### 3. Complete the TypeScript Version

Open the file:  
`2-intermediate/ts/main/process-data.mts`

Re-implement the same logic using TypeScript:

- Add appropriate types and interfaces
- Use type guards to safely narrow unknown values
- Type your curried functions and higher-order validators
- Ensure type safety across all transformations

You can reuse and refactor your JavaScript logic into well-typed, modular TypeScript code.

---

### 4. Run the TypeScript Tests

Run the test file located at:  
`2-intermediate/ts/tests/process-data.test.mts`

Make sure all the tests pass and compare behavior between the JavaScript and TypeScript versions.

---

### ✅ Goal

By completing this intermediate exercise, you’ll:

- Deepen your understanding of TypeScript’s type system
- Practice type narrowing and guards for unknown or dynamic input
- Work with functional patterns and curried validators
- Build reusable, type-safe utilities

---

### 🧠 Tips

- Don’t forget to add types to the return values of your guards and validators.
- Use `unknown` for input values and narrow them using guard functions.
- Split logic into helper functions if it helps with readability and reuse.
- Let the compiler guide you — many of these bugs and edge cases will be caught by TypeScript automatically.

---

Happy coding! 🎉
