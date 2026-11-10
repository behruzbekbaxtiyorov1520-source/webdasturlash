function bolaklargaAjrat(arr, n) {
  let natija = [];
  for (let i = 0; i < arr.length; i += n) {
    let bolak = [];
    for (let j = i; j < i + n && j < arr.length; j++) {
      bolak.push(arr[j]);
    }
    natija.push(bolak);
  }
  return natija;
}
console.log(bolaklargaAjrat([1, 2, 3, 4, 5], 2));
console.log(bolaklargaAjrat(["a", "b", "c"], 3));
console.log(bolaklargaAjrat([], 2));
console.log(bolaklargaAjrat([1, 2, 3, 4], 1));