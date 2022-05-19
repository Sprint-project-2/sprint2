import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.css']
})
export class ExistingComponent implements OnInit {

  name:string="";
  email:string="";
  contactno:string="";
  city:string="";
  pincode:string="";
  dob:string="";

    form=new FormGroup({
    fname:new FormControl('',[Validators.required , Validators.minLength(4)]),
    lname:new FormControl('',[Validators.required , Validators.minLength(4)]),
    emailid:new FormControl('',[Validators.required , Validators.email]),
    contactno:new FormControl('',[Validators.required , Validators.minLength(10)]),
    city:new FormControl('',[Validators.required ]),
    pincode:new FormControl('',[Validators.required , Validators.minLength(6)]),
    dateofbirth:new FormControl('',[Validators.required]),
  });

constructor(private router: Router) {

}
  ngOnInit(): void {
  }

  get f()
  {
    return this.form.controls;
  }

  submit():void
  {
    alert("Registered successfully");    
  }

}
