import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../../model/user-info';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  private userInfo:UserInfo;
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  setUserInfo(data:UserInfo, changePage){
    this.userInfo = data;
    console.log("Login user ifno",this.userInfo);
    changePage();
  } 
  getUserInfo(){
    return this.userInfo;
  } 
}
