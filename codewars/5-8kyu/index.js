// Array.diff 6 kyu

function arrayDiff(a, b) {
  let newA = [...a];
  if ((b.length === 0) | (a.length === 0)) return a;
  for (i in b) {
    newA = newA.filter((value) => {
      return value !== b[i];
    });
  }
  return newA;
}

function array_diff2(a, b) {
  return a.filter((e) => !b.includes(e));
}

// Find The Parity Outlier 6 kyu

function findOutlier(integers) {
  const newIEven = integers.filter((element) => element % 2 === 0);
  const newIOdd = integers.filter((element) => element % 2);
  return newIOdd.length > newIEven.length ? newIEven[0] : newIOdd[0];
}

// Convert string to camel case 6 kyu

function toCamelCase(str) {
  let string = str;
  for (let i = 0; i < string.length; i++)
    if ((string[i] == "-") | (string[i] == "_")) {
      string =
        string.substring(0, i) +
        string[i + 1].toUpperCase() +
        string.substring(i + 2);
    }
  return string;
}

// Bit Counting 6 kyu

var countBits = function (n) {
  return n.toString(2).split("1").length - 1;
};

// Persistent Bugger. 6 kyu

function persistence(num) {
  let number = num;
  let counter = 0;
  number = number.toString().split("");
  if (number.length == 1) return counter;
  do {
    number = number.reduce((prevValue, curValue) => {
      return prevValue * curValue;
    }, 1);
    number = number.toString().split("");
    counter++;
  } while (number.length > 1);
  return counter;
}

function persistence2(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((prevValue, curValue) => prevValue * curValue);
  }
  return i;
}

// Create Phone Number 6 kyu

function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  numbers = `(${numbers.substring(0, 3)}) ${numbers.substring(
    3,
    6
  )}-${numbers.substring(6)}`;
  return numbers;
}

// Directions Reduction 5 kyu

function dirReduc(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST")
    ) {
      i++;
    } else {
      if (
        (result[result.length - 1] === "NORTH" && arr[i] === "SOUTH") ||
        (result[result.length - 1] === "SOUTH" && arr[i] === "NORTH") ||
        (result[result.length - 1] === "EAST" && arr[i] === "WEST") ||
        (result[result.length - 1] === "WEST" && arr[i] === "EAST")
      ) {
        result.pop();
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
