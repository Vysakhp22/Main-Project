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
  stock:boolean = true;

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
    this.centraljailService.getStock({id: localStorage.getItem('Id'),pid: this.stockForm.value.pid}).then((res: any) => {
      console.log(res);
      if(res.alert === "Failed"){
        this.stock = false;
      }
      else{
        this.stockArray=res.data;
      }
    });
  }

  onSubmit(){
    this.submitted=true;
    this.stockForm.markAllAsTouched();
    if(!this.stockForm.valid){
      return;
    }
    else{
      if(this.stock === true){
        this.stockForm.patchValue({
          qty:(Number(this.stockArray[0].productstock_totalquantity) + Number(this.stockForm.value.stock)).toString()
        });
      }

      this.centraljailService.addStock({id:localStorage.getItem('Id'), ... this.stockForm.value}).then((res: any) =>{
        console.log(res);
          if(res.alert === 'Success'){
            alert('Product stock added Succesfully');
            this.stockForm.reset();
            this.router.navigate(['/centraljail/viewStock']);
          }
          else if(res.alert === 'Updated'){
            alert('Product stock updated Succesfully');
            this.stockForm.reset();
            this.router.navigate(['/centraljail/viewStock']);

          }
      });
    }
  }

}
