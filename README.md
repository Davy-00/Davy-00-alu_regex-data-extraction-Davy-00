# Regex Data Extraction

This project implements regular expression validations for extracting specific data types from strings.

## Data Types Implemented

- Email addresses
- URLs
- Phone numbers
- Credit card numbers

## Usage

The `regexValidators.js` file exports functions to validate each data type.

Example:

```js
const { validateEmail, validateURL, validatePhoneNumber, validateCreditCard } = require('./regexValidators');

console.log(validateEmail('user@example.com')); // true
console.log(validateURL('https://www.example.com')); // true
console.log(validatePhoneNumber('(123) 456-7890')); // true
console.log(validateCreditCard('1234 5678 9012 3456')); // true
```

## How to Run

1. Clone the repository.
2. Run `node regexValidators.js` to test the validations.

## License

MIT License
