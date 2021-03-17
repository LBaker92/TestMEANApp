import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  signupServiceUrl = 'http://localhost:3000/api/v1/signup';

  constructor(private httpClient: HttpClient) {}

  signup(username: string, password: string): Observable<User> {
    const data = {
      username,
      password,
    };

    return this.httpClient.post<User>(this.signupServiceUrl, data);
  }
}
