import _ from 'lodash';// eslint-disable-line no-unused-vars
import './style.css';

const todoList = [
  {
    description: 'Pray',
    completed: true,
    index: 0,
  },
  {
    description: 'Exercise',
    completed: true,
    index: 1,
  },
  {
    description: 'Shower',
    completed: false,
    index: 2,
  },
  {
    description: 'Eat Breakfast',
    completed: false,
    index: 3,
  },
  {
    description: 'Code',
    completed: false,
    index: 4,
  },
];

todoList.sort((a, b) => {
  if(a.index < b.index) return -1;
  if(a.index > b.index) return 1;
  return 0;
});

const listSection = document.querySelector('#list-items');
listSection.innerHTML = '';
for (let i = 0; i < todoList.length; i += 1) {
  const task = todoList[i];
  let taskItem = `
    <li class="d-flex s-between list-item">`;
  if (task.completed) {
    taskItem += `<span class="material-icons done" onclick="updateStatus(${task.index}, 'pending')">
          done
        </span>
        <p contenteditable="true" class="completed">
          ${task.description}
        </p>
        `;
  } else {
    taskItem += ` <span class="material-icons" onclick="updateStatus(${task.index}, 'completed')">
          check_box_outline_blank
        </span>
        <p contenteditable="true">
          ${task.description}
        </p>`;
  }
  taskItem += `
      <span class="material-icons  move">
        more_vert
        </span>
      <!-- <span class="material-icons" onclick="deleteTask(${task.index})">
        delete
      </span> -->
    </li>
  `;
  listSection.innerHTML += taskItem;
}