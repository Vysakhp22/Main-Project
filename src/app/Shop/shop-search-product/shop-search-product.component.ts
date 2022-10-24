import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-shop-search-product',
  templateUrl: './shop-search-product.component.html',
  styleUrls: ['./shop-search-product.component.css']
})
export class ShopSearchProductComponent implements OnInit {

  productArray:any[]=[];
  distArray:any[]=[];
  jailArray:any[]=[];
  productSel:any[]=[];
  submitted: boolean = true;

  constructor( private Sservice: ShopServiceService,
               private fb: FormBuilder,
               private router: Router) { }

  searchForm=this.fb.group({
    distid:['',Validators.required],
    product:[''],
    cid:['']
  });

  ngOnInit(): void {
    this.Sservice.viewProduct().then((data: any) => {
      this.productArray=data;
    });
    this.Sservice.viewJailDistrict().then((data: any) => {
      this.distArray=data;
    });
  }

  onDistrict(){
    this.Sservice.viewJail({id: this.searchForm.value.distid}).then((data: any) => {
      this.jailArray=data.data;
    });
    this.Sservice.distBasedPr({id: this.searchForm.value.distid}).then((data: any) => {
      this.productArray=data.data;
    });
  }

  onJail(){
    this.Sservice.jailProduct({id: this.searchForm.value.cid}).then((data: any) => {
      this.productArray=data.data;
      this.productSel=data.data;
    });
  }

  onProductSelect(){
    console.log(this.searchForm.value);
    this.Sservice.productBased(this.searchForm.value).then((data: any) => {
      this.productArray=data.data;
    });
  }

  onOrder(id: any){
    console.log(this.searchForm.value);
    if(this.searchForm.invalid){
      this.submitted=false;
      return;
    }
    else{
      this.router.navigate(['/shop/orderProduct',id]);
    }
  }

}
