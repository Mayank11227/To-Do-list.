const form = document.getElementById('todoForm');
const allTask = document.getElementById('allTask');
const input = document.getElementById('task');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskText = document.createElement('span');
    taskText.textContent = text;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const doneBtn = document.createElement('button');
    doneBtn.textContent = "✔";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "✖";

    actions.append(doneBtn, deleteBtn);
    taskDiv.append(taskText, actions);
    allTask.append(taskDiv);

    doneBtn.addEventListener('click', () => {
        taskDiv.classList.toggle('done');
    });

    deleteBtn.addEventListener('click', () => {
        taskDiv.remove();
    });

    form.reset();
});
