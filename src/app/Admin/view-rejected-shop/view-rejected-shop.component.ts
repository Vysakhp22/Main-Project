import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-rejected-shop',
  templateUrl: './view-rejected-shop.component.html',
  styleUrls: ['./view-rejected-shop.component.css']
})
export class ViewRejectedShopComponent implements OnInit {

  shopArray:any[]=[];

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.viewRejectedShop().then((res:any)=>{
      this.shopArray=res;
    });
  }

}
