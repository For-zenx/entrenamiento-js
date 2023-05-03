//4.3: una lista

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

const listToArray = (lista) => {
  let array = [];
  for (let node = lista; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

function prepend(value, lista) {
  return { value, resto: lista };
}

function nth(lista, n) {
  if (!lista) return undefined;
  else if (n === 0) return lista.value;
  else return nth(lista.rest, n - 1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20

if (1 + 1 == 2) console.log("Es verdad");
