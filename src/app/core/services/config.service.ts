import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl = 'http://localhost:3000/api/v1/config';

  constructor(private httpClient: HttpClient) { }

  saveConfig(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user);
  }
}
