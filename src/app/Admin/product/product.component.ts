import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  submitted=false;
  constructor(private fb:FormBuilder,private route:Router,private adminservice:AdminServiceService) { }

  ngOnInit(): void {
  }

}
