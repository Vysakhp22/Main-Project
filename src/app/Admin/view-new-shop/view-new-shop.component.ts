import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-new-shop',
  templateUrl: './view-new-shop.component.html',
  styleUrls: ['./view-new-shop.component.css']
})
export class ViewNewShopComponent implements OnInit {

  shoparray:any[]=[];

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.viewShop().then((data:any)=>{
      this.shoparray=data;
    })
  }

  approveShop(id:any){
    console.log(id);
    this.adminService.acceptShop({id}).then((res:any)=>{
      console.log(res);
      if(res.alert==='Success'){
        alert("Accepted");
        window.location.reload();
      }
    });
  }

  rejectShop(id:any){
    console.log(id);
    this.adminService.declineShop({id}).then((res:any)=>{
      console.log(res);
      if(res.alert==='Success'){
        alert("Accepted");
        window.location.reload();
      }
    });
  }

}
