////Abstraer repeticion
for (let i = 0; i < 10; i++) {
  console.log(i);
}

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
repeatLog(5);

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);

let num = "58";
repeat(3, () => {
  num = "0" + num;
});
console.log(num);

////Funciones que crean una nueva funcion
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


////Functiones que cambian otras funciones
function logCall(func) {
  return (param) => {
    console.log("calling with", param);
    let result = func(param);
    console.log("called with", param, ", returned", result);
    return result;
  };
}
logCall(greaterThan10)(9);


////Funciones que cambien el flujo
function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even