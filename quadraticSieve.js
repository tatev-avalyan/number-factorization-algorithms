function isPerfectSquare(n) {
  const sqrtN = Math.floor(Math.sqrt(n));
  return sqrtN * sqrtN === n;
}

function quadraticSieveFactorize(N) {
  if (N <= 0 || !Number.isInteger(N)) {
    throw new Error("N must be a positive integer.");
  }

  if (N % 2 === 0) {
    return [2, N / 2];
  }

  let a = Math.ceil(Math.sqrt(N));
  let b2 = a * a - N;

  while (!isPerfectSquare(b2)) {
    a++;
    b2 = a * a - N;
  }

  const b = Math.sqrt(b2);
  const factor1 = a - b;
  const factor2 = a + b;

  if (factor1 * factor2 !== N) {
    throw new Error("Failed to factorize N using Carl Pomerance's algorithm.");
  }

  return [factor1, factor2];
}
