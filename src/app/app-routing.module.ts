import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';
import { DistrictComponent } from './Admin/district/district.component';
import { PlaceComponent } from './Admin/place/place.component';
import { ProductCategoryComponent } from './Admin/product-category/product-category.component';
import { ProductComponent } from './Admin/product/product.component';
import { ViewAcceptedCompanyComponent } from './Admin/view-accepted-company/view-accepted-company.component';
import { ViewAcceptedShopComponent } from './Admin/view-accepted-shop/view-accepted-shop.component';
import { ViewDistrictComponent } from './Admin/view-district/view-district.component';
import { ViewNewCompanyComponent } from './Admin/view-new-company/view-new-company.component';
import { ViewNewShopComponent } from './Admin/view-new-shop/view-new-shop.component';
import { ViewPlaceComponent } from './Admin/view-place/view-place.component';
import { ViewProductCategoryComponent } from './Admin/view-product-category/view-product-category.component';
import { ViewProductComponent } from './Admin/view-product/view-product.component';
import { ViewRejectedCompanyComponent } from './Admin/view-rejected-company/view-rejected-company.component';
import { ViewRejectedShopComponent } from './Admin/view-rejected-shop/view-rejected-shop.component';
import { CompanyNavbarComponent } from './Company/company-navbar/company-navbar.component';
import { CompanyRegistrationComponent } from './Guest/company-registration/company-registration.component';
import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { GuestloginComponent } from './Guest/guestlogin/guestlogin.component';
import { GuestnavComponent } from './Guest/guestnav/guestnav.component';
import { NewUserComponent } from './Guest/new-user/new-user.component';
import { ShopRegistrationComponent } from './Guest/shop-registration/shop-registration.component';
import { PrisonerNavbarComponent } from './Prisoner/prisoner-navbar/prisoner-navbar.component';
import { ShopNavbarComponent } from './Shop/shop-navbar/shop-navbar.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';

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
          {path:'viewdistrict',component:ViewDistrictComponent},
          {path:'place',component:PlaceComponent},
          {path:'viewplace',component:ViewPlaceComponent},
          {path:'category',component:ProductCategoryComponent},
          {path:'viewCategory',component:ViewProductCategoryComponent},
          {path:'newshop',component:ViewNewShopComponent},
          {path:'acceptedshop',component:ViewAcceptedShopComponent},
          {path:'rejectedshop',component:ViewRejectedShopComponent},
          {path:'newcompany',component:ViewNewCompanyComponent},
          {path:'acceptedcompany',component:ViewAcceptedCompanyComponent},
          {path:'rejectedcompany',component:ViewRejectedCompanyComponent},
          {path:'product',component:ProductComponent},
          {path:'viewproduct',component:ViewProductComponent}]},
{path:'prisoner',component:PrisonerNavbarComponent},
{path:'company',component:CompanyNavbarComponent},
{path:'shop',component:ShopNavbarComponent},
{path:'user',component:UserNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
