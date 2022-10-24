import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';
import { CentraljailRegistrationComponent } from './Admin/centraljail-registration/centraljail-registration.component';
import { DistrictComponent } from './Admin/district/district.component';
import { JobdetailsComponent } from './Admin/jobdetails/jobdetails.component';
import { PlaceComponent } from './Admin/place/place.component';
import { ProductCategoryComponent } from './Admin/product-category/product-category.component';
import { ProductComponent } from './Admin/product/product.component';
import { ViewAcceptedCompanyComponent } from './Admin/view-accepted-company/view-accepted-company.component';
import { ViewAcceptedShopComponent } from './Admin/view-accepted-shop/view-accepted-shop.component';
import { ViewDistrictComponent } from './Admin/view-district/view-district.component';
import { ViewJobDetailsComponent } from './Admin/view-job-details/view-job-details.component';
import { ViewNewCompanyComponent } from './Admin/view-new-company/view-new-company.component';
import { ViewNewShopComponent } from './Admin/view-new-shop/view-new-shop.component';
import { ViewPlaceComponent } from './Admin/view-place/view-place.component';
import { ViewProductCategoryComponent } from './Admin/view-product-category/view-product-category.component';
import { ViewProductComponent } from './Admin/view-product/view-product.component';
import { ViewRejectedCompanyComponent } from './Admin/view-rejected-company/view-rejected-company.component';
import { ViewRejectedShopComponent } from './Admin/view-rejected-shop/view-rejected-shop.component';
import { CentraljailChangePasswordComponent } from './Centraljail/centraljail-change-password/centraljail-change-password.component';
import { CentraljailEditProfileComponent } from './Centraljail/centraljail-edit-profile/centraljail-edit-profile.component';
import { CentraljailMyprofileComponent } from './Centraljail/centraljail-myprofile/centraljail-myprofile.component';
import { CentraljailnavbarComponent } from './Centraljail/centraljailnavbar/centraljailnavbar.component';
import { JailsuperintendentRegisterComponent } from './Centraljail/jailsuperintendent-register/jailsuperintendent-register.component';
import { PrisonerRegistrationComponent } from './Centraljail/prisoner-registration/prisoner-registration.component';
import { ProductRateComponent } from './Centraljail/product-rate/product-rate.component';
import { ProductStockComponent } from './Centraljail/product-stock/product-stock.component';
import { ProductionDetailsComponent } from './Centraljail/production-details/production-details.component';
import { ViewAcceptedShopOrdersComponent } from './Centraljail/view-accepted-shop-orders/view-accepted-shop-orders.component';
import { ViewAcceptedUserOrdersComponent } from './Centraljail/view-accepted-user-orders/view-accepted-user-orders.component';
import { ViewNewShopOrdersComponent } from './Centraljail/view-new-shop-orders/view-new-shop-orders.component';
import { ViewNewUserOrdersComponent } from './Centraljail/view-new-user-orders/view-new-user-orders.component';
import { ViewPrisonerComponent } from './Centraljail/view-prisoner/view-prisoner.component';
import { ViewProductRatesComponent } from './Centraljail/view-product-rates/view-product-rates.component';
import { ViewProductionComponent } from './Centraljail/view-production/view-production.component';
import { ViewRejectedShopOrdersComponent } from './Centraljail/view-rejected-shop-orders/view-rejected-shop-orders.component';
import { ViewRejectedUserOrdersComponent } from './Centraljail/view-rejected-user-orders/view-rejected-user-orders.component';
import { ViewStockDetailsComponent } from './Centraljail/view-stock-details/view-stock-details.component';
import { CompanyChangePasswordComponent } from './Company/company-change-password/company-change-password.component';
import { CompanyEditProfileComponent } from './Company/company-edit-profile/company-edit-profile.component';
import { CompanyMyProfileComponent } from './Company/company-my-profile/company-my-profile.component';
import { CompanyNavbarComponent } from './Company/company-navbar/company-navbar.component';
import { JobvacancyComponent } from './Company/jobvacancy/jobvacancy.component';
import { ViewAcceptedJobapplicationsComponent } from './Company/view-accepted-jobapplications/view-accepted-jobapplications.component';
import { ViewJobVacancyComponent } from './Company/view-job-vacancy/view-job-vacancy.component';
import { ViewNewJobapplicationsComponent } from './Company/view-new-jobapplications/view-new-jobapplications.component';
import { ViewRejectedJobapplicationsComponent } from './Company/view-rejected-jobapplications/view-rejected-jobapplications.component';
import { CompanyRegistrationComponent } from './Guest/company-registration/company-registration.component';
import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { GuestloginComponent } from './Guest/guestlogin/guestlogin.component';
import { GuestnavComponent } from './Guest/guestnav/guestnav.component';
import { NewUserComponent } from './Guest/new-user/new-user.component';
import { ShopRegistrationComponent } from './Guest/shop-registration/shop-registration.component';
import { PrisonerNavbarComponent } from './Prisoner/prisoner-navbar/prisoner-navbar.component';
import { SearchCompanyComponent } from './Prisoner/search-company/search-company.component';
import { OrderproductComponent } from './Shop/orderproduct/orderproduct.component';
import { ShopChangePasswordComponent } from './Shop/shop-change-password/shop-change-password.component';
import { ShopEditProfileComponent } from './Shop/shop-edit-profile/shop-edit-profile.component';
import { ShopMyProfileComponent } from './Shop/shop-my-profile/shop-my-profile.component';
import { ShopNavbarComponent } from './Shop/shop-navbar/shop-navbar.component';
import { ShopSearchProductComponent } from './Shop/shop-search-product/shop-search-product.component';
import { UserChangePasswordComponent } from './User/user-change-password/user-change-password.component';
import { UserEditProfileComponent } from './User/user-edit-profile/user-edit-profile.component';
import { UserMyProfileComponent } from './User/user-my-profile/user-my-profile.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { UserSearchProductComponent } from './User/user-search-product/user-search-product.component';

