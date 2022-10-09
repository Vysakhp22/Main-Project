import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-shop-edit-profile',
  templateUrl: './shop-edit-profile.component.html',
  styleUrls: ['./shop-edit-profile.component.css']
})
export class ShopEditProfileComponent implements OnInit {

  id:any;
  submitted=false;

  constructor( private route:ActivatedRoute,
               private shopService:ShopServiceService,
               private fb:FormBuilder,
               private router:Router) { }
  
  shopeditForm=this.fb.group({
    name:['',Validators.required],
    contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    address:['',Validators.required],
    owner:['',Validators.required],
    sid:['']
  });

  public get f(){ return this.shopeditForm?.controls; }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.shopService.getShop( {id: this.id} ).then((data:any) => {
      console.log(data);
      this.shopeditForm.patchValue({
        name:data.data[0]?.['shop_name'],
        contact:data.data[0]?.['shop_contactno'],
        address:data.data[0]?.['shop_address'],
        owner:data.data[0]?.['shop_ownername'],
        sid:data.data[0]?.['shop_id']
      });
    });
  }

  onSubmit(){
    this.shopService.updateShop(this.shopeditForm.value).then((res:any) => {
      if(res.alert === 'Success'){
        alert("Data updated successfully");
        this.router.navigate(['/shop/shopmyprofile']);
      }
    });
  }

}
