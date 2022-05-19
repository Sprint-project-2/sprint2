import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../core/test.service';
import { Registration } from '../models/register';


@Component({
  selector: 'app-cashless',
  templateUrl: './cashless.component.html',
  styleUrls: ['./cashless.component.css']
})
export class CashlessComponent implements OnInit {

  robj:Registration[];

    form=new FormGroup({
    billno:new FormControl('',[Validators.required , Validators.minLength(10)]),
    billingamount:new FormControl('',[Validators.required , Validators.minLength(5)]),
    billdate:new FormControl('',[Validators.required , Validators.minLength(3)]),
  });

  constructor(private router: Router,private service:TestService) {

  }

    get f()
    {
      return this.form.controls;
    }

  ngOnInit(): void {
  }

  displayreg():void
  {
    this.service.getallreg().subscribe(res=>{this.robj=res});
  }
}
