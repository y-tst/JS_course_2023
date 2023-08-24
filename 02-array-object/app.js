// Theory
/*
const array = [1, 2,  5, 5, 7, 22, 100]
// const array1 = new Array(1, 2,  5, 5, 7, 22)
// const array = [1, 'door',  5, 'window'']
const stringArray = ['one', 'two', 'three']

console.log(array)
console.log(stringArray)
console.log(stringArray.length)
console.log(array[5])
console.log(array[array.length - 1]) //last element

array[0] = -1
console.log(array)

stringArray[stringArray.length] = 'four' //bad practice
console.log(stringArray)

Oject theory:

const person = {
  firstName : 'Yurii',
  lastName : 'Yanchuk',
  year : 1979,
  married : true,
  languages : ['ukr', 'en', 'tr', 'ru'],
  getFullName: function ()
 {
  console.log(person.firstName, ' ', person.lastName)
 }
}

console.log(person.year)
console.log(person['languages'])
const key = 'married'
console.log(person[key])
person.year = 1980
console.log(person.year)
person.getFullName()

*/

//Practice
const inputField = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputField.value)

const notes = [
  {
    title: 'Notes title 1',
    completed: false,
  },
  {
    title: 'Notes title 2',
    completed: true,
  },
  {
    title: 'Notes title 3',
    completed: false,
  },
]

// function render() {
//   for (let [note, index] of notes.entries) {
//     listElement.insertAdjacentHTML('beforeend', getNotesTemplate(note))
//   }
// }

function render() {
  listElement.innerHTML = ''

  if (notes.length === 0) {
    listElement.innerHTML = 'There are no notes yet'
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNotesTemplate(notes[i], i))
  }
}

render()

createBtn.onclick = function () {
  if (inputField.value.length === 0) {
    return
  }

  const newNote = {
    title: inputField.value,
    completed: false,
  }

  notes.push(newNote)
  // listElement.insertAdjacentHTML('beforeend', getNotesTemplate(newNote))
  inputField.value = ''

  render()
}

listElement.onclick = function(event) {
  // console.log(event.target)
  // console.log(event.target.dataset)
  // console.log(event.target.dataset.index)
  const index = parseInt(event.target.dataset.index)
  const type = event.target.dataset.type

  if (type === 'toggle') {
    // console.log('toggle', index)
    notes[index].completed = !notes[index].completed
  } else if (type === 'remove') {
    // console.log('remove', index)
    notes.splice(index, 1)  // - remove the array element
  }

  render()
}

function getNotesTemplate(note, index) {
  // console.log(note.title)
  // console.log(note.completed)
  return `
    <li
       class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index=${index} data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index=${index} data-type="remove">&times;</span>
          </span>
    </li>
  `
}
