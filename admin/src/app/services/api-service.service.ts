import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {user} from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<user>{
    return this.http.post<user>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }
}