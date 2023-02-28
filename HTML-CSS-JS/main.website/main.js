document.getElementById("todoList");

function addTodoList() {
    todoList.innerHTML = `
    <li><a href="#">+ new Todo</a></li>
    `;
    todoList.appendChild("Todo 1");
}