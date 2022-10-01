import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-jailsuperintendent-register',
  templateUrl: './jailsuperintendent-register.component.html',
  styleUrls: ['./jailsuperintendent-register.component.css']
})
export class JailsuperintendentRegisterComponent implements OnInit {

  imgUrl='';
  submitted=false;

  constructor(private fb:FormBuilder,
              private centralService:CentraljailServiceService) { }
  superIntendentForm=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    gender:['',Validators.required],
    address:['',Validators.required],
    qualify:['',Validators.required],
    image:['']
  });

  ngOnInit(): void {
  }

  public get f(){ return this.superIntendentForm?.controls; }
  imageUpload(event:any){
    console.log("img");
    let file = event.target.files?.[0];
    if(!file){
      return;
    }
    const read = new FileReader();
    read.readAsDataURL(file);
    read.onload=()=>{
      this.imgUrl = read.result as string;
    }
    let formData:FormData = new FormData();
    formData.append('superImg',file);
    this.centralService.superintendentImg(formData).then((res:any)=>{
      console.log(res);
      if(res?.url){
        this.superIntendentForm.patchValue({image:res.url});
      }
    });
    }

  onSubmit(){
    this.submitted=true;
    this.superIntendentForm.markAllAsTouched();
    if(!this.superIntendentForm.valid){
      return;
    }
    console.log(this.superIntendentForm.value);
    this.centralService.superIntendentRegister(this.superIntendentForm.value).then((res:any)=>{
      console.log(res);
      if(res.alert==='Success'){
        alert("Registered Successfully");
      }
    });
  }

}
