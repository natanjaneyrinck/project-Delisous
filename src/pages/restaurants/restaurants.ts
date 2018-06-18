import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import { TabsPage } from '../tabs/tabs';
import { DetailPage } from '../detail/detail';
import { SettingsPage } from '../settings/settings';


/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  restaurants:Array<any>;
  selectedRest:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: FireDataServiceProvider) {
    this.selectedRest = navParams.get('restaurants')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
    this.db.getAll().subscribe((result)=>{
      console.log('got this data from provider', result);
      this.restaurants=result;
    }, (error)=>{
      console.log('did not get data', error);
    })
  }

  itemTapped(event, restaurant){
    this.db.selectRestaurant = restaurant;
    this.navCtrl.push(TabsPage);

  }

  settings(page:any){
    this.navCtrl.push(SettingsPage);
  }

}
