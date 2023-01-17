// //Grabbing enter button from the form
const btn = document.querySelector("#enter");

const toDoListForm = document.querySelector("#to-do-list-form")

function addToList(item) {
    // console.dir(item.target.toDoList.value);
    item.preventDefault();
    console.log(item);
    const toDoItem = document.createElement("li");
    toDoItem.textContent = item.target.toDo.value;
    const toDoListOne = document.querySelector("#list");
    toDoListOne.appendChild(toDoItem);
}

toDoListForm.addEventListener("submit", addToList);
