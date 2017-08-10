import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons = ['on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on']
  change_button(idx){
    if (this.buttons[idx] == 'on'){
      this.buttons[idx] = 'off'
    } else {
      this.buttons[idx] = 'on'
    }
  }
}
