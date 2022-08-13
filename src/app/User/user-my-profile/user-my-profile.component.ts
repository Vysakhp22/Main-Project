import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-my-profile',
  templateUrl: './user-my-profile.component.html',
  styleUrls: ['./user-my-profile.component.css']
})
export class UserMyProfileComponent implements OnInit {
  shopname='Myshop'

  constructor() { }

  ngOnInit(): void {
  }

}
