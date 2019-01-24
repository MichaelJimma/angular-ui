import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskCardComponent } from './tasks/task-card/task-card.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard] },
    { path: 'task', component: TaskCardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'test', component: TestComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
