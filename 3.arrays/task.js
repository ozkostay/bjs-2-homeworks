function compareArrays(arr1, arr2) {
  return  (arr1.length === arr2.length) && arr1.every((ElementArr1, index) => ElementArr1 === arr2[index]) ; 
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(nums => nums > 0).filter(nums => (nums % 3 == 0)).map(nums => nums*10);
  return resultArr; // array
}
