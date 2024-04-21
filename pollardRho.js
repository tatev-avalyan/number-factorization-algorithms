function modular_pow(base, exponent, modulus) {
  let result = 1;

  while (exponent > 0) {
    if (exponent % 2 == 1) result = (result * base) % modulus;

    exponent = exponent >> 1;

    base = (base * base) % modulus;
  }
  return result;
}

function pollardRhoFactorize(n) {
  if (n == 1) return n;

  if (n % 2 == 0) return 2;

  let x = Math.floor(Math.random() * (-n + 1));
  let y = x;

  let c = Math.floor(Math.random() * (-n + 1));

  let d = 1;
  while (d == 1) {
    x = (modular_pow(x, 2, n) + c + n) % n;

    y = (modular_pow(y, 2, n) + c + n) % n;
    y = (modular_pow(y, 2, n) + c + n) % n;

    d = __gcd(Math.abs(x - y), n);

    if (d == n) return pollardRhoFactorize(n);
  }

  return d;
}

function __gcd(a, b) {
  return b == 0 ? a : __gcd(b, a % b);
}
