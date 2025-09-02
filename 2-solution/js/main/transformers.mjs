// Returns the double of a number
export const double = (value) => value * 2;

// Converts a string to uppercase
export const toUpperCase = (value) => value.toUpperCase();

// Converts any value to a string
export const stringify = (value) => String(value);

// Capitalizes the first letter of a string
export const capitalize = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1);

// Returns a new object with a specific string property capitalized
export const capitalizeProperty = (property) => (object) => ({
  ...object,
  [property]: object[property].charAt(0).toUpperCase() + object[property].slice(1),
});

// Trims whitespace from a string
export const trimWhitespace = (value) => value.trim();

// Returns true if a number is even, false otherwise
export const numberToBoolean = (value) => value % 2 === 0;

// Counts the number of words in a string
export const countWords = (value) => {
  const trimmed = value.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
};

// Returns a printed message using a property value from an object
export const print = (property) => (object) =>
  `I'm printing this property value!: ${String(object[property])}`;

// Sums all the numbers in an array
export const sumArray = (value) => value.reduce((sum, num) => sum + num, 0);

// Returns the length of a string or array
export const getLength = (value) => value.length;
