import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.css']
})
export class ProductRateComponent implements OnInit {

  productArray:any[]=[];
  submitted=false;

  constructor( private fb: FormBuilder,
               private centraljailService: CentraljailServiceService,
               private router: Router) { }

  rateForm=this.fb.group({
    pid:['',Validators.required],
    prate:['',Validators.required]
  });

  public get f() { return this.rateForm?.controls; }

  ngOnInit(): void {
    this.centraljailService.viewProduct().then((data: any) => {
      this.productArray=data;
    });
  }

  onSubmit(){
    this.submitted=true;
    this.rateForm.markAllAsTouched();
    console.log(this.rateForm.value);
    let cid={
      id: localStorage.getItem('Id'), ...this.rateForm.value
    };
    this.centraljailService.addproductRate(cid).then((res: any) => {
      if(res.alert === "Success"){
        alert('Product rate added succefully');
        this.rateForm.reset();
        this.router.navigate(['/centraljail/viewproductrates']);
      }
      else{
        alert('Product rate already exist');
        this.rateForm.reset();
      }
    });
  }

}
