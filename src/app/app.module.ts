import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CashlessComponent } from './cashless/cashless.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { ExistingComponent } from './existing/existing.component';


@NgModule({
  declarations: [
    AppComponent,
    CashlessComponent,
    ReimbursementComponent,
    RegisterComponent,
    UpdateComponent,
    ExistingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


