import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { GuestserviceService } from '../guestservice.service';

@Component({
  selector: 'app-shop-registration',
  templateUrl: './shop-registration.component.html',
  styleUrls: ['./shop-registration.component.css']
})
export class ShopRegistrationComponent implements OnInit {

  proofUrl='';
  logoUrl='';
  distarray:any[]=[];
  placearray:any[]=[];
  submitted=false;

  constructor(
    private fb:FormBuilder,
    private guestService:GuestserviceService
  ) { }

  shopForm=this.fb.group({
    shopname:['',Validators.required],
    contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    email:['',[Validators.required,Validators.email]],
    address:['',Validators.required],
    district:['',Validators.required],
    place:['',Validators.required],
    logo:[''],
    proof:[''],
    owner:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required,this.confirmPassword()]]
  });

  public get f(){ return this.shopForm?.controls; }

proofUpload(event:any){
  let file = event.target.files?.[0];
  if(!file){
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload=()=>{
    this.proofUrl = reader.result as string;
  };
  let formData:FormData =new FormData();
  formData.append('proofImage',file);
  this.guestService.shopProof(formData).then((res:any)=>{
    console.log(res);
    if(res?.url){
      this.shopForm.patchValue({proof:res.url});
    }
  });
}

logoUpload(event:any){
  let file = event.target.files?.[0];
  if(!file){
    return;
  }
  const img = new FileReader();
  img.readAsDataURL(file);
  img.onload=()=>{
    this.logoUrl = img.result as string;
  };
  let formData:FormData = new FormData();
  formData.append('logoImage',file);
  this.guestService.shopLogo(formData).then((res:any)=>{
    console.log(res);
    if(res?.url){
      this.shopForm.patchValue({logo:res.url});
    }
  });
}

getPlace(){
  this.guestService.getPlace({id:this.shopForm.value?.district}).then((pl:any)=>{
    this.placearray=pl.data;
  });
}

  ngOnInit(): void {
    this.guestService.getDistrict().then((dist:any)=>{
      this.distarray=dist;
    });
  }

  confirmPassword():ValidatorFn{
    return (control:AbstractControl):{ [key:string]:any } | null =>
    control.value === this.f?.password.value ? null : { confirm:true }
  }

  checkEmail(){
    console.log(this.shopForm.value?.email);
    this.guestService.shopValid({email:this.shopForm.value.email}).then((res:any)=>{
      if(res.alert==='Existing'){
        alert("Data already exist");
        this.shopForm.reset();
      }
    });
  }

  onSubmit(){
    this.submitted=true;
    this.shopForm.markAllAsTouched();
    if(!this.shopForm.valid){
      return;
    }
    else{
      console.log(this.shopForm.value);
      this.guestService.shopRegister( this.shopForm.value ).then((res:any)=>{
        console.log(res);
        if(res.alert==='Success'){
          alert("Registerd Successfully");
        }
      });
    }
  }
}
