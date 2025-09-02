// Write a function that checks that the value type is number.
export function isNumber(value: unknown): value is number {

    return typeof value === 'number';

};

// Write a function that checks that the value type is string.
export function isString(value: unknown): value is string {

    return typeof value === 'string';

};

// Write a function that checks that the value type is array.
export function isArray(value: unknown): value is unknown[] {

    return Array.isArray(value);

};

// Checks if the value is an array of numbers
export const isNumberArray = (value: unknown): value is number[] => {
    
    return isArray(value) && value.every(item => typeof item === 'number');

};

// Write a function that checks is value is a plain object (not null, not array).
export function isPlainObject(value: unknown): value is Record<string | number | symbol, unknown> {

    return typeof value === 'object' && value !== null && !Array.isArray(value);

};

// Write a function that checks if value has a specific property (optionally or a specific type).
export function hasProperty<T extends string | number | symbol, V = unknown>(key: T): (value: unknown) => value is Record<T, V> {

    return (value: unknown): value is Record<T, V> => isPlainObject(value) && Object.prototype.hasOwnProperty.call(value, key);

};

// Checks if an object has a 'name' property that is of type string
export function hasNameProperty(value: unknown): value is Record<'name', string> {

    return hasProperty('name')(value) && typeof value.name === 'string';

};