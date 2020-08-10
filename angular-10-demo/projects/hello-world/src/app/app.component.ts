import { Component } from '@angular/core';

import { ButtonDisplay } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  count = 0;
  buttonDisplay = ButtonDisplay;

  someData = [];

  constructor(){
    for (let i = 0; i < 100; i++){
      this.someData.push(`Loop ${i}`);
    }
  }

  onButtonClick(): void {
    this.count++;
  }
}
