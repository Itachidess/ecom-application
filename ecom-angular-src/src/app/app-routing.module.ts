import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import * as path from "path";
import {CustomersComponent} from "./customers/customers.component";
import {BillingComponent} from "./billing/billing.component";
import {BillsComponent} from "./bills/bills.component";

const routes: Routes = [
  {
    path : "products", component : ProductsComponent
  },

  {
    path : "customers", component : CustomersComponent
  },
  {
    path : "bills", component : BillsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
