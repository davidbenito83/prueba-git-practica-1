var number = 5; // NO SE USA NUNCA (O BUENO, CASI NUNCA)
let string = "1";
const boolean = true;

if (number === 5) {
  var number = 10;
  console.log("number dentro del condicional", number);

  let string = "5";
  console.log("String dentro del condicional", string);

  const boolean = false;

  console.log(boolean); // false
}

string = "un numero cualquiera";
number = 10000;

console.log("boolean", boolean); // true

console.log("number fuera del condicional", number); // 10
console.log("String fuera del condicional", string); // 1
