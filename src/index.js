import _ from 'lodash';
import './style.css';

let todoList = [
    {
        description: 'Pray',
        completed: false,
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

const listSection = document.querySelector('#list-items');
listSection.innerHTML = '';
for(let task of todoList) {
  let taskItem = `
    <li class="d-flex s-between list-item">`;
      if(task.completed){
        taskItem += `<span class="material-icons done" onclick="updateStatus(${task.index}, 'pending')">
          done
        </span>
        <p contenteditable="true" class="completed">
          ${task.description}
        </p>
        `;
      }else{
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