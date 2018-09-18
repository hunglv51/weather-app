import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Facebook} from '@ionic-native/facebook';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherProvider } from '../providers/weather/weather';
import { WeatherPage } from '../pages/weather/weather';
import { LoginProvider } from '../providers/login/login';
import { HttpClientModule } from '@angular/common/http';
import {GooglePlus} from "@ionic-native/google-plus";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeatherPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WeatherPage
  ],
  providers: [
    GooglePlus,
    Facebook,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    LoginProvider
  ]
})
export class AppModule {}
