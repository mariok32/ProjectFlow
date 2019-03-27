import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from './../interfaces/task';
import { Token } from './../interfaces/token';
import { Config } from './../interfaces/config';



@Injectable({
  providedIn: 'root'
})



export class TaskService {
  

  private api = 'https://gameserver.centic.ovh';
  

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

  putConfig(promotion: number,points: number,token: string) {
    const path = `${this.api}/config`;
    const httpOptions = {

      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
    
      })
    };
    console.log(path)
    return this.http.put<Config>(path,{
      "promotion":promotion,
      "points":points
    },
      httpOptions);

  }

  getConfig(){
    const path = `${this.api}/config`;
   // return this.http.put<Config>(path,httpOptions);
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
