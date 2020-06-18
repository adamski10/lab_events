document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete All'
  deleteButton.id = 'delete'
  deleteButton.type = 'button'
  form.appendChild(deleteButton);

  deleteButton.addEventListener('click', handleDeleteButton)
    
  
})


const handleFormSubmit = function(event) {
  event.preventDefault();
  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value 
  const newEntry = document.createElement('li')
    // <li></li>
  newEntry.textContent = `${title}, ${author}, ${category}`
  
  const newItem = document.querySelector('ul')
  newItem.appendChild(newEntry)
  this.reset();
}

const handleDeleteButton = function() {
  
  const unorderedList = document.querySelector("ul")
  unorderedList.innerHTML = ""
}