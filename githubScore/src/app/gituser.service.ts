import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GituserService {

  constructor(private _http: Http) { }
  retrieveUser(name){
    let api_string = 'https://api.github.com/users/' + name
    return this._http.get(api_string, 1a56de2805a24ddcab15ef6ae13fc131c3809fce).map(data => data.json()).toPromise();
  }
}
