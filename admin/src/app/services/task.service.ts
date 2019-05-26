import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from './../interfaces/task';
import { Token } from './../interfaces/token';
import { Config } from './../interfaces/config';
import { Observable, concat } from 'rxjs';
import { string } from 'prop-types';



@Injectable({
  providedIn: 'root'
})



export class TaskService {
  

  private api = 'https://gameserver.centic.ovh';
  strfinal:string;
  numb:string;
  constructor(
    private http: HttpClient
  ){}

  getToken() {
    const path = `${this.api}/auth/login`;
    return this.http.post<Token>(path,{
      "user":"ucam3",
      "password":"vbngrn8"
    });
  }

  putConfig(cadena: string,valor: number,token: string):Observable <Config> {
    const path = `${this.api}/config`;
    const httpOptions = {

      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
    
      })
    };
    
    let obj= {}
    obj[cadena] = valor;
    return this.http.put<Config>(path,
      obj,
      httpOptions);


  }

  getConfig(token:string): Observable<Config>{
    const path = `${this.api}/config`;
 
    const httpOptions = {
      
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
    
      })
    };
    return this.http.get<Config>(path,httpOptions);
  }

  createTask(task: Task) {
    const path = `${this.api}/todos`;
    return this.http.post(path, task);
  }

  updateTask(task: Task) {
    const path = `${this.api}/todos/${task.id}`;
    return this.http.put<Task>(path, task);
  }

  deleteTask(id: string) {
    const path = `${this.api}/todos/${id}`;
    return this.http.delete(path);
  }
}
