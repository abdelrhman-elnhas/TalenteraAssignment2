// function called all that accepts an array and a callback
function all(arr, check) {
  // iterator that iterates over the array elements
  for (var i = 0; arr.length > i; i++) {
    // checks whether the array meets the condition of the callback
    if (!check(arr[i])) {
      return false; // if not at any element it returns false
    }
    return true; // if no element within the array makes a conflict it return true
  }
}
