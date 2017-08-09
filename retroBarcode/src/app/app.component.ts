import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = ['lavender', 'thistle', 'plum', 'violet', 'orchid', 'fuschia', 'magenta', 'mediumorchid', 'mediumpurple', 'blueviolet', 'darkviolet', 'darkorchid', 'darkmagenta', 'purple', 'indigo'].sort(function(){return 0.5 - Math.random()});
}
