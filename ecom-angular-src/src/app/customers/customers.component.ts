import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/customers").subscribe(
      {
        next: (data)=>{
          this.customers=data;
        },
        error: (err)=>{}
      }
    )
  }

  getOrders(c: any) {
this.router.navigateByUrl("/billing/"+c.id);

  }
}
