import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';


export const firebaseConfig = {
  apiKey: 'AIzaSyCi1Ll3jl5nxtJRuHTklcB4A12dpd2O50A',
  authDomain: 'friends-location-50a95.firebaseapp.com',
  databaseURL: 'https://friends-location-50a95.firebaseio.com',
  storageBucket: 'friends-location-50a95.appspot.com',
  messagingSenderId: '355395218260'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmxeT2DGRVTb-ZlJqGcWLY7A_5vJymWG0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
