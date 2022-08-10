import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestnavComponent } from './Guest/guestnav/guestnav.component';
import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { GuestloginComponent } from './Guest/guestlogin/guestlogin.component';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestnavComponent,
    GuesthomeComponent,
    GuestloginComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
