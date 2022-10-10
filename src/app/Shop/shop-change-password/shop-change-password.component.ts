import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-shop-change-password',
  templateUrl: './shop-change-password.component.html',
  styleUrls: ['./shop-change-password.component.css']
})
export class ShopChangePasswordComponent implements OnInit {

  shopArray:any[]=[];
  match=false;
  submitted=false;

  constructor( private route:ActivatedRoute,
               private shopService:ShopServiceService,
               private fb:FormBuilder,
               private router:Router) { }

  passForm=this.fb.group({
    opassword:[''],
    npassword:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required,this.confirmPassword()]]
  });

  ngOnInit(): void {
    this.shopService.getShop({id:this.route.snapshot.params['id']}).then((data:any) => {
      console.log(data.data);
      this.shopArray=data.data;
    });
  }

  public get f(){ return this.passForm?.controls; }

  check(){ 
    if(this.passForm.value?.opassword === this.shopArray[0]?.['shop_password']){
      this.match=true;
    }
    else{
      alert("Please enter the password correctly");
      this.passForm.reset();
    }
  }

  confirmPassword():ValidatorFn{
    return (control:AbstractControl):{ [key:string]:any } | null=>
    control.value === this.f?.npassword.value ? null : { confirm:true };
   }

  onSubmit(){
    this.submitted=true;
    this.passForm.markAllAsTouched();
    let sid= { id: this.route.snapshot.params['id'], ...this.passForm.value };
    this.shopService.changePassword(sid).then((res:any) => {
      if(res.alert === 'Success'){
        alert("Password updated successfully");
        this.router.navigate(['/shop/shopmyprofile']);
      }
    });
  }

}
