import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestnavComponent } from './Guest/guestnav/guestnav.component';
import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { GuestloginComponent } from './Guest/guestlogin/guestlogin.component';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';
import { PrisonerNavbarComponent } from './Prisoner/prisoner-navbar/prisoner-navbar.component';
import { CompanyNavbarComponent } from './Company/company-navbar/company-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestnavComponent,
    GuesthomeComponent,
    GuestloginComponent,
    AdminnavbarComponent,
    PrisonerNavbarComponent,
    CompanyNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
