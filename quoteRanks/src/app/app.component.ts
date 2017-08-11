import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [{content:"Tester1", author:"Someone", votes:0}, {content:"Tester2", author:"Someone Else", votes:0}];
  quote = {
    content: '',
    author: '',
    votes: 0,
  }
  onSubmit(){
    this.quotes.push(this.quote);
    this.quote = {
      content: '',
      author: '',
      votes: 0,
    }
  }
  changeVote(eventData, index){
    this.quotes[index].votes += eventData;
    this.quotes.sort(function(a,b){
      return b.votes - a.votes;
    })
  }
  destroy(index){
    this.quotes.splice(index, 1);
  }
}
