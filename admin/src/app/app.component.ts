import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-http-client';
  label='Hazme click para saber cuantos puntos tienes';

  private token: string
  constructor(
    private taskService: TaskService,
    
  ) {}

  boton() {
    this.taskService.getToken().subscribe(token => 
      {
        console.log(token);
        this.token=token.token;
      } );


   // this.taskService.putConfig("ucam3test",this.token,"ujjftg",0,100).subscribe();//LA USAREMOS EN LA PARTE DEL ADMIN
 
    
  }
}
