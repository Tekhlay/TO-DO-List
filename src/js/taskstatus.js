/* eslint-disable import/no-cycle */
// import Todolist from './task.js';

export default class TaskStatus {
  constructor() {
    this.completed = false;
  }

  checked = (task) => {
    task.completed = true;
    // const task1 = new Todolist();
    // task1.addtask(task.description, task.completed, task.index);
  }

  unchecked = (task) => {
    task.completed = false;
  }
}