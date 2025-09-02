// Returns the double of a number
export const double = (value: number): number => value * 2;

// Converts a string to uppercase
export const toUpperCase = (value: string): string => value.toUpperCase();

// Converts any value to a string
export const stringify = (value: unknown): string => String(value);

// Capitalizes the first letter of a string
export const capitalize = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

// Returns a new object with a specific string property capitalized
export const capitalizeProperty = <T, K extends keyof T>(property: K) => (object: T): T => ({
  ...object,
  [property]: (object[property] as string).charAt(0).toUpperCase() +
              (object[property] as string).slice(1),
});

// Trims whitespace from a string
export const trimWhitespace = (value: string): string => value.trim();

// Returns true if a number is even, false otherwise
export const numberToBoolean = (value: number): boolean => value % 2 === 0;

// Counts the number of words in a string
export const countWords = (value: string): number => {
  const trimmed = value.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
};

// Returns a printed message using a property value from an object
export const print = <T, K extends keyof T>(property: K) => (object: T): string =>
  `I'm printing this property value!: ${String(object[property])}`;

// Sums all the numbers in an array
export const sumArray = (value: number[]): number => value.reduce((sum, num) => sum + num, 0);

// Returns the length of a string or array
export const getLength = <T extends { length: number }>(value: T): number => value.length;