'use strict';

function load() {
  return JSON.parse(localStorage.getItem('projects') || '[]');
}

function save(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function getProject() {
  return load();
}

export function addProject(title) {
  const projects = load();
  const id = Date.now().toString();
  const newProject = { id, title, todo: [] };
  projects.push(newProject);
  save(projects);
  return newProject;
}

export function addTodo(projectId, todoData) {
  const projects = load();
  const p = projects.find(pr => pr.id === projectId);
  if (!p) return;
  p.todo = p.todo || [];
  p.todo.push({ id: Date.now().toString(), ...todoData });
  save(projects);
}

export function removeTodo(projectId, todoId) {
  const projects = load();
  const p = projects.find(pr => pr.id === projectId);
  if (!p) return;
  p.todo = p.todo.filter(task => task.id !== todoId);
  save(projects);
}

export function removeProject(projectId) {
  const projects = load();                        
  const filtered = projects.filter(p => p.id !== projectId);
  save(filtered);                        
}
