import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { TestComponent } from './test/test.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'test', component: TestComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
