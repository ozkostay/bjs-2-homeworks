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
        console.log("add ==========");
        console.log(book.state);
        if (book.state > 30) {
            this.books.push(book);
        }
        console.log(this.books);
        console.log("add end ==========");
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
                console.log("Выдача ============");
                console.log(tempbook);
                tempbook = this.books[i];
                this.books.splice(i, 1); 
                console.log(tempbook);
                console.log("Выдача ");
                return tempbook;
            }
        }
        console.log("nulllllllllllllllllllllllll");
        return null;
    }
}