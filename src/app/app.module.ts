import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { DetailPage } from '../pages/detail/detail';
import { MenuPage } from '../pages/menu/menu';
import { BevestigPage } from '../pages/bevestig/bevestig';
import { BedankingPage } from '../pages/bedanking/bedanking';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FireDataServiceProvider } from '../providers/fire-data-service/fire-data-service';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';


var config = {
  apiKey: "AIzaSyAAlir82ubk2gwtIe0o5_xWEKX8OGUtgOQ",
  authDomain: "project-d6bbb.firebaseapp.com",
  databaseURL: "https://project-d6bbb.firebaseio.com",
  projectId: "project-d6bbb",
  storageBucket: "project-d6bbb.appspot.com",
  messagingSenderId: "411132667649"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RestaurantsPage,
    DetailPage,
    MenuPage,
    BevestigPage,
    BedankingPage,
    TabsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RestaurantsPage,
    DetailPage,
    MenuPage,
    BevestigPage,
    BedankingPage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FireDataServiceProvider,
  ]
})
export class AppModule {}
