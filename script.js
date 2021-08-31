// call elements
const list = document.querySelector('.list'),
      author = document.querySelector('.author'),
      title = document.querySelector('.bookTitle'),
      addBtn = document.querySelector('.addBtn');

// library
let library = [];

// Create remove button
const btn = document.createElement('a');
btn.className = 'removeBtn';
btn.innerHTML = '<input type="submit" value="remove" class="remove">';

allEventListeners();

// event listener
function allEventListeners() {
  document.addEventListener('DOMContentLoaded', showBooks);
  addBtn.addEventListener('click', addBook);
  btn.addEventListener('click', removeBook);
}

function showBooks() {
  if(localStorage.getItem('Library') === null) {
    library;
  } else {
    library = JSON.parse(localStorage.getItem('Library'));
  }

  library.forEach(add());
}

// some function
function add() {
  // book details
  book = {
    title: title.value,
    author: author.value
  }

  // list item
  const li = document.createElement('li');
  li.className = 'item';

  // get values
  li.innerHTML = `&nbsp;"${book.title}"&nbsp;by&nbsp;&nbsp;${book.author}&nbsp;&nbsp;`;

  // Append linkt to li
  li.appendChild(btn);

  // Append li to ul
  list.appendChild(li);
}

// add book
function addBook(e) {
  add();
  library.push(book);

  // local storage
  let bookDetails = JSON.stringify(library);
  localStorage.setItem('Library', bookDetails);

  // clear input
  title.value = '';
  author.value = '';
  e.preventDefault();
}

// remove book
function removeBook(e) {
  if(e.target.parentElement.classList.contains('removeBtn')) {
    e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
}
