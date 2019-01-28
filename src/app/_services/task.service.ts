import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../_models/task';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = environment.taskApi;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'tasks'); // why httpOptions is not working?
  }

  getTask(taskid: string) {
    return this.http.get<Task>(this.url + 'tasks/' + taskid);
  }

  createTask(task: Task) {
    return this.http.post(this.url + 'tasks', task);
  }

  updateTask(task: Task) {
    return this.http.put(this.url + 'tasks/' + task.id, task);
  }
}
