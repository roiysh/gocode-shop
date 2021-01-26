import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:{<h1>sfdf</h1>},
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heros';
  displaystatus = true;
  onClick():void{
     this.title = this.title?'': 'Tour of Heros';
    console.log("Display");
  }
}
