// тут вы можете вызывать функции из task.js
let phoneAlarm = new AlarmClock();
console.log("111- ----");
phoneAlarm.addClock("09:00",() => console.log('Пора вставать'), 1);
console.log("222- ----");
phoneAlarm.addClock("09:01",() => console.log('И всё-таки Пора вставать!!!'), 2);
console.log("333- ----");
phoneAlarm.addClock("09:02",() => console.log('Завтрак'), 3);

console.log(phoneAlarm);
//phoneAlarm.alarmCollection[0].callback();
//phoneAlarm.alarmCollection[1].callback();

phoneAlarm.removeClock(2);