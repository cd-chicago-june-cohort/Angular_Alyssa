import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    street_address: '',
    unit_apt_no: '',
    city: '',
    state: '',
    lucky: '',
  }
  confirm = '';
  confirm_valid = false;
  check_pwconfirm(){
    if(this.confirm == this.user.password){
      this.confirm_valid = true;
    }
  }
  success_message = false;
  onSubmit(){
    this.success_message = true;
  }
  states = ["Alaska","Alabama","Arkansas","American Samoa","Arizona","California","Colorado","Connecticut","District of Columbia","Delaware","Florida","Georgia","Guam","Hawaii","Iowa","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Michigan","Minnesota","Missouri","Mississippi","Montana","North Carolina"," North Dakota","Nebraska","New Hampshire","New Jersey","New Mexico","Nevada","New York","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Virginia","Virgin Islands","Vermont","Washington","Wisconsin","West Virginia","Wyoming"]
}
