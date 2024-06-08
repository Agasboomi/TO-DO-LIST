// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
    });

    function addTodo(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'X';
        closeBtn.classList.add('close');
        closeBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(closeBtn);

        todoList.appendChild(li);
    }
});
