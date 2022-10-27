import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JobseekerServiceService } from '../jobseeker-service.service';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {

  jobarray: any[]=[];
  jcatarray: any[]=[];

  constructor( private jobService: JobseekerServiceService,
               private fb: FormBuilder,
               private router: Router ) { }

    jobForm=this.fb.group({
      jcatid:['']
    });

  ngOnInit(): void {
    this.jobService.getallJobs().then((res: any) => {
      this.jobarray=res;
      console.log(this.jobarray);
    });
    this.jobService.getjobCategory().then((res: any) => {
      this.jcatarray=res;
    });
  }

  onChange(){
    this.jobService.categoryBased({id: this.jobForm.value.jcatid}).then((data: any) => {
      this.jobarray=data.data;
      console.log(data);
    });
  }

  onClick(id: any){
    this.jobService.sendApplication({vcid: id, sid: localStorage.getItem('Id')}).then((res: any) => {
      if(res.alert === 'Success'){
        alert("Applied Successfully");
        this.router.navigate(['/prisoner']);
      }
    });
  }

}
