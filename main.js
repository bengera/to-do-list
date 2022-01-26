const form = document.getElementById('form');
const ul = document.getElementById('items');
const deleteAll = document.getElementById('btn-delete-all');


// Listen for a Submit Event on form
form.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);
deleteAll.addEventListener('click', removeTaskItems);


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

    updateCheckAdd();
   
    // ADD THE NEW LI TO THE UL LIST
    ul.appendChild(taskItem);
    
    
    form.reset();

    


}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        const taskItem = e.target.parentElement;
        taskItem.classList.toggle('fade');
        updateCheckRemove();
        setTimeout(() => {
        ul.removeChild(taskItem);
    }, 400)
        

    }
}

function removeTaskItems() {
        
    const list = document.getElementById('items');
    while(list.firstChild) list.removeChild(list.firstChild);
    updateCheckRemoveAll();
    }


function updateCheckAdd() {
    const allItems = document.getElementsByClassName('list-item');
    document.getElementById('title').innerText =`${allItems.length + 1} tasks to complete today.`;
        
}

function updateCheckRemove() {
    const allItems = document.getElementsByClassName('list-item');
    document.getElementById('title').innerText =`${allItems.length -1} tasks to complete today.`;
    
}


function updateCheckRemoveAll() {
    const allItems = document.getElementsByClassName('list-item');
    document.getElementById('title').innerText =`${allItems.length} tasks to complete today.`;
    
}






//OTHER FUNCTIONALITY JS

// Toggle importance
// Add date
// Add difficulty for number of tasks to gamify the list


// CSS


