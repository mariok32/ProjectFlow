import { Component,OnInit} from '@angular/core';
import { TaskService } from './services/task.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Panel de administración';
   token: string
  constructor(
    private taskService: TaskService,
    private router: Router 
    
  ) {}

  ngOnInit() { 
    this.funciones1();
   }

  funciones1()  {
    this.taskService.getToken().subscribe(token => 
      {
        console.log(token);
        this.token=token.token;
      } );

  }
}
