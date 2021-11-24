import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { stockmasterdataResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';


@Component({
  selector: 'app-stock-master-data',
  templateUrl: './stock-master-data.component.html',
  styleUrls: ['./stock-master-data.component.scss']
})
export class StockMasterDataComponent implements OnInit {
  stockMasterDataForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });
   stock: stockmasterdataResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.stockmasterDF({}).subscribe((data) => {
      this.stock = data;
      console.log(data);
    })
  }
  onSubmit(): void {

    this.service.stockmasterDF(this.stockMasterDataForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
  }

}
