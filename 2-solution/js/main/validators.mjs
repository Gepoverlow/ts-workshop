// Checks if a number is positive
export const isPositive = (value) => value > 0;

// Checks if a number is even
export const isEven = (value) => value % 2 === 0;

// Returns a validator that checks if a value has a specific length
export const hasLength = (length) => (value) => value.length === length;

// Returns a validator that checks if a value has at least the given length
export const hasMinLength = (minLength) => (value) => value.length >= minLength;

// Returns a validator that checks if a value has at most the given length
export const hasMaxLength = (maxLength) => (value) => value.length <= maxLength;

// Returns a validator that checks if a number is within a given range (inclusive)
export const isInRange = (min, max) => (value) => value >= min && value <= max;

// Checks if a string contains at least one whitespace character
export const hasWhitespace = (value) => /\s/.test(value);

// Checks if a string or array has an even length
export const hasEvenLength = (value) => value.length % 2 === 0;

// Returns a validator that checks if an object property equals a specific value
export const hasPropertyValue = (property, value) => (obj) => obj[property] === value;

// Returns a validator that checks if an object property is a string
export const hasStringProperty = (key) => (obj) => typeof obj[key] === 'string';

// Checks if every item in the array is a positive number
export const isAllPositiveArray = (value) => value.every(num => num > 0);