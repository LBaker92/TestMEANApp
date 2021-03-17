import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginServiceUrl = 'http://localhost:3000/api/v1/login';

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    const data = {
      username,
      password
    };

    return this.httpClient.post<User>(this.loginServiceUrl, data);
  }
}
