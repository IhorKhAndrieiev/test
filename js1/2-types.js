/*
 * Визначення типу значення, оператор typeof
 * 1) Визначити тип примітиву у кожній змінній
 * 2) Що покаже оператор визначення типу typeof для кожної змінної?
 */

// const productName = ''; // "Mango" РЯДОК - СТРОКА
// const pricePerItem = 150; // 15.25 ЧИСЛО
// const isOnSale = false; // true БУЛЬ
// const error = null; //
// let quantity; //

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error);
// console.log(typeof quantity);
// console.log(typeof NaN);

/*
 * ЗАВДАННЯ 3/36
 * 
 * ТИПИ ПРИМІТИВІВ (ЧИСЛА, РЯДКИ, БУЛІ)
 * 
 * ТЕОРІЯ
 * В JavaScript змінна не асоціюється з будь-яким типом даних, тип є у її значення. Тобто змінна може зберігати значення різних типів.

Number - цілі числа і числа з плаваючою комою (крапкою).
String - рядки, послідовність від нуля або більше символів. Рядок починається і закінчується одинарною ' або подвійними лапками ".
Boolean - логічний тип даних, прапорці стану. Всього два значення: true і false. Наприклад, на питання, чи увімкнено світло в кімнаті, можна відповісти так (true) або ні (false).
 * 
 * // Числа
const age = 20;
const salary = 3710.84;

// Рядки
const name = "Mango";
const description = "JavaSript essentials";

// Булі
const isModalOpen = true;
const isLoggedIn = false;
 * 
 * ЗАВДАННЯ
 * 
 * Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

topSpeed - число 160.
distance - число 617.54.
login - рядок "mango935".
isOnline - буль true.
isAdmin - буль false.
 * 
 *  ТЕСТИ
 * 
 * Оголошена змінна topSpeed
Значення змінної topSpeed - це число 160
Оголошена змінна distance
Значення змінної distance - це число 617.54
Оголошена змінна login
Значення змінної login - це рядок "mango935"
Оголошена змінна isOnline
Значення змінної isOnline - це буль true
Оголошена змінна isAdmin
Значення змінної isAdmin - це буль false
 * 
 * 
 * 
 */

console.log('ЗАВДАННЯ 3/36');
// Change code below this line
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

/*
 * ЗАВДАННЯ 4/36
 * 
 * 4-operators.js
 * 
 * 
 */