// Custom function to enforce the max length of 4
export function arrayLimit(val) {
  return val.length <= 4;
}

// Validator to ensure the sum of 'percent' fields equals 100
export function percentSumValidator(val) {
  const sum = val.reduce((total, payment) => total + payment.percent, 0);
  return sum === 100;
}
