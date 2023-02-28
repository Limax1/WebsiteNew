let value = 2;

function addTodoList() {
    const list = document.createElement("li");
    list.innerHTML("Todolist" + value++);
    list.appendChild(textList);
    document.getElementById("todoList").appendChild(list);
}



function createNewTodoList() {
    const list = document.createElement("li");
    const link = document.createElement("a");
    link.innerHTML("Hello");
    list.appendChild(link);

}