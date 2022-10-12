import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-centraljail-edit-profile',
  templateUrl: './centraljail-edit-profile.component.html',
  styleUrls: ['./centraljail-edit-profile.component.css']
})
export class CentraljailEditProfileComponent implements OnInit {

  submitted=false;

  constructor( private route: ActivatedRoute,
               private fb: FormBuilder,
               private service: CentraljailServiceService,
               private router: Router) { }
  
  jaileditForm=this.fb.group({
    name:['',Validators.required],
    contact:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    address:['',Validators.required],
    cid:['']
  });

  public get f() { return this.jaileditForm?.controls; }

  ngOnInit(): void {
    this.service.getJail({ id: this.route.snapshot.params['id'] }).then((data: any) => {
      this.jaileditForm.patchValue({
        name:data.data[0]?.centraljail_name,
        contact:data.data[0]?.centraljail_contactno,
        address:data.data[0]?.centraljail_address,
        cid:data.data[0]?.centraljail_id
      });
    });
  }

  onSubmit(){
    this.submitted=true;
    this.jaileditForm.markAllAsTouched();
    this.service.updateJail(this.jaileditForm.value).then((res: any) => {
      if(res.alert === 'Success'){
        alert("Data updated successfully");
        this.router.navigate(['/centraljail/centraljailmyprofile']);
      }
    });
  }

}
