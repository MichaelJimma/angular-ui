import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { OverviewComponent } from './overview/overview.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard] },
    { path: 'tasks/:id', component: TaskDetailComponent, canActivate: [AuthGuard] },
    { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
    { path: 'tutorial', component: TutorialComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
