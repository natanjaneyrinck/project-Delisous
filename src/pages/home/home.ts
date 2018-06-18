import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  register(page:any){
    this.navCtrl.push(RegisterPage);
  }

  login(page:any){
    this.navCtrl.push(LoginPage);
  }

}
