import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {
  @Input() quote;

  @Output() voteEmitter = new EventEmitter();
  upVote(){
    this.voteEmitter.emit(1);
  }
  downVote(){
    this.voteEmitter.emit(-1);
  }

  @Output() deleteEmitter = new EventEmitter();
  destroy(){
    this.deleteEmitter.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
