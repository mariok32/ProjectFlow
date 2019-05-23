import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {user} from '../interfaces/user'
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<Token>{
    
    return this.http.post<Token>('https://gameserver.centic.ovh/auth/login', {
      "user": email,
      "password": password
    });
  }
}