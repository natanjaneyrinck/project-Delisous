
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  isLoggedIn:boolean=false;
  constructor(public afAuth: AngularFireAuth, public toastCtrl:ToastController){
    console.log('Hello AuthServiceProvider Provider');
  }

  isRegisterSucces:boolean=false;

  displayError(error:any, message:string){
    console.log("message",error);
    this.presentToast(error.message);
    this.isLoggedIn=false;
  }

  login(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result)=>{
      console.log("login result", result);
      this.isLoggedIn=true;
    }).catch((error)=>{
      this.displayError(error, "Error login");
    })
  }

  register(email:string, passwword:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,passwword).then((result)=>{
      console.log("register result", result);
      this.isRegisterSucces=true;
    }).catch((error)=>{
      this.displayError(error, "Error register");
    })
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast',message);
    });
  
    toast.present();
  }

  changePassword(password: string){
    return this.afAuth.auth.currentUser.updatePassword(password).then((result)=>{
      console.log('succes')
      this.presentToast('You have changed your password');
    }).catch((error)=>{
      console.log('error', error);
    })
  }

}
