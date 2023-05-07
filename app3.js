// Selecting DOM elements
const addItemForm = document.querySelector('.add-item');
const itemList = document.querySelector('#to-do-list');
const deleteBtn = document.querySelector('#delete-btn');

// Adding a new item to the list
addItemForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Selecting input values
  const newItem = document.querySelector('#new-item').value;
  const newItemDate = document.querySelector('#new-item-date').value;
  const newItemTime = document.querySelector('#new-item-time').value;
  
  // Creating new DOM elements for the item
  const li = document.createElement('li');
  const div = document.createElement('div');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const dateSpan = document.createElement('span');
  const deleteButton = document.createElement('button');
  
  // Setting attributes for the elements
  li.setAttribute('data-item-id', Date.now());
  div.classList.add('item');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'item');
  label.setAttribute('for', li.getAttribute('data-item-id'));
  dateSpan.classList.add('item-date');
  deleteButton.classList.add('button_secondary');
  deleteButton.setAttribute('data-item-id', li.getAttribute('data-item-id'));
  
  // Setting text content for the elements
  label.textContent = newItem;
  dateSpan.textContent = `(${newItemDate})  (${newItemTime})`;
  deleteButton.textContent = 'Delete';
  
  // Appending elements to the DOM
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(dateSpan);
  div.appendChild(deleteButton);
  li.appendChild(div);
  itemList.appendChild(li);
  
  // Resetting the form
  addItemForm.reset();
});

// Deleting a selected item from the list
itemList.addEventListener('click', (event) => {
  if (event.target.matches('.button_secondary')) {
    const li = event.target.closest('li');
    itemList.removeChild(li);
  }
});

// Enabling the delete button when at least one item is selected
itemList.addEventListener('change', (event) => {
  const checkboxes = itemList.querySelectorAll('input[type="checkbox"]');
  let checkedCount = 0;
  
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });
  
  if (checkedCount > 0) {
    deleteBtn.removeAttribute('disabled');
  } else {
    deleteBtn.setAttribute('disabled', true);
  }
});

// Deleting all selected items from the list
deleteBtn.addEventListener('click', () => {
  const checkboxes = itemList.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const li = checkbox.closest('li');
      itemList.removeChild(li);
    }
  });
  
  deleteBtn.setAttribute('disabled', true);
});
