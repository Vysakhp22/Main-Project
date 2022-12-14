import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  submitted=false;
  catarray:any[]=[];
  imageUrl='';

  constructor(private fb:FormBuilder,private route:Router,private adminservice:AdminServiceService) { }
  productForm=this.fb.group({
    catid:['',Validators.required],
    product:['',Validators.required],
    details:['',Validators.required],
    image:['',Validators.required]
  })
  ngOnInit(): void {
    this.adminservice.viewCategory().then((data:any)=>{
      this.catarray=data;
    });
  }

  fileUpload(event:any){
    let file = event.target.files?.[0];
    if(!file){
      return;
    }
    const reader =new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.imageUrl=reader.result as string;
    }
    let formData: FormData=new FormData();
    formData.append("productimg",file);
    this.adminservice.productImg(formData).then((res:any)=>{
      console.log(res);
      if(res?.url){
        this.productForm.patchValue({image:res.url});
      }
      //console.log(this.productForm.value);
    });
  }

  get productFormcontrols(){
    return this.productForm.controls;
  }

onSubmit(){
  this.submitted=true;
  if(this.productForm.valid){
    var nameexp = /^([A-Za-z ]*)$/;
    if(this.productForm.value.product?.match(nameexp)){
      this.adminservice.productRegis(this.productForm.value).then((data:any)=>{
      console.log(data)
      if(data.alert==='Success'){
        alert("Product Added");
      }
      else if(data.alert==='Existing'){
        alert("Product already exist");
      }
      else{
        alert("failed");
      }
  });
    }
    else{
      alert("please enter a valid product name");
    }
  }
  else{
    alert("please fill the data");
  }
}

}
