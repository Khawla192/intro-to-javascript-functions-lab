const maxOfTwoNumbers = (num1, num2) => {
    if (num1 >= num2) {
      return num1;
    } else {
      return num2;
    }
  }
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

function isAdult(age) {
    if (age >= 18) {
        console.log('Adult')
    } else {
        console.log('Minor')
    }
}
console.log('Exercise 2 Result:', isAdult(21));

function isCharAVowel(singleChar) {
    if (singleChar === 'a' || singleChar === 'e' || singleChar === 'i' || singleChar === 'o' || singleChar === 'u') {
        return true
    } else {
        return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

function generateEmail(name, domain) {
    return `${name}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

function greetUser(name, time) {
    if (time === 'morning') {
        return ` Good ${time}, ${name}!`
    }else if (time === 'afternoon') {
        return ` Good ${time}, ${name}!`
    }else if (time === 'evening') {
        return ` Good ${time}, ${name}!`
    }
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1
    }else if (num2 >= num1 && num2 >= num3) {
        return num2
    }else {
        return num3
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

function calculateTip(billAmount, tipPercent) {
    return billAmount*(tipPercent / 100)
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

function convertTemperature(temperature, scale ) {
    if (scale === 'C'){
        return temperature * (9/5) + 32 + '\tF'
    }
    else if (scale === 'F') {
        return (temperature - 32) * (5/9) + '\tC'
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2
    }else if (operation === 'subtract') {
        return num1 - num2
    }else if (operation === 'multiply') {
        return num1 * num2
    }else if (operation === 'divide') {
        return num1 / num2
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

function calculateGrade(grade) {
    if (grade < 100 && grade >= 90){
        return 'A'
    }else if (grade < 90 && grade >= 80){
        return 'B'
    }else if (grade < 80 && grade >= 70){
        return 'C'
    }else if (grade < 70 && grade >= 60){
        return 'D'
    }else if (grade < 60 && grade >= 0){
        return 'F'
    }else {
        return 'The grade must be from 0 to 100'
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));

function createUsername(firstName, lastName) {
    let count = firstName.length + lastName.length
    return `${firstName.slice(0, 3)}${lastName.slice(0, 3)}${count}`
}
console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

function numArgs(num1, num2, num3, num4) {
    return arguments.length
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));