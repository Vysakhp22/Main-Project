import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-prisoner-registration',
  templateUrl: './prisoner-registration.component.html',
  styleUrls: ['./prisoner-registration.component.css']
})
export class PrisonerRegistrationComponent implements OnInit {

  ImageUrl='';
  submitted=false;
  constructor(private fb:FormBuilder,
    private service:CentraljailServiceService) { }

    prisonerForm=this.fb.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
        gender:['',Validators.required],
        address:['',Validators.required],
        pid:['',Validators.required],
        details:['',Validators.required],
        date:['',Validators.required],
        duration:['',Validators.required],
        image:[]
    });

    public get f(){ return this.prisonerForm?.controls; }

    imageUpload(event:any){
      let file = event.target.files?.[0];
      if(!file){
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>{
      this.ImageUrl = reader.result as string;
      }
      let formData:FormData = new FormData();
      formData.append('prisonerImg',file);
      this.service.prisonerImage(formData).then((res:any)=>{
        console.log(res);
        if(res?.url){
          this.prisonerForm.patchValue({image:res.url});
        }
      });
    }

    prisonerValid(){
      console.log( this.prisonerForm.value?.email );
      this.service.prisonerCheck({email:this.prisonerForm.value?.email}).then((res:any)=>{
        console.log(res);
        if(res.alert === 'Existing'){
          alert("Data already exist");
          this.prisonerForm.reset();
        }
      });
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.prisonerForm.markAllAsTouched();
    if(!this.prisonerForm.valid){
      return;
    }
    else{
    console.log(this.prisonerForm.value);
    this.service.prisonerRegister(this.prisonerForm.value).then(( res:any )=>{
      console.log(res);
      if(res.alert==='Success'){
        alert("Registered Successfully");
      }
    });
  }
}
}
