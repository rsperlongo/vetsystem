import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Firebase 
import { AngularFireAuthModule  } from 'angularfire2/auth'
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

const firebaseConfig = {
  apiKey: "AIzaSyBDyydIH5v2k-rFctWb5T7gf6BfS-2Yztc",
  authDomain: "vetsystem-6f3a2.firebaseapp.com",
  databaseURL: "https://vetsystem-6f3a2.firebaseio.com",
  projectId: "vetsystem-6f3a2",
  storageBucket: "vetsystem-6f3a2.appspot.com",
  messagingSenderId: "608091134145"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
