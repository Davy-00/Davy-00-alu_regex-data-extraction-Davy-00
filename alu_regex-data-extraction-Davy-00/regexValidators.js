// Regex Validators for Data Extraction

// Validate Email Address
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Validate URL (http or https)
function validateURL(url) {
  const regex = /^(https?:\/\/)([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i;
  return regex.test(url);
}

// Validate Phone Number (various formats)
function validatePhoneNumber(phone) {
  const regex = /^(\(\d{3}\)\s?|\d{3}[-.]?)\d{3}[-.]?\d{4}$/;
  return regex.test(phone);
}

// Validate Credit Card Number (spaces or dashes)
function validateCreditCard(card) {
  const regex = /^(\d{4}[- ]?){3}\d{4}$/;
  return regex.test(card);
}

// Example usage
if (require.main === module) {
  console.log('Email Tests:');
  console.log(validateEmail('user@example.com')); // true
  console.log(validateEmail('firstname.lastname@company.co.uk')); // true
  console.log(validateEmail('invalid-email@com')); // false

  console.log('\nURL Tests:');
  console.log(validateURL('https://www.example.com')); // true
  console.log(validateURL('https://subdomain.example.org/page')); // true
  console.log(validateURL('ftp://example.com')); // false

  console.log('\nPhone Number Tests:');
  console.log(validatePhoneNumber('(123) 456-7890')); // true
  console.log(validatePhoneNumber('123-456-7890')); // true
  console.log(validatePhoneNumber('123.456.7890')); // true
  console.log(validatePhoneNumber('1234567890')); // false

  console.log('\nCredit Card Tests:');
  console.log(validateCreditCard('1234 5678 9012 3456')); // true
  console.log(validateCreditCard('1234-5678-9012-3456')); // true
  console.log(validateCreditCard('1234567890123456')); // false
}

module.exports = {
  validateEmail,
  validateURL,
  validatePhoneNumber,
  validateCreditCard,
};
