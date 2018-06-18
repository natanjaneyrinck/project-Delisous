import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import { Platform, ActionSheetController } from 'ionic-angular';
import { BevestigPage } from '../bevestig/bevestig';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  restaurants:any;
  reservaties:any;

  
  reservatie = {
    id: "",
    name: "",
    date: "",
    time: "",
    people: ""
  }

  constructor( public platform: Platform, public actionsheetCtrl: ActionSheetController, private db: FireDataServiceProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    console.log("navigate with params",navParams);
    if(navParams.data){
      this.restaurants=navParams.data;
    }else{
      console.log("Navigated to without params");
    }
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  

  save(){
    this.db.addReservation(this.reservatie.id, this.reservatie.name, this.reservatie.date, this.reservatie.time, this.reservatie.people).then(
    (msg) => {
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Reservatie is gemaakt',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(BevestigPage);
     },
     (err)=>{
       let alert = this.alertCtrl.create({
         title: 'Failed!',
         subTitle: err,
         buttons: ['OK']
       });
       alert.present();
     }
    );
    }

}
