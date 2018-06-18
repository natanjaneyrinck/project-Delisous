import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import { Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  restaurant:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController, private db: FireDataServiceProvider) {
    this.restaurant=this.db.selectRestaurant;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

  menu(page:any){
    this.navCtrl.push(MenuPage);
  }

}
