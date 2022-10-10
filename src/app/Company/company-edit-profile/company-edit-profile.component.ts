import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-company-edit-profile',
  templateUrl: './company-edit-profile.component.html',
  styleUrls: ['./company-edit-profile.component.css']
})
export class CompanyEditProfileComponent implements OnInit {

  submitted=false;

  constructor( private route: ActivatedRoute,
               private companyService: CompanyServiceService,
               private fb: FormBuilder,
               private router: Router ) { }

  companyeditForm=this.fb.group({
    cname:['',Validators.required],
    address:['',Validators.required],
    contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    cid:['']
  });

  public get f() { return this.companyeditForm?.controls; }

  ngOnInit(): void {
    this.companyService.getCompany({id: this.route.snapshot.params['id']}).then((data:any) => {
      this.companyeditForm.patchValue({
        cname:data.data[0].company_name,
        address:data.data[0].company_address,
        contact:data.data[0].company_contactno,
        cid:data.data[0].company_id
      });
    });
  }
  onSubmit(){
    this.submitted=true;
    this.companyeditForm.markAllAsTouched();
    this.companyService.updateCompany(this.companyeditForm.value).then((res:any) => {
      if(res.alert === 'Success'){
        alert("Data updated successfully");
        this.router.navigate(['/company/companymyprofile']);
      }
    });
  }

}
