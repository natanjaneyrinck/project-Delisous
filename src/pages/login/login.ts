import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {email: "you@me.be", password:"wachtwoord"}

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log('Tried to login with.',this.user);
    this.authService.login(this.user.email, this.user.password).then((result) => {
      console.log("AuthService replied with",result);
      if (this.authService.isLoggedIn) {
        // if auth success, go to home
        this.navCtrl.push(RestaurantsPage);
      }
    });
  }

}
