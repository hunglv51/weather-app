import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WeatherPage } from '../pages/weather/weather';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  username:string;
  isAuthenticated = false;
  rootPage:any = HomePage;
  avatarUrl:string;
  @ViewChild(Nav) nav:Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.events.subscribe("username", (username) => {
        if(username !== undefined)
          {
            // this.nameHeader.nativeElement.innerText = username;
            this.username = username;
            this.isAuthenticated = true;
          }
      });
      this.events.subscribe("avatarUrl", (url) => {
        if(url !== undefined){
          this.avatarUrl = url;
        }
      });
    });
  }

  logout(){
    this.isAuthenticated = false;
    this.nav.setRoot(HomePage);
    this.nav.getNativeElement().dispatchEvent(new Event("click"));
  }

  goWeather(){
    this.nav.push(WeatherPage);
    this.nav.getNativeElement().dispatchEvent(new Event("click"));
  }
}

