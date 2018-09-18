import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { LoginProvider } from '../../providers/login/login';
import { WeatherInfo } from '../../model/weather-info';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage  {
  locationsList = ["Hanoi, VietNam","Hue, VietNam","Haiphong, VietNam","Dalat, VietNam","Danang, VietNam"]
  weatherInfo: WeatherInfo;
  dataLoaded = false;
  selectedLocation: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider: WeatherProvider, private loginProvider:LoginProvider) {
    console.log('Init WeatherPage');
    let userInfo = this.loginProvider.getUserInfo();
    this.weatherProvider.getWeatherInfo(userInfo.location.name).subscribe((data: WeatherInfo) => {
      this.weatherInfo = data;
      console.log(this.weatherInfo);
      this.selectedLocation = userInfo.location.name;
      this.dataLoaded = true;
    });
  }

  ionViewWillLoad() {
    console.log("ionViewWillLoad");
    
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad");

  }

  changeLocation(newLocation){
    this.weatherProvider.getWeatherInfo(newLocation).subscribe((data: WeatherInfo) => {
      this.weatherInfo = data;
      console.log(this.weatherInfo);
      this.selectedLocation = newLocation;
      this.dataLoaded = true;
    });
    console.log(newLocation);
    
  }
  
  

}
