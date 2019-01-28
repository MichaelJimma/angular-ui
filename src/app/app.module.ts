import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // used to send http request
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // ngForm directive
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { TaskService } from './_services/task.service';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskCardComponent } from './tasks/task-card/task-card.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { OverviewComponent } from './overview/overview.component';
import { SideNavComponent } from './side-nav/side-nav.component';


export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      LoginComponent,
      TaskListComponent,
      TaskCardComponent,
      TaskDetailComponent,
      TutorialComponent,
      OverviewComponent,
      SideNavComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      TaskService,
      AuthService,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
