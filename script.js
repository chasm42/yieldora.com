function calculateLoan() {
  const principal = parseFloat(document.getElementById('principal').value);
  const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value);
  const payments = years * 12;

  if (isNaN(principal) || isNaN(interest) || isNaN(years)) {
    document.getElementById('result').textContent = "Please fill all fields correctly!";
    return;
  }

  const x = Math.pow(1 + interest, payments);
  const monthly = (principal * x * interest) / (x - 1);

  document.getElementById('result').textContent = `Monthly Payment: $${monthly.toFixed(2)}`;
}
