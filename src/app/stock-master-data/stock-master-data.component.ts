import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    date:['',Validators.required],
    report_date:['',Validators.required],
   });
   stock: stockmasterdataResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
   
  }
  onSubmit(): void {
    this.service.stock_masterD(this.stockMasterDataForm.value).subscribe((pcash) => {
      this.stock = pcash;

      
    });
    
  }
  
 
 back() {
   this.router.navigate(['/itemjobbuttons']);
 }


}
