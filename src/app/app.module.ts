import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

//Firebase 
import { AngularFireAuthModule  } from 'angularfire2/auth'
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AnimaisComponent } from './animais/animais.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';

//ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './template/modal/modal.component';

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
    EmailComponent,
    ClientesComponent,
    AnimaisComponent,
    FuncionariosComponent,
    HeaderComponent,
    SidebarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot(),
    AngularFireAuthModule
  ],
  providers: [AuthService, AngularFirestore, AngularFireDatabase, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
