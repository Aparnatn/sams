import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StockBalanceResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';


@Component({
  selector: 'app-stock-balance',
  templateUrl: './stock-balance.component.html',
  styleUrls: ['./stock-balance.component.scss']
})
export class StockBalanceComponent implements OnInit {
  stockbalanceForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });

   stockb: StockBalanceResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service. stockbalanceF({}).subscribe((data) => {
      this.stockb = data;
      console.log(data);
    })
  }

  onSubmit(): void {
    this.service.stockbalanceF(this.stockbalanceForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
  }

}
