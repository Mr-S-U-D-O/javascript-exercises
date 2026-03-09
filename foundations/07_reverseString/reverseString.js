const reverseString = function (str) {
  // Validate input type
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }

  // Handle empty string
  if (str.length === 0) {
    return "";
  }

  // Spread into array, reverse, and join back
  return [...str].reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
