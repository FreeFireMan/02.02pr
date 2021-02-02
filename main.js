/* #1 Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true». За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean. */
/* let str = 'Hello';
let num = 123;
let flag = true;
let txt = 'true';
console.log(str, typeof(str));
console.log(num, typeof(num));
console.log(flag, typeof(flag));
console.log(txt, typeof(txt)); */

/* #2 Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа: 32, 12, 65, 90, 87 */
/* let a1 = 16;
let a2 = 2;
let a3 = 10;
let a4 = 7;
let a5 = 31
console.log(a1 * a2);
console.log(a2 + a3);
console.log(a5 * a2 + a3 - a4);
console.log(a3 * a4 + a3 * a2);
console.log(a1 / a2 * a3 + a4); */

/* #3 Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів: 5 % 3, 3 % 5, 5 + '3','5' - 3, 75 + 'кг' */
/* let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
document.write(a6);
document.write('<hr>');
document.write(a7);
document.write('<hr>');
document.write(a8);
document.write('<hr>');
document.write(a9);
document.write('<hr>');
document.write(a10);
document.write('<hr>'); */

/* #4 Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width). Значееня площі зберігати в змінній s. */
/* let height = 23;
let width = 10;
let s = height * width;
document.write('<hr>');
document.write(s);
document.write('<hr>'); */

/* #5 Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v. */
/* let heightC = 10;
let dC = 4;
let v = Math.round(Math.PI * Math.pow((dC / 2), 2) * heightC);
document.write('<hr>');
document.write(v);
document.write('<hr>'); */

/* #6 У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).*/
/* let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
document.write('<hr>');
document.write(k);
document.write('<hr>'); */

/* #7 Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log */
/* let str = 'Hello world';
document.write(str);
alert(str);
console.log(str); */

/* #8 Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).*/
/* let name = 'Nataliia';
let age = 24;
let hobby = 'programming';
alert(name + '\n' + age + '\n' + hobby); */

/* #9 Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation. Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’ Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3. Вывести в документ содержимое переменной concatenation спомощью document.write */
/* let str1 = 'Кто';
let str2 = 'ты';
let str3 = 'такой?';
let concatenation = str1 + ' ' + str2 + ' ' + str3;
document.write(concatenation); */

/* #10 Какие значения выведет в окно браузера следующий фрагмент кода?  и почему? */
/* let str = "20";
let a = 5;
document.write(str + a + "<br/>"); // 205
document.write(str - a + "<br/>"); // 15
document.write(str * "2" + "<br/>"); // 40
document.write(str / 2 + "<br/>"); // 10 */

/* #11 Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log? */
/* console.log(parseInt("3.14")); // 3.14
console.log(parseInt("-7.875")); // -7
console.log(parseInt("435")); // 435
console.log(parseInt("Вася")); // NaN */

/* #12 С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже */
/* let str = prompt("Enter something", "ho-ho")
console.log(str); */

/* #13 С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert */
/* let num1 = prompt('Enter the number:');
let num2 = prompt('Enter the number:');
alert(parseInt(num1) + parseInt(num2)); */

/* #14 С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert */
/* let name = prompt('Enter your name:');
let surname = prompt('Enter your surname:');
let age = prompt('Enter you age:');
alert('Доброго вечера ' + name + ' ' + surname + ', мои поздравления что вам ' + age + '!'); */

/* #1ДОП Три різних числа вводяться через prompt(). За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню) */
/*let num1 = prompt('Enter the number:');
let num2 = prompt('Enter the number:');
let num3 = prompt('Enter the number:');

if (num1 < num2 && num1 < num3) {
    (num2 < num3)
    ? console.log(num1,num2,num3)
    : console.log(num1,num3,num2);
} else if (num1 > num2 && num2 < num3) {
    (num1 < num3)
    ? console.log(num2, num1, num3)
    : console.log(num2,num3,num1);
} else if (num1 > num3 && num2 > num3) {
    (num1 < num2)
    ? console.log(num3, num1, num2)
    : console.log(num3, num2, num1);
} */

/* #2ДОП Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести "делай что хочешь"! */
/* let str = prompt('Введите цвет: зеленый, желтый, красный');
if (str === 'зеленый') {
    document.write('иди');
} else if (str === 'желтый') {
    document.write('подожди');
} else if (str === 'красный') {
    document.write('стой');
} else {
    document.write('делай что хочешь');
} */

/* #3ДОП */