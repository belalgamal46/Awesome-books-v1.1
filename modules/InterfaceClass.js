import Books from './BookClass.js';

const booksContainer = document.querySelector('.books-container');
const bookForm = document.querySelector('#bookForm');

class Interface {
  static displayBooks = () => {
    const books = Books.getBooks();

    booksContainer.innerHTML = '';

    books.forEach((book) => Interface.addBookToInterface(book));
  };

  static addBookToInterface = (book) => {
    booksContainer.innerHTML += `
    <div class="book-card" id=${book.bookId}>
      <div class="book-details">
        <p>"${book.bookTitle}"</p>
        <p> by </p>
        <p>${book.authorName}</p>
      </div>
      <button type="button" id="remove-book">Remove</button>
    </div>
    `;
  };

  static removeBookFromInterface = (book) => {
    if (book.id === 'remove-book') {
      book.parentElement.remove();
    }
  };

  static clearInputs = () => {
    bookForm.reset();
  };
}

export default Interface;
