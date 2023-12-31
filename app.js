//? Selectors
const plusButton = document.querySelector(".add-button");
const todoUl = document.querySelector(".todo-ul");
const todContainer = document.querySelector(".todo-container");
const todoInput = document.querySelector("#todo-input");
const filterTodo = document.querySelector(".form-selector");

//? Event Listners
plusButton.addEventListener("click", addElementsToDo);
todoUl.addEventListener("click", deleteAndCheck);
filterTodo.addEventListener("click", filterItems);

//? Functions
//* Create Elements
function addElementsToDo(e) {
  e.preventDefault();

  //* create a container
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("todo");

  //* create li
  const todoLi = document.createElement("textarea");
  todoLi.innerText = todoInput.value;
  todoLi.disabled = "true";
  todoLi.classList.add("todo-li");
  containerDiv.appendChild(todoLi);

  //* create complete btn
  const todoComplete = document.createElement("button");
  todoComplete.classList.add("complete-btn");
  todoComplete.innerHTML = '<i class="fas fa-check"></i>';
  containerDiv.appendChild(todoComplete);

  //* create trash btn
  const todoTrash = document.createElement("button");
  todoTrash.classList.add("trash-btn");
  todoTrash.innerHTML = '<i class="fas fa-trash"></i>';
  containerDiv.appendChild(todoTrash);

  //! add to main ul
  todoUl.appendChild(containerDiv);

  //! remove place holder text from input area
  todoInput.value = "";
}

//* complete and delete functionality
function deleteAndCheck(e) {
  const item = e.target;
  const itemParent = item.parentElement;
  if (item.classList[0] === "trash-btn") {
    itemParent.classList.add("fall");
    itemParent.addEventListener("transitionend", function () {
      itemParent.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    itemParent.classList.toggle("completed");
  }
}

//* Select fuctionality
function filterItems(e) {
  // get all the nodes in the todo list
  const todoNodes = todoUl.childNodes;
  //loop through
  todoNodes.forEach(function (todo) {
    // switch through all the possibilities
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
