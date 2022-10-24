import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.css']
})
export class JobCategoryComponent implements OnInit {
  submitted: boolean = false;

  constructor( private fb: FormBuilder,
    private adminService: AdminServiceService,
    private router: Router) { }

  jcategoryForm=this.fb.group({
    category:['',Validators.required]
  });

  public get f() { return this.jcategoryForm?.controls; }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.jcategoryForm.markAllAsTouched();
    if(this.jcategoryForm.invalid){
      return;
    }
    this.adminService.jobCategory(this.jcategoryForm.value).then((res: any) => {
      if(res.alert === 'Success'){
        alert("Data inserted successfully");
        this.jcategoryForm.reset();
        this.router.navigate(['/admin']);
      }
    });
  }

}
