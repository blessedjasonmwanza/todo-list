import { isBoolean, isInteger } from "lodash";

export default class List {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('todo-list'));
    if (!this.list) {
      this.list = [];
    }
    this.display();
  }

  display() {
    this.list.sort((a, b) => {
      if (a.index < b.index) return -1;
      if (a.index > b.index) return 1;
      return 0;
    });
    localStorage.setItem('todo-list', JSON.stringify(this.list));
    const listSection = document.querySelector('#list-items');
    listSection.innerHTML = '';
    for (let i = 0; i < this.list.length; i += 1) {
      const task = this.list[i];
      let taskItem = `
        <li class="d-flex s-between list-item">`;
      if (task.completed) {
        taskItem += `<span class="material-icons done update-status" data="${task.index}">
              done
            </span>
            <p contenteditable="true" class="completed">
              ${task.description}
            </p>
            `;
      } else {
        taskItem += ` <span class="material-icons  update-status"  data="${task.index}">
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
    this.activateActions();
  }

  addActivity(activity) {
    if (activity && activity.length > 0) {
      this.list.push({
        description: activity,
        completed: false,
        index: this.list.length,
      });
      this.display();
    }
  }

  deleteActivity(activityIndex) {
    if (activityIndex) {
      this.list.splice(activityIndex, 1);
      this.display();
    }
  }

  updateActivityStatus(activityIndex) {
    if (activityIndex !== undefined) {
      if (this.list[activityIndex].completed === true) {
        this.list[activityIndex].completed = false;
      } else {
        this.list[activityIndex].completed = true;
      }
    }
    this.display();
  }

  activateActions() {
    const updateStatusBtns = document.querySelectorAll('.update-status');
    // console.log(updateStatusBtns);
    if (updateStatusBtns !== null) {
      updateStatusBtns.forEach((item) => {
        item.addEventListener('click', () => {
          this.updateActivityStatus(item.getAttribute('data'));
        });
      });
    }
  }
}