const routes: Routes = [
  {path:'',component:GuestnavComponent,
children:[
  {path:'',component:GuesthomeComponent},
  {path:'guestLogin',component:GuestloginComponent},
  {path:'shopregister',component:ShopRegistrationComponent},
  {path:'companyregister',component:CompanyRegistrationComponent},
  {path:'newuser',component:NewUserComponent}
]},
{path:'admin',component:AdminnavbarComponent,
children:[{path:'district',component:DistrictComponent},
          {path:'district/:id',component:DistrictComponent},
          {path:'viewdistrict',component:ViewDistrictComponent},
          {path:'place',component:PlaceComponent},
          {path:'viewplace',component:ViewPlaceComponent},
          {path:'category',component:ProductCategoryComponent},
          {path:'category/:id',component:ProductCategoryComponent},
          {path:'viewCategory',component:ViewProductCategoryComponent},
          {path:'newshop',component:ViewNewShopComponent},
          {path:'acceptedshop',component:ViewAcceptedShopComponent},
          {path:'rejectedshop',component:ViewRejectedShopComponent},
          {path:'newcompany',component:ViewNewCompanyComponent},
          {path:'acceptedcompany',component:ViewAcceptedCompanyComponent},
          {path:'rejectedcompany',component:ViewRejectedCompanyComponent},
          {path:'product',component:ProductComponent},
          {path:'viewproduct',component:ViewProductComponent},
          {path:'jobdetails',component:JobdetailsComponent},
          {path:'viewjobdetails',component:ViewJobDetailsComponent},
          {path:'jailregister',component:CentraljailRegistrationComponent}]},
{path:'prisoner',component:PrisonerNavbarComponent,
children:[{path:'searchcompany',component:SearchCompanyComponent}]},
{path:'company',component:CompanyNavbarComponent,
children:[{path:'companymyprofile',component:CompanyMyProfileComponent},
          {path:'companychangepassword/:id',component:CompanyChangePasswordComponent},
          {path:'companyeditprofile/:id',component:CompanyEditProfileComponent},
          {path:'jobvacancy',component:JobvacancyComponent},
          {path:'viewjobvacancy',component:ViewJobVacancyComponent},
          {path:'viewjobapplicants',component:ViewNewJobapplicationsComponent},
          {path:'viewacceptedjobapplications',component:ViewAcceptedJobapplicationsComponent},
          {path:'viewrejectedapplications',component:ViewRejectedJobapplicationsComponent}]},
{path:'shop',component:ShopNavbarComponent,
children:[{path:'shopmyprofile',component:ShopMyProfileComponent},
          {path:'shopchangepassword/:id',component:ShopChangePasswordComponent},
          {path:'shopeditprofile/:id',component:ShopEditProfileComponent},
          {path:'shopsearchproduct',component:ShopSearchProductComponent},
          {path:'orderProduct/:id',component:OrderproductComponent}]},
{path:'user',component:UserNavbarComponent,
children:[{path:'changepassword/:id',component:UserChangePasswordComponent},
          {path:'usermyprofile',component:UserMyProfileComponent},
          {path:'editprofile/:id',component:UserEditProfileComponent},
          {path:'usersearchproduct',component:UserSearchProductComponent}]},
{path:'centraljail',component:CentraljailnavbarComponent,
children:[{path:'prisonerregister',component:PrisonerRegistrationComponent},
          {path:'productrate',component:ProductRateComponent},
          {path:'viewprisoner',component:ViewPrisonerComponent},
          {path:'viewproductrates',component:ViewProductRatesComponent},
          {path:'centraljailmyprofile',component:CentraljailMyprofileComponent},
          {path:'centraljaileditprofile/:id',component:CentraljailEditProfileComponent},
          {path:'centraljailchangepassword/:id',component:CentraljailChangePasswordComponent},
          {path:'viewshoporders',component:ViewNewShopOrdersComponent},
          {path:'viewacceptedshoporders',component:ViewAcceptedShopOrdersComponent},
          {path:'viewrejectedshoporders',component:ViewRejectedShopOrdersComponent},
          {path:'viewuserorders',component:ViewNewUserOrdersComponent},
          {path:'viewaccepteduserorders',component:ViewAcceptedUserOrdersComponent},
          {path:'viewrejecteduserorders',component:ViewRejectedUserOrdersComponent},
          {path:'jailsuperintendent',component:JailsuperintendentRegisterComponent},
          {path:'production',component:ProductionDetailsComponent},
          {path:'productstock', component:ProductStockComponent},
          {path:'viewproductiondetails', component:ViewProductionComponent},
          {path:'viewStock', component:ViewStockDetailsComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
