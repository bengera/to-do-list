const form = document.getElementById('form');
const ul = document.getElementById('items');

// Listen for a Submit Event on form
form.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();

    // GET INPUT VALUE  
    const newItem = document.getElementById('form-input').value
    
    // CREATE LI ELEMENT AND GIVE IT A CLASS NAME
    const taskItem = document.createElement('li');
    taskItem.className = 'list-item'; 
    
    // APPEND NEW LI AND GIVE IT THE TEXT VALUE FROM THE INPUT FIELD
    taskItem.appendChild(document.createTextNode(newItem));

    // ADD BUTTON
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-light btn-sm float-right delete';

    // ADD DELETE BUTTON
    deleteBtn.appendChild(document.createTextNode('X'));
    taskItem.appendChild(deleteBtn);

    // setTimeout(() => {
        
    // }, 500)
    // ADD THE NEW LI TO THE UL LIST
    ul.appendChild(taskItem);
    

    


}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        const taskItem = e.target.parentElement;
        ul.removeChild(taskItem);
    }
}


//OTHER FUNCTIONALITY JS

// Remove all Items
// Change color scheme
// 

// CSS

// Add Animation to Items being added
