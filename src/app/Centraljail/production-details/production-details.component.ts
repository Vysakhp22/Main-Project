import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-production-details',
  templateUrl: './production-details.component.html',
  styleUrls: ['./production-details.component.css']
})
export class ProductionDetailsComponent implements OnInit {

  productArray:any[]=[];
  submitted=false;
  dateValid=true;

  constructor(private fb: FormBuilder,
              private centraljailService: CentraljailServiceService,
              private router: Router) { }

  productForm=this.fb.group({
    pid:['',Validators.required],
    mdate:['',Validators.required],
    edate:['',Validators.required],
    qty:['',Validators.required]
  });

  public get f() { return this.productForm?.controls; }

  ngOnInit(): void {
    this.centraljailService.viewProduct().then((data: any) => {
      this.productArray=data;
    });
  }

  checkDate(){
   if(+new Date(this.productForm.value.mdate as string) > +new Date(this.productForm.value.edate as string)){
      this.dateValid=false;
      return;
   }
   this.dateValid=true;
  }

  onSubmit(){
    this.submitted=true;
    this.productForm.markAllAsTouched();
    let cid={
      id:localStorage.getItem('Id'), ...this.productForm.value
    };
    this.centraljailService.addProductiondetails(cid).then((res: any) => {
      if(res.alert === "Success"){
        alert('Production details added succefully');
        this.productForm.reset();
        this.router.navigate(['/centraljail']);
      }
      else{
        alert('Production details already exist');
        this.productForm.reset();
      }
    });

  }

}
