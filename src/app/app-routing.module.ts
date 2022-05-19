import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashlessComponent } from './cashless/cashless.component';
import { ExistingComponent } from './existing/existing.component';
import { RegisterComponent } from './register/register.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
  {path:'cashless-component',component:CashlessComponent},
  {path:'reimbursement-component',component:ReimbursementComponent},
  {path:'register-component',component:RegisterComponent},
  {path:'update-component',component:UpdateComponent},
  {path:'existing-component',component:ExistingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
