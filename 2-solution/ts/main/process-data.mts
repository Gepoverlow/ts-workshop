// Write the logic for this function: 

// Should be able to take as input:
// An array of unknown values.
// An array of validation methods. See the validators file.
// A single transformer method. See the transformers file.
// Tip: Perhaps an extra helper function to narrow down types is a good idea? See the guards file.

// Should be able to output:
// An array of valid and invalid values
// The array of valid values should consist of values that passed the validation methods + have been transformed by the transformer method.
// The array of invalid values should consist of all the values that did not pass the validation methods.

// Check the unit tests for examples on inputs and outputs.

type ProcessResult<U> = [valid: U[], invalid: unknown[]];

export function processData<TIn, TOut>(
  data: unknown[],
  typeGuard: (value: unknown) => value is TIn,
  validators: ((value: TIn) => boolean)[],
  transformer: (item: TIn) => TOut
): ProcessResult<TOut> {
  const valid: TOut[] = [];
  const invalid: unknown[] = [];

  for (const item of data) {
    if(typeGuard(item)) {
      const isValid = validators.every(validator => validator(item))
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
}