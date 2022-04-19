class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(value) {
        if (value < 0) {
            value = 0;
        } else {
            if (value > 100) {
                value = 100;
            }
        }
        this._state = value;
    }

    fix() {
        this.state = this.state * 1.5;
    }
    
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
       super(author, name, releaseDate, pagesCount);
       this.type = 'fantastic';
   }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name,books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type,value) {
        for (let i in this.books) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let tempbook;
        for (let i in this.books) {
            if (this.books[i].name === bookName) {
                tempbook = this.books[i];
                this.books.splice(i, 1); 
                return tempbook;
            }
        }
        return null;
    }
}

//=== Student ================================================
class Student {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = [];
    }
    
    addMark (mark, subject) {
        if (mark < 1 || mark > 5) {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        } else {
            this.marks.push([mark,subject]);
        }
    }

    getAverageBySubject(subject) {
        let sumMarks = 0;
        let countMarks = 0;
        for (let i in this.marks) {
            if (this.marks[i][1]===subject) {
                sumMarks += this.marks[i][0];
                countMarks ++ ;
            }
        }
        if (countMarks===0) {
            console.log("Несуществующий предмет");
            return null;
        } else {
            console.log("Средний балл по предмету " + subject + " " + (sumMarks / countMarks));
            return sumMarks / countMarks;
        }
    }

    getAverage() {
        let sumMarks = 0;
        for (let i in this.marks) {
            sumMarks += this.marks[i][0];
        }
        console.log("Средний балл по всем предметам " + (sumMarks / this.marks.length));
        return sumMarks / this.marks.length;
    }

    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    }
}


