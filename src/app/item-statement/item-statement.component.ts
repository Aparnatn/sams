import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse } from '../interfaces/sales.interfaces';
import { ReportsService } from '../reports/reports.service';
import { ItemResponse } from '../user/login.interfaces';


@Component({
  selector: 'app-item-statement',
  templateUrl: './item-statement.component.html',
  styleUrls: ['./item-statement.component.scss']
})
export class ItemStatementComponent implements OnInit {
  ItemStatementForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],

   });

   Cash: CashSaleResponse[];
   PCash: PCashSaleResponse[];
   credit:CreditSaleResponse[];
   pcredit:CreditPurchaseResponse[];
   item:ItemResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
   
  }
  onSubmit(): void {

    this.service.item_statemnt(this.ItemStatementForm.value).subscribe((data,)=>{
      this.Cash = data;
    });

    // this.service.pchs4(this.ItemStatementForm.value).subscribe((data,)=>{
    //   this.PCash = data;
    //   console.log(data);
    // });

    //   this.service.crs4(this.ItemStatementForm.value).subscribe((data,)=>{
    //         this.credit = data;
    //         console.log(data);
    //       });

    //         this.service.crp4(this.ItemStatementForm.value).subscribe((data,)=>{
    //           this.pcredit = data;
    //           console.log(data);
    //         });

  }
  back() {
    this.router.navigate(['/itemjobbuttons']);
  }


}
