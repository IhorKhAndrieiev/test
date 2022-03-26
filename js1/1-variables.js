/*
 * Оголошення
 * Оголосити дві змінні без ініціалізації – одну міняти не можна буде, іншу можна
 * Присвоїти їм будь-які значення
 * https://youtu.be/77rs0_BResw
 */

const variable1 = 5;
console.log('variable1 -', variable1);//5
let variable_2;
console.log('variable_2 -', variable_2); //undefined 

let variable2 = 0;
console.log('variable2 -', variable2); //0
variable2 = 10;
console.log('variable2 -', variable2); //10
variable2 = 'Hello';

console.log('variable1 -', variable1); //5
console.log('variable2 -', variable2); //Hello

// /////////////////////////////////////////////////////////

/*
 * Зміна
 * Спробувати змінити значення оголошених вище змінних
 */

// console.log('variable1 -', variable1);
// console.log('variable2 -', variable2);

// /////////////////////////////////////////////////////////

/*
 * Повторне оголошення
 * Оголосити дві змінні з однаковим ім'ям (let/const), але різними значеннями
 */

// let variable1 = 66;

// console.log('variable1 -', variable1); // Uncaught SyntaxError: Identifier 'variable1' has already been declared
// console.log('variable2 -', variable2);


/* АВТОПЕРЕВІРКА
 *
 * ЗАВДАННЯ 1/36
 * 
 * ОГОЛОШЕННЯ ЗМІННИХ
 * 
 * ТЕОРІЯ
 * Змінні використовуються для зберігання даних. У кожної змінної є ідентифікатор (назва змінної). Значення кожної змінної зберігається в оперативній пам'яті.

Змінну можна уявити як коробку з написом (ім'я змінної), в якій щось знаходиться (значення змінної).
 * <ключове слово> <назва змінної> = <значення>
 *Оголошення змінної починається з ключового слова const. Така змінна має бути одразу ініціалізована початковим значенням, і такій змінній не можна надати інше значення після її ініціалізації.
 * Увага
Створення змінної без ключового слова const призведе до помилки.
 * const age = 20;
const userName = "Mango";
const socialProfileTag = "@gluck";
const totalWorkerSalary = 4052;
 *В JavaScript назва змінної записується в camelCase-нотації. Перше слово пишеться маленькими буквами, а кожне наступне починається з великої. Назви змінних чутливі до регістру, тобто user, usEr і User - це різні змінні.
 *
 * ЗАВДАННЯ
 * 
 * Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:

назва - рядок "Droid";
ціна за штуку - число 2000.
 *  
 *ТЕСТИ
 * 
 * Оголошена змінна productName
Значення змінної productName - це рядок "Droid"
Оголошена змінна pricePerItem
Значення змінної pricePerItem - це число 2000
 * 
 * 
 */

// Change code below this line
console.log('ЗАВДАННЯ 1/36');

const productName = 'Droid';
console.log('productName', productName);// 'Droid'

const pricePerItem = 2000;
console.log('pricePerItem', pricePerItem);// 2000

/*
 * ЗАВДАННЯ 2/36
 * 
 * ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЗМІННОЇ
 * 
 * ТЕОРІЯ
 * Для того щоб оголосити змінну, якій у майбутньому можна буде присвоїти нове значення, використовується ключове слово let. Створення змінної без ключового слова let або const призведе до помилки.
 * let age = 5;
age = 10;

let username = "Mango";
username = "Poly";
 * Спроба звернутися до змінної за ім'ям до її оголошення, викличе помилку.

Наприклад, не можна намагатися прочитати або змінити значення змінної до її оголошення:
 * Наприклад, не можна намагатися прочитати або змінити значення змінної до її оголошення:
 * // ❌ Неправильно, буде помилка
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// Оголошення змінної age
let age = 20;

// ✅ Правильно, звертаємося після оголошення
age = 25;
console.log(age); // 25
 * 
 * ЗАВДАННЯ
 * 
 * Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.
 * 
 * ТЕСТИ
 * 
 * Змінна pricePerItem оголошена за допомогою let
При оголошенні змінної pricePerItem присвоєно значення — число 2000
Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
Змінна productName оголошена за допомогою let
При оголошенні змінної productName присвоєно значення — рядок "Droid"
Змінній productName присвоєно нове значення — рядок "Repair droid"
 * 
 */
console.log('ЗАВДАННЯ 2/36');
let productName1 = "Droid";
console.log('productName1 - ', productName1);
let pricePerItem1 = 2000;
console.log('pricePerItem1 - ', pricePerItem1);
// Change code below this line
productName1 = "Repair droid";
console.log('productName1 - ', productName1);
pricePerItem1 = 3500;
console.log('pricePerItem1 - ', pricePerItem1);

/*
 * ЗАВДАННЯ 3/36
 * 
 * 2-types.js
 * 
 * 
 */