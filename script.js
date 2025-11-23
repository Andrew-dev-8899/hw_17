//Задача 1.
let greeting = `true`
let myVariable = false
let number = 17
let undefinedVar = undefined
let nullVar = null

console.log(typeof greeting)
console.log(typeof myVariable)
console.log(typeof number)
console.log(typeof undefinedVar)
console.log(typeof nullVar)

//Задача 2.
let height = 15
let width = 20

if (height > width) {
  console.log(height);
} else {
  console.log(width);
}


//Задача 3.
for (let i = 1; i<=20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
//% (оператор модуля): 
// Вычисляет остаток от деления. 

//Задача 4.

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = (key && documents && pen) || (orange);
console.log(shouldGoToWork)



//Задача 5.
//let myNumber = prompt("Введите число:")
//myNumber = parseInt(myNumber)

//if (myNumber % 3 === 0 && myNumber % 5 === 0) {
  //console.log("FizBuz")
//} else if (myNumber % 3 === 0) {
  //console.log("Buz")
//} else if (myNumber % 5 === 0) {
  //console.log("Fiz")
//}

//Задача 6.
//let youAge = prompt("Запросить возраст:")

//if  (youAge >= 16 && youAge < 18) {
   //console.log("Можушь выкурить сигарету, только маме не говори") 
     //} else if (youAge < 18) {
    //console.log("Пей колу")
//} else if (youAge >= 18) {
//console.log("Попей пивка")
//}

//Задача 7.
//let youTur = prompt("Запросить сторону света:")

//switch (youTur) {
  //case 'юг':
    //console.log('на юг пойдешь счастье найдешь')
    //break
  //case 'север':
    //console.log('на север пойдешь много денег найдешь')
    //break;
  //case 'запад':
    //console.log('на запад пойдешь верного друга найдешь')
    //break;
    //case 'восток':
    //console.log('на восток пойдешь разработчиком станешь')
    //break;
  //default:
    //console.log('попробовать ещё раз')
//}

//Продвинутый уровень.
//Задача 1.

//let userNameInput = 'пОлИнА нАбЕрЕжНаЯ'
//function formatName(nameString) {
  //let lowerCaseName = nameString.toLowerCase()
   // let words = lowerCaseName.split(' ')
   // for (let i = 0; i < words.length; i++) {
   // words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
 // }
    //let formattedName = words.join(' ')
 // return formattedName
//}
//let correctedName = formatName(userNameInput)
//alert(`Привет, ${correctedName}!`)

//Задача 2.

//let result = parseFloat(prompt("Введите число:"))
//let formula = result.toString()

//while (true) {
    //let operation = prompt("Выберите операцию: '+' (прибавить), '-' (отнять), '*' (умножить), '/' (разделить) или 'равно' для завершения.")
    //if (operation === null || operation.toLowerCase() === 'равно') {
      //  break
    //}

   // let number = parseFloat(prompt(`Введите число для ${operation}:`))
    //if (isNaN(number)) {
      //  alert("Некорректное число. Попробуйте снова.")
       // continue;
    //}

    //if (operation === '+') {
       // result += number
        //formula += ` + ${number}`
    //} else if (operation === '-') {
       // result -= number
       // formula += ` - ${number}`
    //} else if (operation === '*') {
       // result *= number
       // formula += ` * ${number}`
    //} else if (operation === '/') {
       // if (number === 0) {
          //  alert("Деление на ноль невозможно. Попробуйте снова.")
          //  continue
        //}
        //result /= number
        //formula += ` / ${number}`
    //} else {
       // alert("Некорректная операция. Попробуйте снова.")
       // continue
    //}
    //alert(`Формула: ${formula} = ${result}`)
//}

//Задача 3.

for (let i = 1; i <= 6; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '#';
  }
  console.log(row);
}

