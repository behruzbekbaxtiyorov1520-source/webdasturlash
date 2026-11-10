function raqamlarSoni(n) {
  if (n === 0) return 1;
  let son = Math.abs(n);
  let sanoq = 0;
  while (son > 0) {
    son = Math.floor(son / 10);
    sanoq++;
  }
  return sanoq;
}
console.log(raqamlarSoni(90210));
console.log(raqamlarSoni(-7));
console.log(raqamlarSoni(0));
console.log(raqamlarSoni(123456789));