import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  init_power_level = 0;
  select_options = Array(100).fill(0).map((x,i)=>i+1);
  levels = [
    {name: 'Human', multiplier: 1, calculated_level: 0, message:''},
    {name: 'Saiyan', multiplier: 10, calculated_level: 0, message:''},
    {name: 'SuperSaiyan', multiplier: 90, calculated_level: 0, message:''},
    {name: 'SuperSaiyanTwo', multiplier: 150, calculated_level: 0, message:''},
    {name: 'SuperSaiyanThree', multiplier: 250, calculated_level: 0, message:''},
    {name: 'SuperSaiyanFour', multiplier: 500, calculated_level: 0, message:''},
  ]
  onSubmit(){
    for (var i=0; i<this.levels.length; i++){
      this.levels[i].calculated_level = this.levels[i].multiplier * this.init_power_level
        if (this.levels[i].calculated_level == 50000){
          this.levels[i].message = 'The One';
        } else if (this.levels[i].calculated_level >= 25000){
          this.levels[i].message = 'Superlative!';
        } else if (this.levels[i].calculated_level > 9000){
          this.levels[i].message = 'Over 9000!';
        } 
    }
  }
}
