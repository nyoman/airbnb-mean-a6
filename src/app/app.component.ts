import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTitle = 'I am Comp Title from app.component.ts';

  clickHandler() {
  	alert("You have called the clickHandler function");
  }
}
