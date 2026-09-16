const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new-btn");

function saveTodos() {
    const items = [];
    const todoElements = ftList.getElementsByClassName("todo-item");
    for (let el of todoElements) {
        items.push(el.textContent);
    }
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(items)) + ";path=/;max-age=31536000";
}

function loadTodos() {
    const cookies = document.cookie.split(";");
    for (let c of cookies) {
        const [name, value] = c.trim().split("=");
        if (name === "todos" && value) {
            try {
                const items = JSON.parse(decodeURIComponent(value));
                for (let i = items.length - 1; i >= 0; i--) {
                    createTodo(items[i], false);
                }
            } catch (e) {
                console.error("Error parsing cookie:", e);
            }
        }
    }
}

function createTodo(text, shouldSave = true) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";
    todoDiv.textContent = text;

    todoDiv.addEventListener("click", function() {
        if (confirm("Do you really want to remove this TO DO?")) {
            todoDiv.remove();
            saveTodos();
        }
    });

    ftList.prepend(todoDiv);

    if (shouldSave) {
        saveTodos();
    }
}

newBtn.addEventListener("click", function() {
    const text = prompt("Enter a new TO DO:");
    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
    }
});

loadTodos();
