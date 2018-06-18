
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Time } from '@angular/common';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FireDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireDataServiceProvider {
  restaurants: Observable<any>;
  reservaties: Observable<any>;
  selectRestaurant: any;

  constructor(private db:AngularFireDatabase) {
    console.log('Hello FireDataServiceProvider Provider');

  }

  getAll(){
    return this.db.list('restaurants').valueChanges();
  }

  update(id:string, naam:string, adres:string, img:string, uren:string){
    this.db.object('restaurants/'+id).update({
      id:id,
      naam:naam,
      adres:adres,
      img:img,
      uren:uren
    });
  }

  getAllReservations(){
    return this.db.list('reservaties').valueChanges();
  }

  addReservation(id: string, name: string, date: string, time: string, people: string){
    return this.db.list('reservaties/'+id).push(
      {
        id:id,
        name:name,
        date:date,
        time:time,
        people:people
      }
    )
  }
  
  

}
