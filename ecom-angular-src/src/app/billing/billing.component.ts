import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billings: any;
  customerId!:number;

  constructor(private http: HttpClient, private router: Router ,private route : ActivatedRoute) {
this.customerId  = route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/billing/customerId="+this.customerId).subscribe(
      {
        next: (data) => {
          this.billings = data;
        },
        error: (err) => {
        }
      }
    )

  }
}
