import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { GuestserviceService } from '../guestservice.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {
proofUrl='';
logoUrl='';
distarray:any[]=[];
placearray:any[]=[];
submitted=false;

  constructor(
    private fb:FormBuilder,
    private guestService:GuestserviceService
  ) { }

  companyForm=this.fb.group({
    company:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    address:['',Validators.required],
    webaddress:['',Validators.required],
    district:['',Validators.required],
    place:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required,this.confirmPassword()]],
    proof:[''],
    logo:['']
  });

  public get f(){ return this.companyForm?.controls; }

  ngOnInit(): void {
    this.guestService.getDistrict().then((dist:any)=>{
      this.distarray=dist;
    });
  }

  proofUpload(event:any){
    let file = event.target.files?.[0];
    if(!file){
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
    this.proofUrl = reader.result as string;
    }
    let formData:FormData = new FormData();
    formData.append('proofImage',file);
    this.guestService.proofImage(formData).then((res:any)=>{
      console.log(res);
      if(res?.url){
        this.companyForm.patchValue({proof:res.url});
      }
    });
  }

  logoUpload(event:any){
    let file = event.target.files?.[0];
    if(!file){
      return;
    }
    const read = new FileReader();
    read.readAsDataURL(file);
    read.onload=()=>{
      this.logoUrl = read.result as string;
    }
    let formData:FormData = new FormData();
    formData.append('logoImage',file);
    this.guestService.logoImage(formData).then((res:any)=>{
      console.log(res);
      if(res?.url){
        this.companyForm.patchValue({logo:res.url});
      }
    });
    }

  confirmPassword():ValidatorFn{
    return (control:AbstractControl):{ [key:string]:any } | null =>
    control.value === this.f?.password.value ? null : { confirm:true }
  }

  getPlace(){
    console.log(this.companyForm.value?.district);
    this.guestService.getPlace({id:this.companyForm.value?.district}).then((p:any)=>{
      this.placearray=p.data;
    });
  }

  companyValidate(){
    console.log(this.companyForm.value?.email);
    this.guestService.companyValidity({email:this.companyForm.value?.email}).then((check:any)=>{
      if(check.alert==='Existing'){
        alert("Data already exists");
        this.companyForm.reset();
      }
    });
  }

  onSubmit(){
    this.submitted=true;
    this.companyForm.markAllAsTouched();
    if(!this.companyForm.valid){
      return;
    }
    else{
      console.log(this.companyForm.value);
      this.guestService.companyRegister(this.companyForm.value).then((data:any)=>{
        console.log(data);
        if(data.alert==='Success'){
          alert("Registered Successfully");
        }
      });
    }
  }
}
