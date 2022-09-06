import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestserviceService } from '../guestservice.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  submitted=false;
  public data=false;


  constructor(
    private fb:FormBuilder,
    private guestService:GuestserviceService,
    private route:Router ) { }
  newUser=this.fb.group({
    username:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    gender:['',Validators.required],
    address:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required,this.confirmPassword()]]
  });



  public get f() { return this.newUser?.controls }


  ngOnInit(): void {
  }


  onSubmit(){
    this.submitted=true;
    if (!this.newUser.valid) {
      return;
    }
    console.log(this.newUser.value);
    this.guestService.userRegister(this.newUser.value).then((data:any)=>{
      console.log(data);
      if(data.alert==='Success'){
        alert("Registered Successfully");
        this.newUser.reset();
        this.route.navigateByUrl('/guestLogin');
      }
    });
  }
  checkValid(){
    var emailexp = /^([a-zA-Z0-9.\_\-])+\@([a-zA-Z0-9.\_\-])+\.([a-zA-Z]{2,4})$/;
    if(this.newUser.value.email?.match(emailexp)){
      this.guestService.userValidity({email:this.newUser.value.email}).then((check:any)=>{
        if(check.alert==='Existing'){
          // alert("Data already exists");
          // this.newUser.reset();
          this.data=true;
        }
      });
    }
  }
  confirmPassword():ValidatorFn{
   return (control:AbstractControl):{ [key:string]:any } | null=>
   control.value === this.f?.password.value ? null : { confirm:true };
  }
}
