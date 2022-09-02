import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
id:any;

  constructor(private adminservice:AdminServiceService,private route:Router,private ac:ActivatedRoute) { }
  districtform=new FormGroup({
    district:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    this.id=this.ac.snapshot.paramMap.get("id")
    this.adminservice.editDist({id:this.id}).then((data:any)=>{
      this.districtform.patchValue({
        district:data.data[0].district_name
      })
    })
  }

  districtSubmit(){
    if(this.districtform.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.districtform.value.district?.match(nameexp)){
        console.log(this.districtform.value);
         this.adminservice.districtRegister(this.districtform.value).then((data:any)=>{
         console.log(data);
         if(data.alert==='Success'){
          alert('District Inserted');
        this.districtform.reset();
        this.route.navigateByUrl('/admin/viewdistrict');
         }
         else if(data.alert=='Existing'){
          alert("Data Already Exist");
         }
         else{
          alert("Failed");
         }
         });
      }
      else{
        alert("Please enter a valid district name");
      }
    }
    else{
      alert("Please provide a district name");
    }
  }
  updateSubmit(){
    if(this.districtform.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.districtform.value.district?.match(nameexp)){
        console.log(this.districtform.value);
        this.adminservice.updateDist({id:this.id,...this.districtform.value}).then((data:any)=>{
          if(data.alert==='Success'){
            alert("Data Updated");
            this.districtform.reset();
             this.route.navigateByUrl('/admin/viewdistrict');
          }
          else if(data.alert==='Existing'){
            alert("Data Already Exist");
          }
          else{
            alert("Failed");
          }
        });

      }
      else{
        alert("Please enter a valid district name");
      }
    }
    else{
      alert("Please provide a district name");
    }
  }

}
