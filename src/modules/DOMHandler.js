'use strict';

import { addTodo, removeTodo } from "./storage";

let projectFormModal = null;


function renderProjectForm() {
    if (projectFormModal) return projectFormModal;
    const formModal = document.createElement('dialog');
    formModal.classList.add('form-modal');
    const createButton = document.querySelector('.create-button');
    createButton.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        // modal.style.display = 'block';
        modal.showModal();
    });
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'title';
    titleInput.name = 'title';
    titleInput.maxLength = 12;
    titleInput.required = true;

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.maxLength = 25;
    descriptionInput.placeholder = 'description';
    descriptionInput.name = 'description';

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'dueDate';
    dateInput.required = true;

    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'priority';
    prioritySelect.required = true;
    const priorities = ['High', 'Medium', 'Low'];

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select a Priority';
    placeholder.disabled = true;
    placeholder.selected = true;
    prioritySelect.appendChild(placeholder);


    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority.toLowerCase();
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Todo';

    form.append(titleInput, descriptionInput, dateInput, prioritySelect, submitButton);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoData = {
            title: titleInput.value,
            description: descriptionInput.value,
            dueDate: dateInput.value,
            priority: prioritySelect.value,
        };
        addTodo(window.currentProjectId, todoData);
        formModal.close();
        form.reset();
        prioritySelect.selectedIndex = 0;
        const container = document.getElementById('todo-container');
        container.innerHTML = '';
        window.renderProjectView(window.currentProjectId);
    });

    document.body.appendChild(formModal);

    formModal.appendChild(form);
    projectFormModal = formModal;
    return formModal;
}

function createTodoElement(data) {
    // const todoItemWrapper = document.createElement('div');
    // todoItemWrapper.classList.add('todo-wrapper');
    // document.getElementById('todo-container').appendChild(todoItemWrapper);
    const todoItem = document.createElement('div');
    // todoItemWrapper.appendChild(todoItem);
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
    <h3>Title: ${data.title}</h3>
    <p>Description: ${data.description}</p>
    <p>Date: ${data.dueDate}</p>
    <p>Priority: ${data.priority}</p>
    `;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('task-delete');
    deleteButton.innerHTML =
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg>`;
    todoItem.insertAdjacentElement('beforeend', deleteButton);
    deleteButton.addEventListener('click', () => {
        removeTodo(window.currentProjectId, data.id);
        todoItem.remove();
        document.getElementById('todo-container').innerHTML = '';
        window.renderProjectView(window.currentProjectId);
    });

    // todoItemWrapper.appendChild(todoItem);
    todoItem.appendChild(deleteButton);

    // return todoItemWrapper;
    return todoItem;
}

function renderModal() {
    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-content">
    <input type="text" placeholder="Title?" maxlength="14" id="title">
    <button id="submit-button">Create Project</button>
    </div>
    `;
    // modal.style.display = 'none';
    modal.close();
    document.body.appendChild(modal);
    return modal;
}

function renderTask(titleInput) {
    let isOpened = false;
    const addTask = document.createElement('div');
    addTask.innerHTML = `
    <h2 class="task-title"></h2>
    <div class="task-info">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>folder-open</title><path d="M1 4H2V3H9V4H10V5H20V6H21V18H20V19H2V18H1V4M3 9H19V7H9V6H8V5H3V9M3 17H19V11H3V17Z" /></svg>
    <p class="current-task">Current task nonexistent</p>
    </div>
    <button class="task-button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-box</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>
    <p>Add Task</p>
    </button>
    `;
    const todoContainer = document.getElementById('todo-container');
    todoContainer.appendChild(addTask);
    const taskButton = document.querySelector('.task-button');
    const text = document.createElement('h3');
    text.textContent = 'No Task';
    taskButton.addEventListener('click', () => {
        renderProjectForm().showModal();
    });
}

export { renderTask, renderModal, renderProjectForm, createTodoElement };