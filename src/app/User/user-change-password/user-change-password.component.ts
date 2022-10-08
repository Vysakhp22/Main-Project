import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {

password:any;
id:any;
dataArray:any[]=[];
matching=false;
submitted=false;

  constructor( private userService:UserServiceService,
               private fb:FormBuilder,
               private route:ActivatedRoute,
               private router:Router) { }

  passForm=this.fb.group({
    opassword:[''],
    npassword:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required,this.confirmPassword()]]
  });

  public get f() { return this.passForm?.controls; }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userService.getUser({id:this.id}).then((res:any) => {
      this.dataArray=res.data;
    });
  }

  isMatch(){
    if(this.dataArray[0]?.user_password === this.passForm.value?.opassword){
      this.matching=true;
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
    let uid={id:this.id,...this.passForm.value };
    console.log(uid);
    this.userService.changePassword(uid).then((res:any) => {
      if(res.alert === 'Success'){
        alert("Password updated successfully");
        this.router.navigate(['/user/usermyprofile']);
      }
    });
   }
}
