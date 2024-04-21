function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2 || n == 3) return true;
  if (n % 2 == 0) return false;
  for (var i = 3; i * i <= n; i += 2) if (n % i == 0) return false;
  return true;
}
function pollard(n) {
  let x = 2;
  let y = 2;
  let d = 1;

  function f(x) {
    return (x * x + 1) % n;
  }

  while (d === 1) {
    x = f(x);
    y = f(f(y));
    d = gcd(Math.abs(x - y), n);

    if (d === n) {
      break;
    }
  }

  return d;
}

function pollardP1Factorize(number) {
  let num = number;
  let ans = [];

  while (num > 1) {
    let d = pollard(num);
    ans.push(d);
    let r = Math.floor(num / d);

    if (isPrime(r)) {
      ans.push(r);
      break;
    } else {
      num = r;
    }
  }

  return ans;
}
