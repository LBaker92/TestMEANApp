import { UserLogin } from './../models/user-login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginServiceUrl = 'http://localhost:3000/api/v1/login';
  signupServiceUrl = 'http://localhost:3000/api/v1/signup';

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<UserLogin> {
    const data = {
      username,
      password
    };

    return this.httpClient.post<UserLogin>(this.loginServiceUrl, data);
  }

  signup(username: string, password: string): Observable<UserLogin> {
    const data = {
      username,
      password,
    };
    
    return this.httpClient.post<UserLogin>(this.signupServiceUrl, data);
  }
}
