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

// Moving Zeros To The End 5 kyu

function moveZeros(arr) {
  const zeroStore = [];
  const newArr = arr.filter((v) => {
    if (v === 0) {
      zeroStore.push(0);
    } else return true;
  });
  return [...newArr, ...zeroStore];
}

// Pete, the baker 5 kyu

function cakes(recipe, available) {
  const counter = [];
  Object.keys(recipe).map((v) => {
    counter.push((available[v] | 0) / recipe[v]);
  });

  return Math.floor(counter.sort()[0]);
}

// Human Readable Time 5 kyu

function humanReadable(seconds) {
  const secs = seconds % 60 | "00";
  const minutes = Math.floor((seconds / 60) % 60) | "00";
  const hours = Math.floor(seconds / 3600) | "00";
  return `${
    hours ? (hours.toString().length === 2 ? hours : "0" + hours) : "00"
  }:${
    minutes ? (minutes.toString().length === 2 ? minutes : "0" + minutes) : "00"
  }:${secs ? (secs.toString().length === 2 ? secs : "0" + secs) : "00"}`;
}

// Sum of Digits / Digital Root 6 kyu

function digital_root(n) {
  let result = n;
  while (result > 9) {
    const numberArray = Array.from(result.toString()).map(Number);

    result = numberArray.reduce((a, b) => a + b, 0);
  }

  return result;
}

// Find the unique number 6 kyu

function findUniq(arr) {
  const arrSet = new Set(arr);
  let counter = {};

  arrSet.forEach((v) => (counter[v] = 0));

  arr.forEach((v) => (counter[v] += 1));

  const uniqueKey = Object.keys(counter).reduce((a, b) => {
    return counter[b] < counter[a] ? b : a;
  });

  return Number(uniqueKey);
}

function findUniq2(arr) {
  return arr.find((v) => arr.indexOf(v) === arr.lastIndexOf(v));
}

// Strip Comments 4 kyu

function solution(input, markers) {
  let result = input.split("\n");

  markers.forEach((v) => {
    result.forEach((u, i) => {
      if (u.indexOf(v) >= 0) {
        result[i] = u.substr(0, u.indexOf(v)).trim();
      }
    });
  });
  return result.join("\n");
}

console.log(
  "output:   " +
    solution(`apples, pears # and bananas\ngrapes\nbananas !apples`, ["#", "!"])
); // result should == "apples, pears\ngrapes\nbananas"
