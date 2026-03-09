const removeFromArray = function (arr, ...itemsToRemove) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First Parameters must be arrays");
  }

  let filteredArray = arr.filter((item) => !itemsToRemove.includes(item));
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
