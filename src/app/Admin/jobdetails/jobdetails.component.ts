import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  catArry: any[]=[];
  submitted: boolean = false;

  constructor( private fb: FormBuilder,
               private adminService: AdminServiceService,
               private router: Router) { }

  jdetailsForm=this.fb.group({
    catid:['',Validators.required],
    jname:['',Validators.required],
    jdesc:['',Validators.required]
  });

  public get f() { return this.jdetailsForm?.controls; }

  ngOnInit(): void {
    this.adminService.viewJobcategory().then((data: any) => {
      console.log(data);
      this.catArry=data
    });
  }

  onSubmit(){
    this.submitted=true;
    this.jdetailsForm.markAllAsTouched();
    if(this.jdetailsForm.invalid){
      return;
    }
    this.adminService.addJob(this.jdetailsForm.value).then((res: any) => {
      if(res.alert === 'Success'){
        alert("Data inserted successfully");
        this.jdetailsForm.reset();
        this.router.navigate(['/admin/viewjobdetails']);
      }
    });
  }

}
