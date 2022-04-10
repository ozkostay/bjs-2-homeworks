function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every( (arr1,index,arr2) => arr1===arr2[index]);
  return result && (arr1.length === arr2.length); // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(nums => nums > 0).filter(nums => (nums % 3 == 0)).map(nums => nums*10);
  return resultArr; // array
}
