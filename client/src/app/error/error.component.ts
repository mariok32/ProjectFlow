import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  ngOnInit() {
  
    (async () => { 
      // Do something before delay
   
      await this.delay(5000);
     location.href="https://play.google.com/store/apps/details?id=es.centic.gamification&hl=es";

      
     
  })();
  }

}
