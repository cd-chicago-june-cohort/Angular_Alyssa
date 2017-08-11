import { Component } from '@angular/core';
import { GituserService } from './gituser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _gituser: GituserService) {}
  name = ''
  user = {
    score: null,
    message: null,
    color: null,
  }
  onSubmit(){
    this._gituser.retrieveUser(this.name).then(user => this.user.score = user.public_repos + user.followers).catch(err => console.log(err))
    if (this.user.score < 20){
      this.user.message = 'Needs Work!'
      this.user.color = 'red'
    } else if (this.user.score < 50){
      this.user.message = 'A decent start!'
      this.user.color = 'orange'
    } else if (this.user.score < 100){
      this.user.message = 'Doing good!'
      this.user.color = 'black'
    } else if (this.user.score < 200){
      this.user.message = 'Great job!'
      this.user.color = 'green'
    } else {
      this.user.message = 'Github Elite'
      this.user.color = 'blue'
    }
    this.name=''
  }
}
