import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BedankingPage } from '../bedanking/bedanking';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

/**
 * Generated class for the BevestigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bevestig',
  templateUrl: 'bevestig.html',
})
export class BevestigPage {

  reservaties:any;
  restaurants:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: FireDataServiceProvider) {
  }

  ionViewDidLoad() {
    this.db.getAll().subscribe((result)=>{
      console.log('got this data from provider', result);
      this.restaurants=result;
    }, (error)=>{
      console.log('did not get data', error);
    })
    console.log('ionViewDidLoad BevestigPage');
    this.db.getAllReservations().subscribe((result)=>{
      console.log('got this data from provider', result);
      this.reservaties=result;
    }), (error)=>{
      console.log('did not get data', error);
    }
  }

  bedanking(page:any){
    this.navCtrl.push(BedankingPage);
  }

}
