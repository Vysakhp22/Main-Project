import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrls: ['./company-navbar.component.css']
})
export class CompanyNavbarComponent implements OnInit {

  constructor(private router: Router) {
    if(!localStorage.getItem('Id')){
      this.router.navigate(['/guestLogin']);
    }
  }

  ngOnInit(): void {
  }

}
