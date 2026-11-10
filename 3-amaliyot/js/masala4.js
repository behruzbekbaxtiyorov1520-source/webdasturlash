function harflarChastotasi(s) {
  let natija = {};
  for (let i = 0; i < s.length; i++) {
    let harf = s[i];
    if (natija[harf] !== undefined) {
      natija[harf]++;
    } else {
      natija[harf] = 1;
    }
  }
  return natija;
}
console.log(harflarChastotasi("banana"));
console.log(harflarChastotasi("veb"));
console.log(harflarChastotasi(""));
console.log(harflarChastotasi("salom"));