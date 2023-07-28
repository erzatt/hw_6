let input = document.getElementById('input');
let addBtn = document.getElementById('addBtn');
let list = document.getElementById('list');

addBtn.addEventListener('click', function() {
  let text = input.value.trim();
  
  if (text === '') {
    alert('Нельзя добавлять пустоту');
  } else {
    let li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
  }
});

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});