
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
  if(inputBox.value === ''){
    alert('Please enter the Task')
  }else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  storeData();
}

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked'); 
    storeData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove(); 
    storeData();
  }
});

let data;

function storeData(){
  localStorage.setItem(data, listContainer.innerHTML)
}
function showData(){
  listContainer.innerHTML = localStorage.getItem(data);
}
showData();
