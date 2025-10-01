function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);
// 1 - Mango
// 2 - Poly
// 3 - Ajax

// Завдання 2

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice('Hello world JS', 10)); // 30

// Завдання 3

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// Завдання 4

function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
}

console.log(formatString("Short string"));
console.log(
  formatString("Це дуже довгий рядок який точно перевищує сорок символів")
);

// Завдання 5

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

console.log(checkForSpam('Get best SALE offer')); // true
console.log(checkForSpam('Hello world'));         // false

// Завдання 6

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число (або натисніть Cancel для завершення)");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(number);
}

for (const num of numbers) {
  total += num;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
}

// Завдання 7

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }
  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
}


const logins = ['Mango', 'Poly', 'Ajax'];

console.log(addLogin(logins, 'Kiwi'));   // Логін успішно доданий!
console.log(addLogin(logins, 'Poly'));   // Такий логін уже використовується!
console.log(addLogin(logins, 'Al'));     // Помилка! Логін повинен бути від 4 до 16 символів

