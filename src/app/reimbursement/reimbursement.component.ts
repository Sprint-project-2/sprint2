import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {

    form=new FormGroup({
    billno:new FormControl('',[Validators.required , Validators.minLength(10)]),
    billingamount:new FormControl('',[Validators.required , Validators.minLength(5)]),
    billdate:new FormControl('',[Validators.required , Validators.minLength(3)]),
  });

  constructor(private router: Router) {
  }
    get f()
    {
      return this.form.controls;
    }

  ngOnInit(): void {
  }

  submit():void
  {
    alert("Registered successfully"); 
  }

  btnClick =  () => {
    this.router.navigateByUrl('cashless-component');
  };

}
