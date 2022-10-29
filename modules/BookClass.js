class Books {
  constructor(bookTitle, authorName, bookId) {
    this.bookTitle = bookTitle;
    this.authorName = authorName;
    this.bookId = bookId;
  }

  static getBooks = () => {
    let books = null;
    if (localStorage.getItem('books') === null) {
      books = [];
      return books;
    }
    books = JSON.parse(localStorage.getItem('books'));

    return books;
  };

  static addBooks = (book) => {
    const books = Books.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  };

  static removeBook = (book) => {
    const books = Books.getBooks();

    if (book.id !== 'remove-book') {
      return;
    }

    books.forEach((bookItem, index) => {
      if (bookItem.bookId === parseInt(book.parentElement.id, 10)) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  };
}

export default Books;
