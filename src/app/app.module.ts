import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // used to send http request
import { FormsModule} from '@angular/forms'; // ngForm directive
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'tasks', component: TasksComponent },
   { path: 'test', component: TestComponent },
   { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
   declarations: [
      AppComponent,
      TestComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      TasksComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
