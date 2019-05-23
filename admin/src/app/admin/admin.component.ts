import { Component, OnInit } from '@angular/core';
import {LoginService, User} from '../services/login.service';
import {TaskService} from '../services/task.service'


@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 
  nSegmentos:number;
  nPuntos:number;

  constructor(
        private _service:LoginService,
        private _taskservice:TaskService){}
 
    ngOnInit(){
        this._service.checkCredentials();
        this._taskservice.getConfig(localStorage.getItem('token')).subscribe(
          r=>
          {
            
            //console.log(r.nsegmentos);
            this.nSegmentos=r.nsegmentos;
            this.nPuntos=r.points;
           
          }
        );
    }
 
    logout() {
        this._service.logout();
    }

    
    setSegmentos(){
     this._taskservice.putConfig("nsegmentos",this.nSegmentos,localStorage.getItem('token')).subscribe();
    }

    getConfig(){

    }
 
}
