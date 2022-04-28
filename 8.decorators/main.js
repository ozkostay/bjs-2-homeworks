// const addThree = (a, b, c) => (a + b + c); 
// const upgradedAddThree = cachingDecoratorNew(addThree);
// upgradedAddThree(1, 2, 3); 
// upgradedAddThree(1, 2, 3); 
// upgradedAddThree(2, 2, 3); 
// upgradedAddThree(3, 2, 3); 
// upgradedAddThree(4, 2, 3); 
// upgradedAddThree(5, 2, 3); 
// upgradedAddThree(6, 2, 3); 
// upgradedAddThree(1, 2, 3); 

// const sendSignal = () => console.log("Сигнал отправлен");
// const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
// setTimeout(upgradedSendSignal); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
// setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
// setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (600 < 2000)
// setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
// setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
// setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

console.log('=== 111 =====================');
function decorator (func) {
    console.log(func);
    console.log('=== 222 =====================');
    function wrapper (...args) {
        console.log('=== 333 =====================');
        console.log('Аргументы: ' + args);
        return func(...args);
    }
    console.log('=== 444 =====================');
    return wrapper;
}

console.log('=== 777 =====================');
const add = (a,b) => a + b;
const upgradedAdd = decorator(add);
let res1 = upgradedAdd(10,20);
console.log(res1);

console.log('=== 888 =====================');
const mult = (a,b,c) => a * b *c;
const upgradedMult = decorator(mult);
let res2 = upgradedMult(2,3,5);
console.log(res2);

console.log('=== 10 =====================');

const arr1 = [12,'23','34',45];
console.log(arr1);
const [n1, n2, n3, n4] = arr1;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

const obj2 = {ac1: 312, ac2: '323', ac3: '334', ac4: 345};
console.log(obj2);
//const {ac1, ...aaa} = obj2;
const {...aaa} = obj2;
//console.log(ac1);
obj2.ac1 =333;
console.log(obj2);
console.log(aaa);
// console.log(ac3);
// console.log(ac4);
console.log('1========== 33');

function getAge({...aaa}) {
    console.log(aaa);
    console.log(aaa.age);
}
let user1 = {age: 18};
getAge(user1);