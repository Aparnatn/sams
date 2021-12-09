import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    date:['',Validators.required],
    report_date:['',Validators.required],
   });

   supplier: supplierMasterdataResponse[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    

  }
  onSubmit(): void {
    this.service.supplier_master(this.supplierMasterDataForm.value).subscribe((pcash) => {
      this.supplier = pcash;

      
    });
  }
  back() {
    this.router.navigate(['/supplierbuttons']);
  }
}
