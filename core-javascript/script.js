const todoCreateButton = document.querySelector(".todo_create_button");
const todoInput = document.querySelector(".todo_input");
const todoContainer = document.querySelector(".todo_container");

const todoValues = [];



// Function to render the to-do list and attach delete event listeners
function renderTodoList() {
    todoContainer.innerHTML = todoValues.map((val, index) => {
        return `<div class="todo_item" data-index="${index}">
                    <div class="todo_item_left">
                        <input type="checkbox" class="checkbox" id="completed-${index}" name="completed">
                        <span>${val}</span>
                    </div>
                    <div class="todo_item_right">
                        <button class="todo_delete_button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="red"
                                stroke-width="2"
                                stroke-linecap="2"
                                stroke-linejoin="round"
                                class="lucide lucide-trash">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                            </svg>
                        </button>
                    </div>
                </div>`;
    }).join("");

    // Attach click event listeners to each delete button
    document.querySelectorAll(".todo_delete_button").forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove the todo item from the array and re-render the list
            todoValues.splice(index, 1);
            renderTodoList();
        });
    });
    document.querySelectorAll(".checkbox").forEach((checkbox, index) => {
        const textSpan = checkbox.nextElementSibling; 
        checkbox.addEventListener("change", () => {
            
            textSpan.classList.toggle("todo_item_completed", checkbox.checked);
        });
    });
}


todoCreateButton.addEventListener("click", () => {
    const value1 = todoInput.value;
    if (value1 === "") {
        return;
    }
    todoValues.push(value1);
    todoInput.value = "";
    renderTodoList();
});




