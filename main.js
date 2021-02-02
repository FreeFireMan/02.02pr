/* #1 Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true». За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean. */
let str = 'Hello';
let num = 123;
let flag = true;
let txt = 'true';
console.log(str, typeof(str));
console.log(num, typeof(num));
console.log(flag, typeof(flag));
console.log(txt, typeof(txt));

/* #2 Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа: 32, 12, 65, 90, 87 */
let a1 = 16;
let a2 = 2;
let a3 = 10;
let a4 = 7;
let a5 = 31
console.log(a1 * a2);
console.log(a2 + a3);
console.log(a5 * a2 + a3 - a4);
console.log(a3 * a4 + a3 * a2);
console.log(a1 / a2 * a3 + a4);

/* #3 Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів: 5 % 3, 3 % 5, 5 + '3','5' - 3, 75 + 'кг' */
let a6 = 5 % 3;
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
document.write('<hr>');

/* #4 Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width). Значееня площі зберігати в змінній s. */
let height = 23;
let width = 10;
let s = height * width;
document.write('<hr>');
document.write(s);
document.write('<hr>');

/* #5 Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v. */
let heightC = 10;
let dC = 4;
let v = Math.round(Math.PI * Math.pow((dC / 2), 2) * heightC);
document.write('<hr>');
document.write(v);
document.write('<hr>');

/* #6 У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).*/
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
document.write('<hr>');
document.write(k);
document.write('<hr>');