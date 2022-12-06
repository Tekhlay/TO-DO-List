import './style.css';

const tasks = [
  {
    description: 'Eat dinner',
    completed: false,
    index: 0,
  },
  {
    description: 'Study time',
    completed: false,
    index: 1,
  },
  {
    description: 'Watch Sport',
    completed: false,
    index: 2,
  },
  {
    description: 'Long exercise',
    completed: false,
    index: 3,
  },
];

const addtask = (task) => `
<p class="items">${tasks[task].description}</p>
<i class="fa fa-bars"></i>`;

const display = () => {
  const tasklist = document.querySelector('.task');
  for (let i = 0; i <= Object.keys(tasks).length; i += 1) {
    const ul = document.createElement('div');
    ul.classList = 'task-list';
    ul.innerHTML = addtask(i);
    tasklist.appendChild(ul);
  }
};

display();