import { Component, OnInit } from '@angular/core';
import {LoginService, User} from '../services/login.service';
import {TaskService} from '../services/task.service';
import { Options } from 'ng5-slider';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
   
  value: number = 4;
  value1: number = 1;
  value2: number = 1;
  value3: number = 1;
  value4: number = 1;
  value5: number = 1;

  options: Options = {
    floor: 4,
    step: 2,
    ceil: 12
  }

  options1: Options;
  options2: Options;
  options3: Options;
  options4: Options;
  options5: Options;
  nSegmentos:number;
  nPuntos:number;
  cconfiguracion;
 
  
  constructor(

        private _service:LoginService,
        private _taskservice:TaskService,
      
        ){

        }
 
    ngOnInit(){
        this._service.checkCredentials();
        this._taskservice.getConfig(localStorage.getItem('token')).subscribe(
          r=>
          {
              
            this.nSegmentos=r.nsegmentos;
            this.value=r.nsegmentos;
            this.nPuntos=r.points;

            this.options1={
              floor: 1,
              step: 1,
              ceil: this.value,
            };
            this.options2 = {
              floor: 1,
              step: 1,
              ceil: this.value,
            };
            this.options3 = {
              floor: 1,
              step: 1,
              ceil: this.value,
            }
            this.options4 = {
              floor: 1,
              step: 1,
              ceil: this.value,
            }
            
          }
          
        );

       
    }
 
    logout() {
        this._service.logout();
    }

    
    setSegmentos(){
     this._taskservice.putConfig("nsegmentos",this.value,localStorage.getItem('token')).subscribe();
     location.reload();
    }

    getConfig(){

        

    }
 
}
