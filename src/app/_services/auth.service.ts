import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = environment.authApi;
jwtHelper = new JwtHelperService();
decodedToken: any;
httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

constructor(private http: HttpClient, private alertify: AlertifyService) { }

  login(model: User) {
    return this.http.post(this.baseUrl + 'users/authenticate', model).pipe(
        map((response: User) => { // mapping the response to User object
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
         // console.log(this.jwtHelper.decodeToken(user.token));
         console.log(user.token);
        }
      })
    );
  }

  register(model: User) {
    this.http.post(this.baseUrl + 'users/register', model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  loggedIn() {
     const token = localStorage.getItem('token');
     return !this.jwtHelper.isTokenExpired(token);
    // return !!token;
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl + 'users', this.httpOptions);
  }
}
