import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prisoner-navbar',
  templateUrl: './prisoner-navbar.component.html',
  styleUrls: ['./prisoner-navbar.component.css']
})
export class PrisonerNavbarComponent implements OnInit {

  constructor( private router: Router) {
    if(!localStorage.getItem('Id')){
      this.router.navigate(['/guestLogin']);
    }
   }

  ngOnInit(): void {
  }

}
