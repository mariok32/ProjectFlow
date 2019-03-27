import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { bloomHasToken } from '@angular/core/src/render3/di';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { paramss} from './interfaces/params';
import {Config} from './interfaces/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'angular-http-client';
  label='Hazme click para saber cuantos puntos tienes';
  invitation:string;
  validation:string;
  config: Config;

  
  private token: string
  constructor(
    private taskService: TaskService,
    private rutaActiva: ActivatedRoute,
    private router: Router
    
  ) {}

  ngOnInit() {
    this.rutaActiva.queryParams.subscribe(params => {
       this.invitation = params['invitation'];
       this.validation = params['validation'];
    });

    this.taskService.getConfig().subscribe(config => 
      {
        console.log(config);
        this.config=config;
      } );



  
  }

  boton() {
    this.taskService.getConfig().subscribe
    alert('Has ganado '+this.config.points+' puntos');
  }



}
