import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-navbar',
  templateUrl: './shop-navbar.component.html',
  styleUrls: ['./shop-navbar.component.css']
})
export class ShopNavbarComponent implements OnInit {

  constructor( private router: Router) { 
    if(!localStorage.getItem('Id')){
      this.router.navigate(['/guestLogin']);
    }
  }

  ngOnInit(): void {
  }

}
