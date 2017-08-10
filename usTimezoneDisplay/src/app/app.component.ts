import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  time = new Date();
  zone = null;
  hide = true;

  updateTime(zone){
    this.time = new Date();
    this.zone = zone
    this.hide = false
    if (zone =='PST'){
      this.time.setHours(this.time.getHours()-2)
    } else if (zone =='MST'){
      this.time.setHours(this.time.getHours()-1)
    } else if (zone =='CST'){
      this.time.setHours(this.time.getHours())
    } else if (zone =='EST'){
      this.time.setHours(this.time.getHours()+1)
    } else {
      this.time = new Date();
    }
  }

  clear(){
    this.hide = true;
    this.zone = null;
  }
}
