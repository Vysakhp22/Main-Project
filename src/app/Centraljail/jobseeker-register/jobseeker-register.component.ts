import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-jobseeker-register',
  templateUrl: './jobseeker-register.component.html',
  styleUrls: ['./jobseeker-register.component.css']
})
export class JobseekerRegisterComponent implements OnInit {

  distarray: any[]=[];
  placearray: any[]=[];
  proofUrl='';
  Image='';
  submitted: boolean = false;

  constructor( private Cservice: CentraljailServiceService,
               private fb: FormBuilder,
               private router: Router) { }
  jobSeekerForm=this.fb.group({
    pid:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    place:['',Validators.required],
    district:['',Validators.required],
    proof:[''],
    photo:[''],
    password:['',[Validators.required,Validators.minLength(8)]],
    cpassword:['',[Validators.required,this.confirmPassword()]],
    name:['']
  });

  public get f(){ return this.jobSeekerForm?.controls; }

  ngOnInit(): void {
    this.Cservice.getDistrict().then((data: any) => {
      this.distarray=data;
    });
  }

  getPlace(){
    this.Cservice.getPlace({id: this.jobSeekerForm.value.district}).then((data: any)  => {
      this.placearray=data.data;
    });
  }

  confirmPassword():ValidatorFn{
    return (control:AbstractControl):{ [key:string]:any } | null =>
    control.value === this.f?.password.value ? null : { confirm:true }
  }

  proofUpload(event:any){
    let file = event.target.files?.[0];
    if(!file){
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.proofUrl = reader.result as string;
    };
    let formData:FormData =new FormData();
    formData.append('proof',file);
    this.Cservice.proofUpload(formData).then((res:any)=>{
      console.log(res);
      if(res?.url){
        this.jobSeekerForm.patchValue({proof:res.url});
      }
    });
  }

  photoUpload(event:any){
    let file = event.target.files?.[0];
    if(!file){
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.Image = reader.result as string;
    };
    let formData:FormData =new FormData();
    formData.append('photo',file);
    this.Cservice.ImageUpload(formData).then((res:any)=>{
      console.log(res);
      if(res?.url){
        this.jobSeekerForm.patchValue({photo:res.url});
      }
    });
  }

  getName(){
    this.Cservice.getPrisoner({id: this.jobSeekerForm.value.pid}).then((res: any) => {
      if(res.alert === 'Success'){
        this.jobSeekerForm.patchValue({
          name:res.data[0].prisoner_name
        });
      }
      else{
        alert("Person doesn't exist");
        this.jobSeekerForm.reset();
      }
    });
  }

  isValid(){
    this.Cservice.jobSeekerValid({email: this.jobSeekerForm.value.email}).then((res: any) => {
      if(res.alert==='Existing'){
        alert("Data already exist");
        this.jobSeekerForm.reset();
      }
    });
  }

  onSubmit(){
    console.log(this.jobSeekerForm.value);
    this.submitted=true;
    this.jobSeekerForm.markAllAsTouched();
    if(!this.jobSeekerForm.valid){
      return;
    }
    else{
      this.Cservice.jobSeekerRegister(this.jobSeekerForm.value).then((res: any) => {
        if(res.alert === 'Success'){
          alert('Registered Successfully');
          this.jobSeekerForm.reset();
          this.router.navigate(['/centraljail']);
        }
      });
    }
  }

}
