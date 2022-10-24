import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-orderproduct',
  templateUrl: './orderproduct.component.html',
  styleUrls: ['./orderproduct.component.css']
})
export class OrderproductComponent implements OnInit {

  orderForm!: FormGroup;

  constructor( private fb: FormBuilder,
               private Sservice: ShopServiceService,
               private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.orderForm=this.fb.group({
      cname:[''],
      productname:[''],
      productrate:[''],
      quantity:[''],
      total:[''],
    });
    this.Sservice.order({id: this.route.snapshot.params['id']}).then((data: any) => {
      this.orderForm.patchValue({
        cname:data.data[0].centraljail_name,
        productname:data.data[0].product_name,
        productrate:data.data[0].productrate_rate,
      });
    });

    this.orderForm.valueChanges.subscribe(()=>{
      let quantity=this.orderForm.value.quantity;
      this.orderForm.patchValue({
        total: Number(quantity) * Number(this.orderForm.value.productrate)
      }, {emitEvent: false});
    });
  }

}
