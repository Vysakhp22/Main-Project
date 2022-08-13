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
import { NewUserComponent } from './Guest/new-user/new-user.component';
import { ViewNewShopComponent } from './Admin/view-new-shop/view-new-shop.component';
import { ViewAcceptedShopComponent } from './Admin/view-accepted-shop/view-accepted-shop.component';
import { ViewRejectedShopComponent } from './Admin/view-rejected-shop/view-rejected-shop.component';
import { ViewNewCompanyComponent } from './Admin/view-new-company/view-new-company.component';
import { ViewAcceptedCompanyComponent } from './Admin/view-accepted-company/view-accepted-company.component';
import { ViewRejectedCompanyComponent } from './Admin/view-rejected-company/view-rejected-company.component';
import { ProductComponent } from './Admin/product/product.component';
import { ViewProductComponent } from './Admin/view-product/view-product.component';


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
    CompanyRegistrationComponent,
    NewUserComponent,
    ViewNewShopComponent,
    ViewAcceptedShopComponent,
    ViewRejectedShopComponent,
    ViewNewCompanyComponent,
    ViewAcceptedCompanyComponent,
    ViewRejectedCompanyComponent,
    ProductComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
