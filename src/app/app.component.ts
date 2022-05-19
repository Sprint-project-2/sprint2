import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title='mediclaim';

  form=new FormGroup({
    fname:new FormControl('',[Validators.required , Validators.minLength(6)]),
    lname:new FormControl('',[Validators.required , Validators.minLength(3)]),
    emailid:new FormControl('',[Validators.required , Validators.email]),
    contactno:new FormControl('',[Validators.required , Validators.minLength(10)]),
    city:new FormControl('',[Validators.required ]),
    pincode:new FormControl('',[Validators.required , Validators.minLength(6)]),
    dateofbirth:new FormControl('',[Validators.required,]),
  });

constructor(private router: Router) {

}

  get f()
  {
    return this.form.controls;
  }

  submit():void
  {
    alert("Registered successfully");    
  }

  btnClick =  () => {
    this.router.navigateByUrl('cashless-component');
  };

  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/cashless-component'])
    );
  
    window.open(url, '_self');
    window.open(url, '_blank');
  }
}
