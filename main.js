const form = document.getElementById('form');
const ul = document.getElementById('items');
const deleteAll = document.getElementById('btn-delete-all');


// Listen for a Submit Event on form
form.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);
deleteAll.addEventListener('click', removeTaskItems);

let completed = 0;

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

// CHECK TASK STRIKETHROUGH
ul.addEventListener('click', (e) => {

    if (e.target.tagName.toLowerCase() === 'li') {
        console.log('li action fired');
        e.target.style.textDecoration = '#c8ccd4 line-through';
        e.target.style.color = "#c8ccd4";
        completed++;
        document.getElementById('complete').innerText = `${completed} tasks completed today.`;


    }
})


//REMOVALS AND UPADTES

function removeTaskItems() {
    const list = document.getElementById('items');
    while (list.firstChild) list.removeChild(list.firstChild);
    updateCheckRemoveAll();
    
}


function updateCheckAdd() {
    const allItems = document.getElementsByClassName('list-item');
    document.getElementById('title').innerText = `${allItems.length + 1} tasks to complete today.`;

}

function updateCheckRemove() {
    const allItems = document.getElementsByClassName('list-item');
    document.getElementById('title').innerText = `${allItems.length -1} tasks to complete today.`;
    completed--;
    document.getElementById('complete').innerText = `${completed} tasks completed today.`;
}


function updateCheckRemoveAll() {
    const allItems = document.getElementsByClassName('list-item');
    document.getElementById('title').innerText = `${allItems.length} tasks to complete today.`;
    completed = 0;
    document.getElementById('complete').innerText = `${completed} tasks completed today.`;

}






// DISABLE TASK AFTER PRESSED