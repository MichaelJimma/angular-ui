import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'http:localhost:5000/api/auth/';
jwtHelper = new JwtHelperService();
decodedToken: any;

constructor(private http: HttpClient) { }

  login(model: any) {
    // return this.http.post(this.baseUrl + 'login', model).pipe(
    //     map((response: any) => {
    //     const user = response;
    //     if (user) {
    //       localStorage.setItem('token', user.token);
    //     }
    //   })
    // );

    // tslint:disable-next-line:max-line-length
    const user = {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw'};
    localStorage.setItem('token', user.token);
    this.decodedToken = this.jwtHelper.decodeToken(user.token);
    console.log(this.decodedToken);
  }

  register(model: any) {
    this.http.post(this.baseUrl + 'register', model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // return !this.jwtHelper.isTokenExpired(token);
    return !!token;
  }
}
