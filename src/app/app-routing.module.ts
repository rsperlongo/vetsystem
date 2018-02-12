import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AnimaisComponent } from './animais/animais.component';
import { ClientesComponent } from './clientes/clientes.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'email-login', component: EmailComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},

  //routes home
  { path: 'clientes', component: ClientesComponent},
  { path: 'animais', component: AnimaisComponent},
  { path: 'funcionarios', component: FuncionariosComponent},
  

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
