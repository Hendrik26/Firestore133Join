import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

const configOld = {
  apiKey: 'AIzaSyBogpc-AUVgVdcgoiWhE4_lKCFzfcbaSaA',
  authDomain: 'angularfirebase-267db.firebaseapp.com',
  databaseURL: 'https://angularfirebase-267db.firebaseio.com',
  projectId: 'angularfirebase-267db',
  storageBucket: 'angularfirebase-267db.appspot.com',
  messagingSenderId: '96751198234'
};

const config = {
    apiKey: 'AIzaSyCK4yXTgsJltFSecpLSXpYYcsb5FL8Ltag',
    authDomain: 'firestore133joins-12828.firebaseapp.com',
    databaseURL: 'https://firestore133joins-12828.firebaseio.com',
    projectId: 'firestore133joins-12828',
    storageBucket: 'firestore133joins-12828.appspot.com',
    messagingSenderId: '322337869305'
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
