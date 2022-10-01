import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestserviceService } from '../guestservice.service';

@Component({
  selector: 'app-guestlogin',
  templateUrl: './guestlogin.component.html',
  styleUrls: ['./guestlogin.component.css']
})
export class GuestloginComponent implements OnInit {

  logArray:any[]=[];

  constructor( private fb:FormBuilder,
              private service:GuestserviceService,
              private route:Router) { }
  loginForm = this.fb.group({
    email:[''],
    password:['']
  });

  ngOnInit(): void {
    localStorage.clear();
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.service.guestLogin(this.loginForm.value).then(( res:any ) => {
      this.logArray=res;
      console.log(res);
      if(res.alert === 'Admin'){
        this.route.navigate(['/admin']);
        localStorage.setItem('Id',res.data[0].admin_id);
        localStorage.setItem('User','Admin');
      }
      else if(res.alert === 'Company'){
        this.route.navigateByUrl('/company');
        localStorage.setItem('Id',res.data[0].company_id);
        localStorage.setItem('User',res.data[0].company_name);
      }
      else if(res.alert === 'Central jail'){
        this.route.navigate(['/centraljail']);
        localStorage.setItem('Id',res.data[0].centraljail_id);
        localStorage.setItem('User',res.data[0].centraljail_name)
      }
      else if(res.alert === 'Shop'){
        this.route.navigate(['/shop']);
        localStorage.setItem('Id',res.data[0].shop_id);
        localStorage.setItem('User',res.data[0].shop_name);
      }
      else if(res.alert === 'User'){
        this.route.navigate(['/user']);
        localStorage.setItem('Id',res.data[0].user_id);
        localStorage.setItem('User',res.data[0].user_name);
      }
      else{
        alert('Invalid Email or Password');
        this.loginForm.reset();
      }
    });
  }

}
