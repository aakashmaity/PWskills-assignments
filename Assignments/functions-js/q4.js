function createTaxCalculator(taxRate) {
  return function (income) {
    return income * taxRate;
  };
}

function calculateTax(income) {
  let tax;
  if (income <= 25000) {
    tax = createTaxCalculator(0.1);
  } else if (income <= 50000) {
    tax = createTaxCalculator(0.15);
  } else if (income <= 100000) {
    tax = createTaxCalculator(0.2);
  } else {
    tax = createTaxCalculator(0.3);
  }
  return tax(income);
}

console.log(calculateTax(15000));
console.log(calculateTax(35000));
console.log(calculateTax(75000));
console.log(calculateTax(125000));
