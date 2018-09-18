import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  private apiKey = "20148c04bc1b2834496fbc5812a3ee02";
  private baseUrl = "http://api.openweathermap.org/data/2.5/weather";
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeatherInfo(location: string){
    return this.http.get(`${this.baseUrl}?q=${location}&appid=${this.apiKey}&units=metric`);
  }
  changeLocation(data){
    console.log(data);
    
  }
}
