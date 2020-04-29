import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {ContactsComponent} from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './services/auth.service';
import {ContactsService} from './services/contacts.service';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ContactsComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ContactsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
