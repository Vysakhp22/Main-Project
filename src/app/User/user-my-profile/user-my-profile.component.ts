import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-my-profile',
  templateUrl: './user-my-profile.component.html',
  styleUrls: ['./user-my-profile.component.css']
})
export class UserMyProfileComponent implements OnInit {

userArray:any[]=[];

  constructor( private userService:UserServiceService ) { }

  ngOnInit(): void {
    this.userService.getUser({ id:localStorage.getItem('Id') }).then(( data:any ) => {
      console.log(data.data);
      this.userArray=data.data;
    });
  }

}
