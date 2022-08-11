import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';
import { DistrictComponent } from './Admin/district/district.component';
import { PlaceComponent } from './Admin/place/place.component';
import { ProductCategoryComponent } from './Admin/product-category/product-category.component';
import { ViewDistrictComponent } from './Admin/view-district/view-district.component';
import { ViewPlaceComponent } from './Admin/view-place/view-place.component';
import { ViewProductCategoryComponent } from './Admin/view-product-category/view-product-category.component';
import { CompanyNavbarComponent } from './Company/company-navbar/company-navbar.component';
import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { GuestloginComponent } from './Guest/guestlogin/guestlogin.component';
import { GuestnavComponent } from './Guest/guestnav/guestnav.component';
import { PrisonerNavbarComponent } from './Prisoner/prisoner-navbar/prisoner-navbar.component';
import { ShopNavbarComponent } from './Shop/shop-navbar/shop-navbar.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';

const routes: Routes = [
  {path:'',component:GuestnavComponent,
children:[
  {path:'',component:GuesthomeComponent},
  {path:'guestLogin',component:GuestloginComponent}
]},
{path:'admin',component:AdminnavbarComponent,
children:[{path:'district',component:DistrictComponent},
          {path:'viewdistrict',component:ViewDistrictComponent},
          {path:'place',component:PlaceComponent},
          {path:'viewplace',component:ViewPlaceComponent},
          {path:'category',component:ProductCategoryComponent},
          {path:'viewCategory',component:ViewProductCategoryComponent}]},
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
