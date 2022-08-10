import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';
import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { GuestloginComponent } from './Guest/guestlogin/guestlogin.component';
import { GuestnavComponent } from './Guest/guestnav/guestnav.component';
import { PrisonerNavbarComponent } from './Prisoner/prisoner-navbar/prisoner-navbar.component';

const routes: Routes = [
  {path:'',component:GuestnavComponent,
children:[
  {path:'',component:GuesthomeComponent},
  {path:'guestLogin',component:GuestloginComponent}
]},
{path:'admin',component:AdminnavbarComponent},
{path:'prisoner',component:PrisonerNavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
