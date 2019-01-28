import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/_models/task';
import { TaskService } from 'src/app/_services/task.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(private taskService: TaskService, private alertify: AlertifyService) { }

  ngOnInit() {
     this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((response: any) => {
       this.tasks = response.tasks;
       this.tasks.forEach((t) => {
         if (t.name === 'Updated another task') {
           t.isoverdue = true;
         }
       });
    }, error => {
      this.alertify.error(error);
    });
  }
}
