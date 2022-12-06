const tasklist = document.querySelector('.task');

const tasks = [
  {
    description: 'Eat dinner',
    completed: false,
    index: 0,
  },
  {
    description: 'Reading',
    completed: false,
    index: 1,
  },
];

const addtask = (task) => `<li>${tasks[task].description}</li>`;

const display = () => {
  for (let i = 0; i <= Object.keys(tasks).length; i += 1) {
    const ul = document.createElement('ul');
    ul.classList = 'task-list';
    ul.innerHTML = addtask(i);
    tasklist.appendChild(ul);
  }
};

display();