// Repeating some basic JS from codewars

// Solution for the first basic task

function helloWorld() {
  var str = "Hello World"
  console.log(str)
}

// Solution for the second basic task

var v1 = 50
;(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250)
function equal1() {
  var a = v1
  var b = v1
  return a + b
}
//Please refer to the example above to complete the following functions
function equal2() {
  var a = v3 //set number value to a
  var b = v1 //set number value to b
  return a - b
}
function equal3() {
  var a = v5 //set number value to a
  var b = v1 //set number value to b
  return a * b
}
function equal4() {
  var a = v4 //set number value to a
  var b = v5 //set number value to b
  return a / b
}
function equal5() {
  var a = v6 //set number value to a
  var b = v3 //set number value to b
  return a % b
}

// Solution for the third basic task

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n"
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no"
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no"
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes"
}

// Solution for the fourth basic task

function getLength(arr) {
  //return length of arr
  return arr.length
}

function getFirst(arr) {
  //return the first element of arr
  return arr[0]
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr) {
  var el = 1
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr) {
  //pop an element from arr
  arr.pop()
  return arr
}

// Solution for the fifth basic task

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

// Solution for the sixth basic task

function trueOrFalse(val) {
  if (val == false || val == undefined) return "false"
  else return "true"
}

// Solution for the seventh basic task

function saleHotdogs(n) {
  return n <= 4 ? n * 100 : n <= 9 ? n * 95 : n * 90
}

// Solution for the eighth basic task

function howManydays(month) {
  var days
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31
      break
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break
    case 2:
      days = 28
      break
  }
  return days
}

// Solution for the nineth basic task

function padIt(str, n) {
  var a = 0
  do {
    a++
    if (a % 2) {
      str = "*" + str
    } else {
      str = str + "*"
    }
  } while (a <= n)
  return str
}

// Solution for the tenth basic task

function pickIt(arr) {
  var odd = [],
    even = []
  //coding here
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      odd.push(arr[i])
    } else even.push(arr[i])
  }
  return [odd, even]
}

// Solution for the eleventh basic task

function grabDoll(dolls) {
  var bag = []
  //coding here

  for (var i = 0; i < dolls.length; i++) {
    if (bag.length === 3) break
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i])
    } else {
      continue
    }
  }

  return bag
}

// Solution for the twelfth basic task

function giveMeFive(obj) {
  //coding here
  var five = []
  for (var i in obj) {
    if (i.length === 5) {
      five.push(i)
    }
    if (obj.i.length === 5) {
      five.push(obj.i)
    }
  }
  return five
}
