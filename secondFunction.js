// function called contains that accepts a nested object and a value
function contains(obj, value) {
  // checks if the nested object is null or is not of type object
  if (typeof obj !== "object" || obj === null) {
    // if true it compares the object itself with the value without iterations
    return obj === value;
  }

  // looping over the keys of the nested object
  for (let key in obj) {
    // checks if this key is direct property of the object and contains the value at the end of the nesting (using recursion)
    if (obj.hasOwnProperty(key) && contains(obj[key], value)) {
      return true;
    }
  }
  return false;
}
