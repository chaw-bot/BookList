// call elements
const list = document.querySelector('.list'),
      author = document.querySelector('.author'),
      title = document.querySelector('.title'),
      addBtn = document.querySelector('.addBtn');

// get value from input
const authorName = author.value,
      titleName = title.value;

// list item
const li = document.createElement('li');
li.className = 'item';

// remove button
li.innerHTML = `<input type="submit" value="remove" class="remove">`;

// library
let library = [];

