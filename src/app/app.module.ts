import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


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
import { UserChangePasswordComponent } from './User/user-change-password/user-change-password.component';
import { UserMyProfileComponent } from './User/user-my-profile/user-my-profile.component';
import { UserEditProfileComponent } from './User/user-edit-profile/user-edit-profile.component';
import { ShopMyProfileComponent } from './Shop/shop-my-profile/shop-my-profile.component';
import { ShopChangePasswordComponent } from './Shop/shop-change-password/shop-change-password.component';
import { ShopEditProfileComponent } from './Shop/shop-edit-profile/shop-edit-profile.component';
import { CompanyMyProfileComponent } from './Company/company-my-profile/company-my-profile.component';
import { CompanyChangePasswordComponent } from './Company/company-change-password/company-change-password.component';
import { CompanyEditProfileComponent } from './Company/company-edit-profile/company-edit-profile.component';
import { PrisonerRegistrationComponent } from './Centraljail/prisoner-registration/prisoner-registration.component';
import { ViewPrisonerComponent } from './Centraljail/view-prisoner/view-prisoner.component';
import { ProductRateComponent } from './Centraljail/product-rate/product-rate.component';
import { ViewProductRatesComponent } from './Centraljail/view-product-rates/view-product-rates.component';
import { CentraljailnavbarComponent } from './Centraljail/centraljailnavbar/centraljailnavbar.component';
import { CentraljailMyprofileComponent } from './Centraljail/centraljail-myprofile/centraljail-myprofile.component';
import { CentraljailEditProfileComponent } from './Centraljail/centraljail-edit-profile/centraljail-edit-profile.component';
import { CentraljailChangePasswordComponent } from './Centraljail/centraljail-change-password/centraljail-change-password.component';
import { ShopSearchProductComponent } from './Shop/shop-search-product/shop-search-product.component';
import { UserSearchProductComponent } from './User/user-search-product/user-search-product.component';
import { JobdetailsComponent } from './Admin/jobdetails/jobdetails.component';
import { ViewJobDetailsComponent } from './Admin/view-job-details/view-job-details.component';
import { JobvacancyComponent } from './Company/jobvacancy/jobvacancy.component';
import { ViewJobVacancyComponent } from './Company/view-job-vacancy/view-job-vacancy.component';
import { ViewNewJobapplicationsComponent } from './Company/view-new-jobapplications/view-new-jobapplications.component';
import { ViewAcceptedJobapplicationsComponent } from './Company/view-accepted-jobapplications/view-accepted-jobapplications.component';
import { ViewRejectedJobapplicationsComponent } from './Company/view-rejected-jobapplications/view-rejected-jobapplications.component';
import { ViewNewShopOrdersComponent } from './Centraljail/view-new-shop-orders/view-new-shop-orders.component';
import { ViewAcceptedShopOrdersComponent } from './Centraljail/view-accepted-shop-orders/view-accepted-shop-orders.component';
import { ViewRejectedShopOrdersComponent } from './Centraljail/view-rejected-shop-orders/view-rejected-shop-orders.component';
import { ViewNewUserOrdersComponent } from './Centraljail/view-new-user-orders/view-new-user-orders.component';
import { ViewAcceptedUserOrdersComponent } from './Centraljail/view-accepted-user-orders/view-accepted-user-orders.component';
import { ViewRejectedUserOrdersComponent } from './Centraljail/view-rejected-user-orders/view-rejected-user-orders.component';
import { SearchCompanyComponent } from './Prisoner/search-company/search-company.component';
import { CentraljailRegistrationComponent } from './Admin/centraljail-registration/centraljail-registration.component';
import { JailsuperintendentRegisterComponent } from './Centraljail/jailsuperintendent-register/jailsuperintendent-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ProductionDetailsComponent } from './Centraljail/production-details/production-details.component';
import { ProductStockComponent } from './Centraljail/product-stock/product-stock.component';
import { ViewProductionComponent } from './Centraljail/view-production/view-production.component';
import { ViewStockDetailsComponent } from './Centraljail/view-stock-details/view-stock-details.component';
import { OrderproductComponent } from './Shop/orderproduct/orderproduct.component';
import { JobCategoryComponent } from './Admin/job-category/job-category.component';


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
    ViewProductComponent,
    UserChangePasswordComponent,
    UserMyProfileComponent,
    UserEditProfileComponent,
    ShopMyProfileComponent,
    ShopChangePasswordComponent,
    ShopEditProfileComponent,
    CompanyMyProfileComponent,
    CompanyChangePasswordComponent,
    CompanyEditProfileComponent,
    PrisonerRegistrationComponent,
    ViewPrisonerComponent,
    ProductRateComponent,
    ViewProductRatesComponent,
    CentraljailnavbarComponent,
    CentraljailMyprofileComponent,
    CentraljailEditProfileComponent,
    CentraljailChangePasswordComponent,
    ShopSearchProductComponent,
    UserSearchProductComponent,
    JobdetailsComponent,
    ViewJobDetailsComponent,
    JobvacancyComponent,
    ViewJobVacancyComponent,
    ViewNewJobapplicationsComponent,
    ViewAcceptedJobapplicationsComponent,
    ViewRejectedJobapplicationsComponent,
    ViewNewShopOrdersComponent,
    ViewAcceptedShopOrdersComponent,
    ViewRejectedShopOrdersComponent,
    ViewNewUserOrdersComponent,
    ViewAcceptedUserOrdersComponent,
    ViewRejectedUserOrdersComponent,
    SearchCompanyComponent,
    CentraljailRegistrationComponent,
    JailsuperintendentRegisterComponent,
    ProductionDetailsComponent,
    ProductStockComponent,
    ViewProductionComponent,
    ViewStockDetailsComponent,
    OrderproductComponent,
    JobCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
