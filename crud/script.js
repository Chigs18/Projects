
const input = document.getElementById('input')
const addBtn = document.getElementById('add_chapter')
let parentList = document.getElementById('parentList')
addBtn.addEventListener('click', addChapter)

function addChapter(e) {
  if (parentList.children[0].className == 'newMsg') {
    parentList.children[0].remove();
  }

  let currentBtn = e.currentTarget
  let currentInput = currentBtn.previousElementSibling
  let chpterName = currentInput.value

  let newLi = document.createElement('li')
  // newLi.classList.add('list-group-item')
  newLi.className = 'list-group-item d-flex justify-content-between'
  newLi.innerHTML = `<h3 class="flex-grow-1">${chpterName}</h3> 
  <button class="btn btn-warning mx-3">Edit</button>
  <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`


  parentList.appendChild(newLi)
  // console.log(newLi);

}

function removeChapter(e) {
  e.parentElement.remove();
  let parentList = document.getElementById('parentList')

  if (parentList.children.length <= 0) {
    let newEmptyMsg = document.createElement('h3')
    newEmptyMsg.classList.add('newMsg')
    newEmptyMsg.innerHTML = 'List Found, Please Add List'
    parentList.append(newEmptyMsg)

  }
}

function editChapter(e) {
  if (e.textContent == 'Done') {
    e.textContent == 'Edit'
    let currentChapterName = e.previousElementSibling.value
    let currHeading = document.createElement('h3')
    currHeading.className = 'flex-grow-1'
    currHeading.textContent = currentChapterName
    e.parentElement.replaceChild(currHeading, e.previousElementSibling)
  }
  else {
    e.textContent = 'Done'
    let currentChapterName = e.previousElementSibling.textContent
    let currInput = document.createElement('input')
    currInput.type = 'text'
    currInput.placeholder = 'Enter Chapter'
    currInput.className = 'form-control'
    currInput.value = currentChapterName
    e.parentElement.replaceChild(currInput, e.previousElementSibling)
  }
}

