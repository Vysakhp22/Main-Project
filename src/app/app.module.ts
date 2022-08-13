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
import { ShopNavbarComponent } from './Shop/shop-navbar/shop-navbar.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { DistrictComponent } from './Admin/district/district.component';
import { ViewDistrictComponent } from './Admin/view-district/view-district.component';
import { PlaceComponent } from './Admin/place/place.component';
import { ViewPlaceComponent } from './Admin/view-place/view-place.component';
import { ProductCategoryComponent } from './Admin/product-category/product-category.component';
import { ViewProductCategoryComponent } from './Admin/view-product-category/view-product-category.component';
import { ShopRegistrationComponent } from './Guest/shop-registration/shop-registration.component';
import { CompanyRegistrationComponent } from './Guest/company-registration/company-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestnavComponent,
    GuesthomeComponent,
    GuestloginComponent,
    AdminnavbarComponent,
    PrisonerNavbarComponent,
    CompanyNavbarComponent,
    ShopNavbarComponent,
    UserNavbarComponent,
    DistrictComponent,
    ViewDistrictComponent,
    PlaceComponent,
    ViewPlaceComponent,
    ProductCategoryComponent,
    ViewProductCategoryComponent,
    ShopRegistrationComponent,
    CompanyRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
