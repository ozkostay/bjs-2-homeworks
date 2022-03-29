// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  avg = 0;
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] < min) {
      min = arr[i];  
    }
    max = arr[i] > max ? arr[i] : max;
    avg = avg+arr[i];  
  }
  avg = Number((avg/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for ( let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; 
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let workertemp;
  for ( let i = 0; i < arrOfArr.length; i++) {
    workertemp = func(arrOfArr[i]);
    if (max < workertemp) {
      max = workertemp;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min, max;
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length ; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }
  return Math.abs(max - min);
}

console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
console.log(makeWork(arrOfArr, worker2)); // 30

console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];
console.log(makeWork(arrOfArr, worker2)); // 98