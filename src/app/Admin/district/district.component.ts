import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {


  constructor(private adminservice:AdminServiceService,private route:Router) { }
  districtform=new FormGroup({
    district:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  districtSubmit(){
    if(this.districtform.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.districtform.value.district?.match(nameexp)){
        console.log(this.districtform.value)
         this.adminservice.districtRegister(this.districtform.value).then((data:any)=>{
         console.log(data)
         })
        alert('District Inserted')
        this.districtform.reset()
        this.route.navigateByUrl('/admin/viewdistrict')
      }
      else{
        alert("Please enter a valid district name")
      }
    }
    else{
      alert("Please provide a district name")
    }
  }

}
