import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-shop-my-profile',
  templateUrl: './shop-my-profile.component.html',
  styleUrls: ['./shop-my-profile.component.css']
})
export class ShopMyProfileComponent implements OnInit {

  shopArray:any[]=[];

  constructor( private shopService:ShopServiceService ) { }

  ngOnInit(): void {
    this.shopService.getShop( { id:localStorage.getItem('Id') } ).then((data:any) => {
      this.shopArray=data.data;
      console.log(this.shopArray);
    });
  }

}
