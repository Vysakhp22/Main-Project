import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-jailsuperintendent-register',
  templateUrl: './jailsuperintendent-register.component.html',
  styleUrls: ['./jailsuperintendent-register.component.css']
})
export class JailsuperintendentRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
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

}
