import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';

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
    this.authService.login(this.user).subscribe(next => {
      this.router.navigate(['/overview']); // navigate to overview page in success
    }, error => {
      this.alertify.error('login failed, ' + error.error.message);
    });
  }
}
