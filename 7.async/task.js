class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(time,callback,id) {
        console.log("add ==================");
        if ( !id ) {
           console.log('id не был передан как параметр');
           throw new Error('id не был передан как параметр');
        }
        //console.log('1-1-1');
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
        //console.log('2-2-2');
        //console.log(this.alarmCollection);
        this.alarmCollection.push(
            {
                time: time,
                callback: callback,
                id: id,
            }
        );
    }

    removeClock(id) {
        console.log('find index');
        if ( this.alarmCollection.every( (arr) => {
            if ( arr.id === id ) {
                return false;
            }
            return true;
           })
        ) {
            console.error('id = ' + id + ' уже существует!!!');
            return;
        }
    }

}