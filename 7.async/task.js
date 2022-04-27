class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time,callback,id) {
        if ( !id ) {
           throw new Error('id не был передан как параметр');
        }
        if ( !this.alarmCollection.every( (arr) => {
                if ( arr.id === id ) {
                    return false;
                }
                return true;
            })
        ) {
            console.error('id = ' + id + ' уже существует!!!');
            return;
        }
        this.alarmCollection.push(
            {
                time: time,
                callback: callback,
                id: id,
            }
        );
    }

    removeClock(id) {
        let index;
        this.alarmCollection.every( (arr, idx) => {
            if ( arr.id === id ) {
                index = idx;
                return false;
            }
            return true;
        });
        
        if (index !== null) {
            this.alarmCollection.splice(index,1);
        }

        if ( this.alarmCollection.length === 0 ) {
            this.timerId = null;
        }
    }

    getCurrentFormattedTime() {
        let date = new Date('December 25, 1995 09:02:30');
        //let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        hours = hours > 9 ? hours : "0" + hours;
        minutes = minutes > 9 ? minutes : "0" + minutes;
        return hours + ':' + minutes;
    }

    start() {
        const checkClock = () => {
            let timeNow = this.getCurrentFormattedTime();
            console.log('Сейчас' + timeNow);
            
            this.alarmCollection.every( (arr) => {
                console.log('время будильника: ' + arr.time);
                if ( timeNow === arr.time ) {
                    arr.callback();
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
        this.alarmCollection.length = 0;
        this.timerId = undefined;
    }
}