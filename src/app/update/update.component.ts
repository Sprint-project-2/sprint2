import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    form=new FormGroup({
    emailid:new FormControl('',[Validators.required , Validators.email]),
    contactno:new FormControl('',[Validators.required , Validators.minLength(10)]),
    city:new FormControl('',[Validators.required ]),
    pincode:new FormControl('',[Validators.required , Validators.minLength(6)]),
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
    alert("Updated successfully");    
  }

}
