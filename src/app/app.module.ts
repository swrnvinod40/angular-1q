import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { LoadingModule } from 'ngx-loading';



const appRoutes: Routes = [
  { path: 'login' , component: LoginComponent }
  
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, BsDropdownModule.forRoot(), LoadingModule , RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, LoginComponent, CardsComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
