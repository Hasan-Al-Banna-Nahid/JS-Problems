// Problem 1
const reverseString = (str) => {
  let reverse = "";
  for (let x = str.length - 1; x >= 0; x--) {
    reverse += str[x];
  }
  return reverse;
};

console.log(reverseString("Hello World"));
// Problem 2
const sumOfPositiveNumber = (PositiveNumberArray) => {
  let sum = 0;
  let positive = PositiveNumberArray.filter((x) => x > 0);
  for (let x of positive) {
    sum = sum + x;
  }

  return sum;
};

console.log(sumOfPositiveNumber([2, -5, 10, -3, 7]));
// Problem 3
function findMostFrequentElement(arr) {
  const frequencyMap = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  }

  let mostFrequentElement;
  let maxFrequency = 0;
  for (const element in frequencyMap) {
    if (frequencyMap[element] > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequencyMap[element];
    }
  }

  return mostFrequentElement;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(findMostFrequentElement(array));
// Problem 4
function findTwoNumbersWithSum(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const sortedArray = [[1, 3, 6, 8, 11, 15]];
const targetSum = 10;
console.log(findTwoNumbersWithSum(sortedArray, targetSum));
// Problem 5
function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Problem 6
function romanToInteger(romanNumeral) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbol = romanNumeral[i];
    const currentValue = romanValues[currentSymbol];
    const nextSymbol = romanNumeral[i + 1];
    const nextValue = romanValues[nextSymbol];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
}

console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("MCMXCIV"));

// Problem 7
function findSecondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

const numbers = [4, 8, 2, 7, 1, 6, 3, 5];
console.log(findSecondSmallest(numbers));

//   Problem 8
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error(
        "Invalid operator. Supported operators are +, -, *, and /."
      );
  }
}

const num1 = 10;
const operator = "*";
const num2 = 5;

const result = calculate(num1, operator, num2);
console.log(result);

