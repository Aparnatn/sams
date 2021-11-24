import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { supplierMasterdataResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-supplier-master-data',
  templateUrl: './supplier-master-data.component.html',
  styleUrls: ['./supplier-master-data.component.scss']
})
export class SupplierMasterDataComponent implements OnInit {
  supplierMasterDataForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });

   supplier: supplierMasterdataResponse[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.supplierMasterDF({}).subscribe((data) => {
      this.supplier = data;
      console.log(data);
    })

  }
  onSubmit(): void {
    this.service.supplierMasterDF(this.supplierMasterDataForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
  }
}
