// Checks if a number is positive
export const isPositive = (value: number): boolean => value > 0;

// Checks if a number is even
export const isEven = (value: number): boolean => value % 2 === 0;

// Returns a validator that checks if a value has a specific length (curried function)
export const hasLength =
  (length: number): ((value: string | unknown[]) => boolean) =>
  (value): boolean =>
    value.length === length;

// Returns a validator that checks if a value has at least the given length (curried function)
export const hasMinLength =
  (minLength: number): ((value: string | unknown[]) => boolean) =>
  (value): boolean =>
    value.length >= minLength;

// Returns a validator that checks if a value has at most the given length (curried function)
export const hasMaxLength =
  (maxLength: number): ((value: string | unknown[]) => boolean) =>
  (value): boolean =>
    value.length <= maxLength;

// Returns a validator that checks if a number is within a given range (inclusive) (curried function)
export const isInRange =
  (min: number, max: number): ((value: number) => boolean) =>
  (value): boolean =>
    value >= min && value <= max;

// Checks if a string contains at least one whitespace character
export const hasWhitespace = (value: string): boolean => /\s/.test(value);

// Checks if a string or array has an even length
export const hasEvenLength = (value: string | unknown[]): boolean =>
  value.length % 2 === 0;

// Returns a validator that checks if an object property equals a specific value (curried function)
export const hasPropertyValue =
  <T, K extends keyof T>(property: K, value: T[K]) =>
  (obj: T): boolean =>
    obj[property] === value;

// Returns a validator that checks if an object property is a string (curried function)
export const hasStringProperty =
  <T, K extends keyof T>(key: K) =>
  (obj: T): boolean =>
    typeof obj[key] === "string";

// Checks if every item in the array is a positive number
export const isAllPositiveArray = (value: number[]): boolean =>
  value.every((num) => num > 0);
