import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-centraljail-registration',
  templateUrl: './centraljail-registration.component.html',
  styleUrls: ['./centraljail-registration.component.css']
})
export class CentraljailRegistrationComponent implements OnInit {

  distarray:any[]=[];
  placearray:any[]=[];
  submitted=false;

  constructor( private fb:FormBuilder,
                private adminService:AdminServiceService) { }
  jailForm=this.fb.group({
    jname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    contact:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    address:['',Validators.required],
    webaddress:['',Validators.required],
    district:['',Validators.required],
    place:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required,this.confirmPassword()]]
  });

  public get f() { return this.jailForm?.controls; }

  ngOnInit(): void {
    this.adminService.viewdistrict().then((data:any)=>{
      this.distarray=data;
    });
  }

  getPlace(){
    console.log(this.jailForm.value?.district);
    this.adminService.getPlace({id:this.jailForm.value?.district}).then((res:any)=>{
      this.placearray=res.data;
    });
  }

  confirmPassword():ValidatorFn{
    return (control:AbstractControl):{ [key:string]:any } | null =>
    control.value === this.f?.password.value ? null : { confirm:true}
  }

  isValid(){
    this.adminService.isJailValid({email:this.jailForm.value?.email}).then((data:any)=>{
      console.log(data);
      if(data.alert === 'Existing'){
        alert("Data already exist");
        this.jailForm.reset();
      }
    });
  }

  onSubmit(){
    this.submitted=true;
    this.jailForm.markAllAsTouched();
    console.log(this.jailForm.value);
    if(!this.jailForm.valid){
      return;
    }
    else{
      this.adminService.centraljailRegister(this.jailForm.value).then((data:any)=>{
        console.log(data);
        if(data.alert === 'Success'){
          alert("Registered successfully");
        }
      });
    }
  }

}
