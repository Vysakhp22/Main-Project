import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-product-category',
  templateUrl: './view-product-category.component.html',
  styleUrls: ['./view-product-category.component.css']
})
export class ViewProductCategoryComponent implements OnInit {
  categoryarray:any[]=[];
  constructor(private adminservice:AdminServiceService) { }

  ngOnInit(): void {
    this.adminservice.viewCategory().then((data:any)=>{
      this.categoryarray=data;
    });
  }

}
