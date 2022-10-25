import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-jobvacancy',
  templateUrl: './jobvacancy.component.html',
  styleUrls: ['./jobvacancy.component.css']
})
export class JobvacancyComponent implements OnInit {

  detArr: any[]=[];
  submitted: boolean = false;
  vacArray:any [] = [];
  vac: boolean = true;
  date: boolean = true;

  constructor( private Cservice: CompanyServiceService,
               private fb: FormBuilder,
              private router: Router) { }

  jobvacForm=this.fb.group({
    detid:['',Validators.required],
    jobvac:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    ldate:['',Validators.required],
    tvac:['']
  });

  public get f(){ return this.jobvacForm?.controls; }

  ngOnInit(): void {
    this.Cservice.getJobdetails().then((data: any) => {
      this.detArr=data;
    });
  }

  onSelect(){
   this.Cservice.onJobdetSelect({cid: localStorage.getItem('Id'), detid: this.jobvacForm.value.detid}).then((res: any) =>{
    if(res.alert === 'Failed'){
      this.vac = false;
      console.log('failed');
      console.log(this.vac);
    }
    else{
      this.vacArray=res.data;
    }
   });
  }

  dateCheck(){
    this.date=true;
    let c=new Date();
    if(+new Date(this.jobvacForm.value.ldate as string) < + (c)){
      this.date = false;
    }
  }

  onSubmit(){
    this.submitted=true;
    this.jobvacForm.markAllAsTouched();
    if(this.vac === false){
      console.log('if');
      let job={cid: localStorage.getItem('Id'), ...this.jobvacForm.value}
      this.Cservice.addVaccancy(job).then((res: any) => {
      if(res.alert === 'Success'){
        alert("Vaccancy added Successfully");
        this.jobvacForm.reset();
        this.router.navigate(['/company/viewjobvacancy']);
      }
    });
    }
    else{
      this.jobvacForm.patchValue({
        tvac:(Number(this.vacArray[0].jobvac_nov) + Number(this.jobvacForm.value.jobvac)).toString()
      });
      let job={cid: localStorage.getItem('Id'), ...this.jobvacForm.value}
      this.Cservice.addVaccancy(job).then((res: any) => {
      if(res.alert === 'Updated'){
        alert("Vaccancy Updated Successfully");
        this.jobvacForm.reset();
        this.router.navigate(['/company/viewjobvacancy']);
      }
    });
    }

  }

}
