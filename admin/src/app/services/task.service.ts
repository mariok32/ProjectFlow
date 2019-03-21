import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from './../interfaces/task';
import { Token } from './../interfaces/token';
import { Config } from './../interfaces/config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5bmFtZSI6InVjYW0zIiwiZ2FtZSI6InVjYW0zIiwidXNlcm5hbWUiOiJ1Y2FtMyIsImlhdCI6MTU1MTk2ODQxOH0.jr32MQx-ieTYNZJ2ovPHnGurg3C96nLTAe277ymXDeY'

  })
};

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

  putConfig(id: string,token: string,invitation: string,promotion: number,points: number) {
    const path = `${this.api}/config`;
    return this.http.put<Config>(path,{
      "id":id,
      "token":token,
      "invitation":invitation,
      "promotion":promotion,
      "points":points
    },httpOptions);
  }

  getConfig(){
    const path = `${this.api}/config`;
    return this.http.put<Config>(path,httpOptions);
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
