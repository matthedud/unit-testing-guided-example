function sum(a, b) {
  if(!a) return 0
  if(!b) return a
  return a + b;
}

function subtract(a, b) {
  if(!a) return 0
  if(b===undefined) return a
  return a - b;
}

function divide(a, b) {
  if(!b) throw new Error()
  return a / b;
}

function multiply(a, b) {
  if(a===undefined) return 0
  if(b===undefined) return a
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
