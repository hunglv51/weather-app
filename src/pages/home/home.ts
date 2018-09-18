import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import { WeatherPage } from '../weather/weather';
import { LoginProvider } from '../../providers/login/login';
import { GooglePlus } from '@ionic-native/google-plus';
import { GoogleResponse } from '../../model/google-response';
import { UserInfo,Location } from '../../model/user-info';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private events: Events, private fb:Facebook, private loginProvider: LoginProvider, private gg:GooglePlus) {

  }

  facebookLogin(){
    console.log("FB Login");
    // this.events.publish("username", "Le Viet Hung");
    this.fb.login(["email","public_profile","user_location", "user_photos"]).then((res: FacebookLoginResponse) => {
      console.log(res);
      this.getFacebookData();
      
      // this.navCtrl.setRoot(WeatherPage);
    })
    .catch((err)=>{
      console.log(err);
      
    });
  }


  getFacebookData(){
    this.fb.api("/me?fields=id,email,name,location", ["email","public_profile", "user_location"])
    .then((data)=>{
      console.log(data);
      this.loginProvider.setUserInfo(data, ()=>this.navCtrl.setRoot(WeatherPage));
      this.events.publish('username', data["name"]);
      this.events.publish('avatarUrl', `https://graph.facebook.com/${data["id"]}/picture`);
    })
    .catch((err) => {
      console.log(err);
      
    });

    
  }

  googleLogin(){
    this.gg.login()
    .then((data: GoogleResponse) => {
      console.log(data);
      let loc = new Location();
      loc.name = "Hanoi, VietNam";
      let userInfo:UserInfo = {
        id: data.userId,
        email:data.email,
        name:data.displayName,
        location: loc
      };
      this.loginProvider.setUserInfo(userInfo, () => this.navCtrl.setRoot(WeatherPage));
      this.events.publish("username", data.displayName);
      this.events.publish('avatarUrl', data.imageUrl);
      
    })
    .catch((err) => {
      console.log(err);
      
    });
  }
}
