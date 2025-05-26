'use strict';

import './style.css';
import { renderModal, renderTask, renderProjectForm, createTodoElement } from './modules/DOMHandler.js';
import { addProject, getProject, removeProject } from './modules/storage.js';

const modal = renderModal();
const projectFormModal = renderProjectForm();

document.body.addEventListener('click', (e) => {
    if (e.target.matches('.task-button')) {
        projectFormModal.showModal();
    }
});

document.querySelector('.create-button')
    .addEventListener('click', () => modal.showModal());

modal.querySelector('#submit-button')
    .addEventListener('click', e => {
        const titleInput = modal.querySelector('#title');
        const title = titleInput.value.trim();
        if (!title) return;

        const project = addProject(title);

        const list = document.querySelector('.project-list');
        const folderSymbol = document.createElement('div');
        // folderSymbol.classList.add('folder-symbol');

        folderSymbol.innerHTML = `<svg class="folder-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book</title><path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" fill="salmon"/></svg>`;

        const item = document.createElement('div');
        const deleteButton = document.createElement('button');
        item.dataset.projectId = project.id;
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg>`;

        deleteButton.addEventListener('click', e => {
            e.stopPropagation();
            removeProject(project.id);
            item.remove();
            if (window.currentProjectId === project.id) {
                window.currentProjectId = null;
                document.getElementById('todo-container').innerHTML = '';
            }
        });

        const sidebarHome = document.querySelector('.sidebar-home');
        sidebarHome.after(list);
        item.className = 'project-item';
        const label = document.createElement('span');
        label.setAttribute('id', 'label');
        label.textContent = title;
        item.append(folderSymbol, label, deleteButton);
        list.appendChild(item);

        item.addEventListener('click', (e) => {
            if (
                !e.target.closest('.folder-symbol') &&
                !e.target.closest('#label')
            ) return;
            const container = document.getElementById('todo-container');
            container.innerHTML = '';
            document.querySelectorAll('.project-item-active').forEach(element => element.remove('active'));
            item.classList.add('active');
            window.currentProjectId = project.id;
            renderProjectView(project.id);
        });

        titleInput.value = '';
        modal.close();
    });


function renderProjectView(projectId) {

    const p = getProject().find(pr => pr.id === projectId);
    if (!p) return;

    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = 'Project' + ' ' + p.title;
    document.getElementById('todo-container').appendChild(header);

    p.todo.forEach(todoData => {
        const el = createTodoElement(todoData);
        document.getElementById('todo-container').appendChild(el);
    });

    renderTask();

    const infoParagraph = document.querySelector('.current-task');
    const count = p.todo.length;
    infoParagraph.textContent = count === 0 ? "Current Task Nonexistent" : `${count} tasks`;
}

window.currentProjectId = null;
window.renderProjectView = renderProjectView;