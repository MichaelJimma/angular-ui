import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  constructor(
    public authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
  }

  login() {
    // this.authService.login(this.model).subscribe(next => {
    //   this.alertify.success('Logged in successfully');
    // }, error => {
    //   this.alertify.error('login failed' + error);
    // });
    this.authService.login(this.user);
    this.router.navigate(['/home']);
    this.alertify.success('Logged in successfully');
  }

  loggedIn() {
    const isLoggedIn =  this.authService.loggedIn();
    return isLoggedIn;
  }
}