// call elements
const list = document.querySelector('.list'),
      author = document.querySelector('.author'),
      title = document.querySelector('.bookTitle'),
      addBtn = document.querySelector('.addBtn');

// library
let library = [];

// add book
function addBook(e) {
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

  // Create new link element
  const btn = document.createElement('a');

  // Add class
  btn.className = 'remove';

  // Add button
  btn.innerHTML = '<input type="submit" value="remove" class="remove">';

  // Append linkt to li
  li.appendChild(btn);

  // Append li to ul
  list.appendChild(li);

  e.preventDefault();
}

// event listener
addBtn.addEventListener('click', addBook);
