function engKatta(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(engKatta([12, 45, 7, 23]));
console.log(engKatta([-5, -2, -9]));
console.log(engKatta([10]));
console.log(engKatta([100, 3, 55, 89]));