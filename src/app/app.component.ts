import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('task 1', "3"),
    new Task('task 2', "2"),
    new Task('task 3', "2")
  ];
  selectedTask: Task = this.tasks[0];
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  priorityColor(currentTask) {
    if (currentTask.priority === "3"){
      return "bg-danger";
    } else if (currentTask.priority === "2") {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
