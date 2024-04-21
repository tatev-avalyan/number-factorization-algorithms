function factorize() {
  const inputNumber = document.getElementById("numberInput").value;
  const number = parseInt(inputNumber);

  if (isNaN(number) || number <= 1) {
    alert("Please enter a valid number greater than 1.");
    return;
  }

  try {
    const pollardP1Result = pollardP1Factorize(number);
    const pollardRhoResult = pollardRhoFactorize(number);
    const quadraticSieveResult = quadraticSieveFactorize(number);
    const numberFieldSieveResult = numberFieldSieveFactorize(number);
    displayResult("pollardP1Result", "Pollard's P-1", pollardP1Result, number);
    displayResult(
      "pollardRhoResult",
      "Pollard's Rho",
      pollardRhoResult,
      number
    );
    displayResult(
      "quadraticSieveResult",
      "Quadratic Sieve",
      quadraticSieveResult
    );
    // displayResult(
    //   "numberFieldSieveResult",
    //   "Number Field Sieve",
    //   numberFieldSieveResult
    // );
  } catch (error) {
    console.error("Factorization error:", error);
    console.log(error.toString());
    alert("An error occurred during factorization. Please try again.");
  }
}

function displayResult(elementId, algorithmName, factors, number) {
  const resultElement = document.getElementById(elementId);
  if (Array.isArray(factors) && factors.length > 0) {
    resultElement.innerHTML = `<strong>${algorithmName} Factors:</strong> ${factors.join(
      ", "
    )}`;
  } else if (factors !== null) {
    resultElement.innerHTML = `<strong>${algorithmName} Factor:</strong> ${factors}`;
  } else {
    resultElement.innerHTML = `<strong>No factors found for ${number} using ${algorithmName}</strong>`;
  }

  resultElement.setAttribute("title", algorithmName);
}
