// //Grabbing enter button from the form
// const btn = document.querySelector("#enter");

// btn.addEventListener("click", registerClick);

const toDoListForm = document.querySelector("to-do-list-form")

const addToList = (item) => {
    console.dir(item.target.toDoList.value);
    item.preventDefault();
    const toDoItem = document.createElement("li");
    toDoItem.textContent = item.target.toDoList.value;
    const toDoListOne = document.querySelector("list");

    toDoListOne.appendChild(toDoItem);
}
toDoListForm.addEventListener('submit', addToList);
