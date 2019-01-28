import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';
import { Task } from 'src/app/_models/task';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  users: User[];
  // tslint:disable-next-line:max-line-length
  taskStatus = [{key: 'new', caption: 'New'}, {key: 'open', caption: 'Open'}, {key: 'complete', caption: 'Complete'}, {key: 'close', caption: 'Close'}];
  priorities = [{key: 'low', caption: 'Low'}, {key: 'medium', caption: 'Medium'}, {key: 'high', caption: 'High'}];
  taskForm: FormGroup;
  isCreate = true;
  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(5)),
      startdate: new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required]),
      assignedto: new FormControl(),
      taskstatus: new FormControl(),
      taskpriority: new FormControl(),
      tasksteps: new FormControl()
    }, this.dateValidator);

    this.getTask();
    this.getUsers();
  }

  dateValidator(form: FormGroup) {
    const startdate = new Date(form.get('startdate').value);
    const enddate = new Date(form.get('enddate').value);
    return (enddate >= startdate) ? null : {'invalidDate': true};
  }

  getTask() {
    if (this.route.snapshot.params['id']) {
      this.isCreate = false;
      this.taskService.getTask(this.route.snapshot.params['id'])
      .subscribe((task: Task) => {
        if (task) {
          this.taskForm.get('name').setValue(task.name);
          this.taskForm.get('description').setValue(task.description);
          const sd = new Date(task.startdate);
          // tslint:disable-next-line:max-line-length
          this.taskForm.get('startdate').setValue((sd.getFullYear() + '-' + ((sd.getMonth() + 1 < 10) ? '0' + (sd.getMonth() + 1) : sd.getMonth() + 1 ) + '-' + sd.getDate()));
          const ed = new Date(task.enddate);
          // tslint:disable-next-line:max-line-length
          this.taskForm.get('enddate').setValue((ed.getFullYear() + '-' + ((ed.getMonth() + 1 < 10) ? '0' + (ed.getMonth() + 1) : ed.getMonth() + 1 ) + '-' + ed.getDate()));
          this.taskForm.get('assignedto').setValue(task.assignedto);
          this.taskForm.get('taskstatus').setValue(task.taskstatus);
          this.taskForm.get('taskpriority').setValue(task.taskpriority);
        }
        this.task = task;
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.isCreate = true;
    }
  }

  getUsers() {
    this.authService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  save() {
    this.task.name = this.taskForm.get('name').value;
    this.task.description = this.taskForm.get('description').value;
    this.task.startdate = this.taskForm.get('startdate').value;
    this.task.enddate = this.taskForm.get('enddate').value;
    this.task.assignedto = this.taskForm.get('assignedto').value;
    this.task.taskstatus = this.taskForm.get('taskstatus').value;
    this.task.taskpriority = this.taskForm.get('taskpriority').value;

    if (this.isCreate) {
      this.taskService.createTask(this.task).subscribe(() => {
        this.alertify.success('Task created successfully.');
        this.router.navigate(['/tasks']);
      }, error => {
        this.alertify.success('Error: ' + error);
      });
    } else {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.alertify.success('Task updated successfully.');
      }, error => {
        this.alertify.error('Error: ' + error);
      });
    }
  }

  cancel() {
    this.router.navigate(['/tasks']);
  }
}
