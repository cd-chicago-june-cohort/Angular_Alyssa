import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  @Input() level;
  constructor() { }

  ngOnInit() {
  }

}
