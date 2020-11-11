// 1. Deklariraj promenlivi od site primitivni tipovi

let user = 'Daniela';
let age = 23;
let year = undefined;
let message = true;
let test = null;


// 2.Ispecati gi soodvetno vrednostite i tipovite

console.log(user + ' ' + typeof(user));
console.log(age + ' ' + typeof(age));
console.log(year + ' ' + typeof(year));
console.log(message + ' ' + typeof(message));
console.log(test + ' ' +typeof(test));

//3. Promeni ja vrednosta na nekoja od promenlivite
message = false;

//4. Kreiraj konstanta i obidi se da i dodelis nova vrednost.

/* Pokazuva error , kodot ke prestane da se izvrusuva 
 ex.
  const test = 'Hello World';
  test='Hi World';
*/


//5.Deklariraj promenlivi i upotrebi gi aritmetickite operatori 

let x = 10
let y = 20

console.log(x + y);
console.log(x - y);
console.log(y / x);
console.log(x * y);
console.log(y % x);
console.log(x++);
console.log(x--);

//6. Deklariraj promenlivi i upotrebi gi operatorite za sporedba

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

//7. Deklariraj promenlivi i upotrebi gi logickite operatori

console.log(x < y && x <= 10);
console.log(x < y || x < 1);
console.log (x < y && x <0);