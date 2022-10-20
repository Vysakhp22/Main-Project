import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-product-stock',
  templateUrl: './product-stock.component.html',
  styleUrls: ['./product-stock.component.css']
})
export class ProductStockComponent implements OnInit {

  productArray: any[]=[];
  submitted=false;
  stockArray:any []=[];

  constructor( private centraljailService: CentraljailServiceService,
               private fb: FormBuilder,
               private router: Router) { }
  stockForm=this.fb.group({
      pid:['',Validators.required],
      stock:['',Validators.required],
      qty:['']
  });

  public get f() { return this.stockForm?.controls; }

  ngOnInit(): void {
    this.centraljailService.viewProduct().then((data: any) => {
      this.productArray=data;
    });
  }

  onChange(){
    console.log(this.stockForm.value.pid);
    this.centraljailService.getStock({id: localStorage.getItem('Id'),pid: this.stockForm.value.pid}).then((res: any) => {
        this.stockArray=res.data;
        console.log(this.stockArray);
    });
    if(this.stockArray != undefined){
      console.log('hai');
    }
  }

  onSubmit(){
    this.submitted=true;
    this.stockForm.markAllAsTouched();
    if(!this.stockForm.valid){
      return;
    }
    else{
      if(this.stockArray != undefined){
        this.stockForm.patchValue({
          qty:(Number(this.stockArray[0].productstock_totalquantity) + Number(this.stockForm.value.stock)).toString()
        });
      }
      console.log(this.stockForm.value.qty);
      console.log(this.stockForm.value);
      this.centraljailService.addStock({id:localStorage.getItem('Id'), ... this.stockForm.value}).then((res: any) =>{
          if(res.alert === 'Success'){
            alert('Product stock added Succesfully');
            this.stockForm.reset();
          }
          else if(res.alert === 'Updated'){
            alert('Product stock updated Succesfully');
            this.stockForm.reset();
          }
      });
    }
  }

}
