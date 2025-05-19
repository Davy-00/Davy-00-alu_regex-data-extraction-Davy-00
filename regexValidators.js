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

// Extract Email Addresses
function extractEmails(text) {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(regex) || [];
}

// Extract URLs
function extractURLs(text) {
  const regex = /(https?:\/\/[\w-]+\.[\w.-]+[^\s]*)/g;
  return text.match(regex) || [];
}

// Extract Phone Numbers
function extractPhoneNumbers(text) {
  const regex = /(\(\d{3}\)\s?|\d{3}[-.]?)\d{3}[-.]?\d{4}/g;
  return text.match(regex) || [];
}

// Extract Credit Card Numbers
function extractCreditCards(text) {
  const regex = /(\d{4}[- ]?){3}\d{4}/g;
  return text.match(regex) || [];
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const urlInput = document.getElementById('url');
    const phoneInput = document.getElementById('phone');
    const creditCardInput = document.getElementById('creditCard');

    const emailResult = document.getElementById('emailResult');
    const urlResult = document.getElementById('urlResult');
    const phoneResult = document.getElementById('phoneResult');
    const creditCardResult = document.getElementById('creditCardResult');

    function updateResult(element, isValid) {
      const value = element.value.trim();
      if (value === '') {
        element.nextElementSibling.textContent = 'Input is empty';
        element.nextElementSibling.className = 'result invalid';
        return;
      }
      if (value.length > 100) {
        element.nextElementSibling.textContent = 'Input too long';
        element.nextElementSibling.className = 'result invalid';
        return;
      }
      element.nextElementSibling.textContent = isValid ? 'Valid' : 'Invalid';
      element.nextElementSibling.className = isValid ? 'result valid' : 'result invalid';
    }

    document.getElementById('validateExtractBtn').addEventListener('click', () => {
      updateResult(emailInput, validateEmail(emailInput.value));
      updateResult(urlInput, validateURL(urlInput.value));
      updateResult(phoneInput, validatePhoneNumber(phoneInput.value));
      updateResult(creditCardInput, validateCreditCard(creditCardInput.value));

      // Combined output
      const outputContent = document.getElementById('outputContent');

      // const emailValidation = validateEmail(emailInput.value) ? 'Valid' : 'Invalid';
      // const urlValidation = validateURL(urlInput.value) ? 'Valid' : 'Invalid';
      // const phoneValidation = validatePhoneNumber(phoneInput.value) ? 'Valid' : 'Invalid';
      // const creditCardValidation = validateCreditCard(creditCardInput.value) ? 'Valid' : 'Invalid';

      const emailExtraction = extractEmails(emailInput.value).join(', ') || 'No emails found';
      const urlExtraction = extractURLs(urlInput.value).join(', ') || 'No URLs found';
      const phoneExtraction = extractPhoneNumbers(phoneInput.value).join(', ') || 'No phone numbers found';
      const creditCardExtraction = extractCreditCards(creditCardInput.value).join(', ') || 'No credit card numbers found';

      outputContent.innerHTML = `
        <p><strong>Email:</strong> ${emailExtraction}</p>
        <p><strong>URL:</strong> ${urlExtraction}</p>
        <p><strong>Phone Number:</strong> ${phoneExtraction}</p>
        <p><strong>Credit Card:</strong> ${creditCardExtraction}</p>
      `;
    });
  });
}
