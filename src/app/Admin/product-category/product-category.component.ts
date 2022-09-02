import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  submitted=false;
  id:any;
  constructor(private fb:FormBuilder,private adminservice:AdminServiceService,private route:Router,private ac:ActivatedRoute) { }
  categoryForm=this.fb.group({
    category:['',Validators.required]
  });

  get categoryFormcontrols(){
    return this.categoryForm.controls;
  }

  ngOnInit(): void {
    this.id=this.ac.snapshot.paramMap.get('id')
    console.log(this.id)
    this.adminservice.editCategory({id:this.id}).then((data:any)=>{
      this.categoryForm.patchValue({
        category:data.data[0].productcategory_name
      });
    });
  }
  onSubmit(){
    this.submitted = true;
    if(this.categoryForm.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.categoryForm.value.category?.match(nameexp)){
        console.log(this.categoryForm.value);
        this.adminservice.addCategory(this.categoryForm.value).then((data:any)=>{
        console.log(data);
        alert("Category Added")
        this.categoryForm.reset();
        this.route.navigateByUrl('/admin/viewCategory')
      });
      }
      else{
        alert("Please enter a valid category name")
      }
    }
    else{
      alert("Please provide a valid category name")
    }
  }
  onUpdate(){
    if(this.categoryForm.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.categoryForm.value.category?.match(nameexp)){
        console.log({id:this.id,...this.categoryForm.value});
        this.adminservice.updateCategory({id:this.id,...this.categoryForm.value}).then((data:any)=>{
          if(data.alert==='Success'){
            alert("Category updated");
            this.categoryForm.reset();
            this.route.navigateByUrl('/admin/viewCategory');
          }
        });
      }
      else{
        alert("Please enter a valid category name")
      }
    }
    else{
      alert("Please provide a valid category name");
    }
  }
}
