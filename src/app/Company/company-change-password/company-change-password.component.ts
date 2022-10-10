import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-company-change-password',
  templateUrl: './company-change-password.component.html',
  styleUrls: ['./company-change-password.component.css']
})
export class CompanyChangePasswordComponent implements OnInit {

  cArray:any[]=[];
  match=false;
  submitted=false;

  constructor( private fb: FormBuilder,
               private route: ActivatedRoute,
               private companyService: CompanyServiceService,
               private router: Router) { }
  
  passForm=this.fb.group({
    opassword:[''],
    npassword:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required,this.confirmPassword()]]
  });

  public get f() { return this.passForm?.controls; }

  ngOnInit(): void {
    this.companyService.getCompany({id: this.route.snapshot.params['id']}).then((res:any) => {
      this.cArray=res.data;
    });
  }

  isMatch(){
    if(this.cArray[0].company_password === this.passForm.value.opassword){
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
    this.companyService.changePassword({id: this.route.snapshot.params['id'], ...this.passForm.value}).then((res:any) =>{
      if(res.alert === 'Success'){
        alert("Password updated successfully");
        this.router.navigate(['company/companymyprofile']);
      }
    });
   }

}
