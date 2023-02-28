

function addTodoList() {
    const list = document.createElement("li");
    const textList = document.createTextNode("Todo 69");
    list.appendChild(textList);
    document.getElementById("todoList").appendChild(list);
}