const subConjunto = (numbers, num) => {
  let sum = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === num) {
        sum.push(numbers[i], numbers[j]);
      }
      break; //termina con con la 1ra coincidencia
    }
  }
  return sum;
};
let numbers = [2, 5, 8, 14, 0, 2];
//let numbers = [3, 5, 2, -4, 8, 11];
console.log("sum", subConjunto(numbers, 7));