// Write the logic for this function: 
// It should take an array of unknown values (data) which will then go through a set of validations and a transformation function for each value of the valid data.
// Lastly it outputs the end result  - array of two arrays: 
// - valid (transformed data)
// - invalid not transformed data)

export function processData(
  data,
  typeGuard, 
  validators, 
  transformer
) {
    const valid = [];
    const invalid = [];

    for (const item of data) {
      if(typeGuard(item)) {
        const isValid = validators.every(validator => validator(item));
        if(isValid) {
          valid.push(transformer(item));
        } else {
          invalid.push(item);
        }
      } else {
        invalid.push(item);
      }
    }
    
    return [valid, invalid];
};