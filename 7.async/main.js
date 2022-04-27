// тут вы можете вызывать функции из task.js
let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("09:00", () => console.log('Пора вставать'), 1);
phoneAlarm.addClock("09:01", () => console.log('И всё-таки Пора вставать!!!'), 2);
phoneAlarm.addClock("09:02", () => console.log('Завтрак'), 3);

console.log(phoneAlarm);

phoneAlarm.alarmCollection[0].callback();
phoneAlarm.alarmCollection[1].callback();
phoneAlarm.alarmCollection[2].callback();

console.log(phoneAlarm.removeClock(2));

console.log(phoneAlarm);

console.log(phoneAlarm.getCurrentFormattedTime());

phoneAlarm.start();

function stopInterval() {
    //phoneAlarm.stop();
    phoneAlarm.clearAlarms();
    console.log(phoneAlarm);
}

setTimeout( stopInterval, 10000 );

phoneAlarm.printAlarms();



