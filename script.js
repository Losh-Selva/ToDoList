// //Grabbing enter button from the form
// const btn = document.querySelector("#enter");

const toDoListForm = document.querySelector("#to-do-list-form")

function addToList(item) {
    // console.dir(item.target.toDoList.value);
    item.preventDefault();
    console.log(item);
    const toDoItem = document.createElement("li");
    toDoItem.textContent = item.target.toDo.value;
    const toDoListOne = document.querySelector("#list");
    toDoListOne.appendChild(toDoItem);

    const itemDelete = document.createElement("button");
    itemDelete.textContent = "delete";
    itemDelete.onclick = function() {
        this.parentElement.remove();
    };

    toDoItem.appendChild(itemDelete);
}

// function deleteItem(item) {
//     item.removeChild(item.lastChild);
// }

toDoListForm.addEventListener("submit", addToList);

const dateBtn = document.querySelector("#date");

function showDate() {
    const currentDate = new Date();
    document.querySelector("#date2").textContent = currentDate;
}
dateBtn.addEventListener("click", showDate);
