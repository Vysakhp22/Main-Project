import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  distarray:any[]=[];
  submitted = false;
  constructor(private adminservice:AdminServiceService,private fb:FormBuilder,private route:Router) { }
  placeForm=this.fb.group({
    distid:['',Validators.required],
    place:['',Validators.required]
  });
  get placeFormControl() {
    return this.placeForm.controls;
  }

  ngOnInit(): void {
    this.adminservice.viewdistrict().then((data:any)=>{
      this.distarray=data;
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.placeForm.valid){
    var nameexp = /^([A-Za-z ]*)$/;
    if(this.placeForm.value.place?.match(nameexp)){
      console.log(this.placeForm.value);
      this.adminservice.placeRegister(this.placeForm.value).then((data:any)=>{
      console.log(data);
      alert("Place Inserted");
      this.placeForm.reset();
      this.route.navigateByUrl('/admin/viewplace');
    })
    }
    else{
      alert("Please enter a valid place name");
    }
  }
  else{
      alert("Please provide a place name");
  }
}

}
