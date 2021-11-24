import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentHistoryResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';


@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
 PaymentHistoryForm = this.formBuilder.group({
    report_date:"",
   });

   payment: PaymentHistoryResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.supplierPaymentHisF({}).subscribe((data) => {
      this.payment = data;
      console.log(data);
    })
  }
  onSubmit(): void {
    this.service.supplierPaymentHisF(this.PaymentHistoryForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
  }

}
