$(document).ready(function() {
    const $ftList = $("#ft_list");

    function saveTodos() {
        const items = [];
        $(".todo-item").each(function() {
            items.push($(this).text());
        });
        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(items)) + ";path=/;max-age=31536000";
    }

    function createTodo(text, shouldSave = true) {
        const $todoDiv = $("<div></div>")
            .addClass("todo-item")
            .text(text);

        $todoDiv.click(function() {
            if (confirm("Do you really want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

        $ftList.prepend($todoDiv);

        if (shouldSave) {
            saveTodos();
        }
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

    $("#new-btn").click(function() {
        const text = prompt("Enter a new TO DO:");
        if (text !== null && text.trim() !== "") {
            createTodo(text.trim());
        }
    });

    loadTodos();
});
