import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-centraljail-change-password',
  templateUrl: './centraljail-change-password.component.html',
  styleUrls: ['./centraljail-change-password.component.css']
})
export class CentraljailChangePasswordComponent implements OnInit {

  cid:any;
  cArray:any;
  submitted=false;
  match=false;

  constructor( private route: ActivatedRoute,
               private fb: FormBuilder,
               private service: CentraljailServiceService,
               private router: Router) { }

  passForm=this.fb.group({
    opassword:[''],
    npassword:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required, this.confirmPassword()]]
  });

  public get f() { return this.passForm?.controls; }

  ngOnInit(): void {
    this.cid=this.route.snapshot.params['id'];
    this.service.getJail({id: this.cid}).then((data: any) => {
      this.cArray=data.data;
    });
  }

isMatch(){
  if(this.passForm.value.opassword === this.cArray[0].centraljail_password){
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
  this.service.changePassword({id: this.cid, ...this.passForm.value}).then((res:any) => {
    if(res.alert === 'Success'){
      alert("Password updated successfully");
      this.router.navigate(['/centraljail/centraljailmyprofile']);
    }
  });
 }

}
