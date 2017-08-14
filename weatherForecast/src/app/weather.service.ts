import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }
  retrieveWeather(city){
    let api_string = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=1e44b68f7b316dacd3172c5b9dedc70d'
    return this._http.get(api_string).map(data => data.json()).toPromise();
  }
}
