class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time,callback,id) {
        if ( !id ) {
           throw new Error('id не был передан как параметр');
        }
        
        if (this.alarmCollection.some( (element) => element.id === id)) {
            console.error('id = ' + id + ' уже существует!!!');
        } else {
            this.alarmCollection.push( {time, callback, id} );    
        }
    }

    removeClock(id) {
        let index;
        index = this.alarmCollection.findIndex(element => element.id === id);
        
        if (index !== null) {
            console.log('Удаляем будильник: ',id);
            this.alarmCollection.splice(index,1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        let date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
        return date;
    }

    start() {
        const checkClock = () => {
            let timeNow = this.getCurrentFormattedTime();
            console.log('Сейчас' + timeNow);
 
            this.alarmCollection.forEach( (element) => {
                console.log('время будильника: ' + element.time);
                if ( timeNow === element.time ) {
                    element.callback();
                    return false;
                }
                return true;
            });
        };

        if (!this.timerId) {
            this.timerId = setInterval( checkClock, 2000 );
        }
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        if (this.alarmCollection.length > 0) {
            console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
            this.alarmCollection.forEach(element => {
                console.log('Будильник №' + element.id + ' заведен на ' + element.time);
            });
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
        this.timerId = null;
    }
}