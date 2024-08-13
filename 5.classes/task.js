//задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.type = null;
		this.state = 100;
	}

	fix() {
		this.state *= 1.5;
		if (this.state > 100) {
			this.state = 100;
		}
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

//задача 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const findedByParamBook = this.books.find(item => item[type] === value)
		return !!findedByParamBook ? findedByParamBook : null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName );
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		}
		return null;
	}
}

const library = new Library("Городская библиотека");

const novel = new NovelBook("Бернар Вербер", "День Муравья", 1992, 480);
const magazine = new Magazine("Авторевю", 2024, 150);
library.addBook(novel);
library.addBook(magazine);

const bookOf1964Year = library.findBookBy('releaseDate', 1992);
if (!bookOf1964Year) {
	const newBookOf1964Year = new Book("Уильям Голдинг", "Шпиль", 1964, 256);
	library.addBook(newBookOf1964Year);
}


const givenBook = library.giveBookByName("День Муравья");
givenBook.state = 10;

givenBook.fix();

library.addBook(givenBook);