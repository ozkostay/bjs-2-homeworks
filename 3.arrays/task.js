function compareArrays(arr1, arr2) {
  let result;
  let i = 0;
  let comparison;
  if (arr1.length != arr2.length) {
    return false;
  }
  result = arr1.every( function(elemArr1) {
    comparison = (elemArr1===arr2[i]);
    i++;
    return comparison;
  });
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}
