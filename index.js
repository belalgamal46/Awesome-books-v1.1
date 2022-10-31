import { Books, Interface, Date } from './modules/index.js';

const booksContainer = document.querySelector('.books-container');

const updateTime = () => {
  const dateTimeContainer = document.getElementById('time');
  const currentDate = Date.getCurrentDate();
  const currentTime = Date.getCurrentTime();
  dateTimeContainer.innerHTML = '';
  dateTimeContainer.innerHTML = `${currentDate}, ${currentTime}`;
};

// Event: Display books
document.addEventListener('DOMContentLoaded', () => {
  Interface.displayBooks();
});

// Event: add a book
const bookForm = document.getElementById('bookForm');

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const bookTitle = document.getElementById('book-title').value;
  const authorName = document.getElementById('author').value;

  const bookData = Books.getBooks();
  const id = bookData.length ? bookData[bookData.length - 1].bookId + 1 : 1;

  const book = new Books(bookTitle, authorName, id);

  Interface.addBookToInterface(book);
  Books.addBooks(book);
  Interface.clearInputs();
});

// Event: remove a book
booksContainer.addEventListener('click', (event) => {
  Interface.removeBookFromInterface(event.target);
  Books.removeBook(event.target);
});

// Event: Switch between pages
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelector('main').children;

navLinks.addEventListener('click', (event) => {
  Array.from(sections).forEach((section) => {
    if (event.target.classList.contains(section.id)) {
      section.classList.remove('hide');
      event.target.classList.add('highlight');
    } else {
      section.classList.add('hide');
      for (let i = 0; i < navLinks.children.length; i += 1) {
        if (navLinks.children[i].classList.contains(section.id)) {
          navLinks.children[i].classList.remove('highlight');
        }
      }
    }
  });
});

setTimeout(updateTime(), 1000);
