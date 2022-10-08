import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  id:any;
  submitted=false;

  constructor( private route:ActivatedRoute,
               private fb:FormBuilder,
               private userService:UserServiceService,
               private router:Router) { }

  UserForm=this.fb.group({
    uname:['',Validators.required],
    address:['',Validators.required],
    uid:['']
  });

  public get f(){ return this.UserForm?.controls; }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userService.getUser( {id:this.id} ).then((data:any) => {
      console.log(data);    
      this.UserForm.patchValue({
        uname:data.data[0]?.['user_name'],
        address:data.data[0]?.['user_address'],
        uid:data.data[0]?.['user_id']
      });
    });
  }

  onSubmit(){
    this.submitted=true;
    this.UserForm.markAllAsTouched();
    if(!this.UserForm.valid){
      return;
    }
    else{
      this.userService.updateUser(this.UserForm.value).then((res:any) => {
        if(res.alert === 'Success'){
          alert("Data updated successfully");
          this.router.navigate(['/user/usermyprofile']);
        }
      });
    }
  }

}
