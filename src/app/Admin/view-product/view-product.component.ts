import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productData:any[]=[];
  constructor(private adminservice:AdminServiceService) { }

  ngOnInit(): void {
    this.adminservice.viewProduct().then((data:any)=>{
      this.productData=data;
    });
  }

}
