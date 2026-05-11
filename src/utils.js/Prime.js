function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

export function nthPrime(n) {
  let primes = [];
  let num = 2;
  while(primes.length < n) {
    if(isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes[primes.length-1];
}
