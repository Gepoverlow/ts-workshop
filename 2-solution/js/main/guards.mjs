// Checks if the value is a number
export const isNumber = (value) => typeof value === 'number';

// Checks if the value is a string
export const isString = (value) => typeof value === 'string';

// Checks if the value is an array
export const isArray = (value) => Array.isArray(value);

// Checks if the value is an array of numbers
export const isNumberArray = (value) => isArray(value) && value.every(item => typeof item === 'number');

// Checks if the value is a plain object (not null, not an array)
export const isPlainObject = (value) =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

// Returns a guard that checks if an object has a specific property
export const hasProperty = (key) => (value) =>
  isPlainObject(value) && Object.prototype.hasOwnProperty.call(value, key);

// Checks if an object has a 'name' property that is of type string
export const hasNameProperty = (value) => hasProperty('name')(value) && typeof value.name === 'string';
