import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centraljailnavbar',
  templateUrl: './centraljailnavbar.component.html',
  styleUrls: ['./centraljailnavbar.component.css']
})
export class CentraljailnavbarComponent implements OnInit {

  constructor(private router: Router) {
    if(!localStorage.getItem('Id')){
      this.router.navigate(['/guestLogin']);
    }
   }

  ngOnInit(): void {
  }

}
