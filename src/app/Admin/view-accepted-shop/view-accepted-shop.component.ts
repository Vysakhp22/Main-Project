import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-accepted-shop',
  templateUrl: './view-accepted-shop.component.html',
  styleUrls: ['./view-accepted-shop.component.css']
})
export class ViewAcceptedShopComponent implements OnInit {

  shoparray:any[]=[];

  constructor(
    private adminService:AdminServiceService
  ) { }

  ngOnInit(): void {
    this.adminService.viewAcceptedShop().then((res:any)=>{
      this.shoparray=res;
    });
  }

}
