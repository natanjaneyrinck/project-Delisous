import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { MenuPage } from '../menu/menu';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import { Platform, ActionSheetController } from 'ionic-angular';



/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  detailRoot = DetailPage;
  menuRoot = MenuPage;
  restaurant:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController, private db: FireDataServiceProvider) {
    if(navParams.data){
      this.restaurant=navParams.data;
    }else{
      console.log('did not get data');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
