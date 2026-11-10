function satrniTeskari(s) {
  let teskari = "";
  for (let i = s.length - 1; i >= 0; i--) {
    teskari += s[i];
  }
  return teskari;
}
console.log(satrniTeskari("salom"));
console.log(satrniTeskari("JavaScript"));
console.log(satrniTeskari(""));
console.log(satrniTeskari("Uzbekistan"));