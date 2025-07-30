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

Complete the missing logic for each function.
Fix log-user-summary.mjs and users.mjs.
No need to change anything from the tests, all the expected results should already be there.

---

### 2. Run the JavaScript Tests

To check your progress, run the test file with:

`npm run 1-beginner/js/tests/log-user-summary.test.mjs`

Once **all tests pass**, move on to the TypeScript version.

---

### 3. Complete the TypeScript Version

Open the file `1-beginner/ts/main/log-user-summary.mts`.

Re-implement the same functions using TypeScript features like types, interfaces, and type annotations. Maybe also Enums?

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

- Type guards and custom narrowing functions
- Generics and reusable utility types
- Type inference for curried and higher-order function
- Type-safe handling of unknown values
- Strongly-types functional transformations

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

Run the test file:  
`npm test 2-intermediate/js/tests/process-data.test.mjs`

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

Run the test file:  
`npm test 2-intermediate/ts/tests/process-data.test.mts`

Make sure all the tests pass and compare behavior between the JavaScript and TypeScript versions.

---

### ✅ Goal

By completing this intermediate exercise, you’ll:

- Deepen your understanding of TypeScript’s type system and inference capabilities
- Practice safely narrowing unknown values using custom type guards
- Apply TypeScript to functional patterns like currying and composition
- Build reusable, strongly-typed validators and transformation utilities

---

### 🧠 Tips

- Don’t forget to add types to the return values of your guards and validators.
- Use `unknown` for input values and narrow them using guard functions.
- Let the compiler guide you — many of these bugs and edge cases will be caught by TypeScript automatically.

---

## 💥 Advanced Level

Ready to truly level up your TypeScript skills?  
At this stage, it's time to move beyond typical application logic and dive deep into **TypeScript's type system itself**.

For the advanced portion of this workshop, we recommend working through:

👉 [Type Challenges](https://github.com/type-challenges/type-challenges)

This is a curated collection of over 100+ exercises focused entirely on **type-level programming** — from basic utility types to complex recursive type logic.

---

### 💡 Why Type Challenges?

These exercises will help you:

- Develop an intuitive grasp of advanced type features like conditional types, mapped types, recursive types, template literal types, and more
- Solve real-world type problems without relying on runtime logic
- Learn how the TypeScript compiler “thinks”
- Become more confident in writing robust, type-safe libraries and APIs

---

### 🏁 Getting Started

1. Visit the [Type Challenges GitHub Repository](https://github.com/type-challenges/type-challenges)
2. Follow the setup instructions in their README
3. Start with the “Easy” challenges and work your way up

No tests to run locally here — everything runs directly in the TypeScript playground!

---

### ✨ Tip

Even solving a few challenges can greatly boost your confidence and understanding of TypeScript’s most powerful features. Stick with it — it's worth it!

---

Happy typing! 🎉
